let state = {
  patternName: '',
  patternSource: '',
  content: '',
  jsonData: '',
  iframeContent: '<!DOCTYPE html><html><head></head><body></body></html>'
};

// Function to update the state without re-rendering the UI
function updateState(updates) {
  state = { ...state, ...updates };
}

// Function to render the UI based on the current state
function renderUI() {
  document.getElementById('patternName').value = state.patternName;
  if (state.patternSource) {
      document.querySelector(`input[name="patternSource"][value="${state.patternSource}"]`).checked = true;
  }
  document.getElementById('content').value = state.content;
  document.getElementById('jsonPreview').textContent = state.jsonData;

  const iframe = document.getElementById('renderFrame');
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

  // Ensure content is fully written before processing
  iframeDoc.open();
  iframeDoc.write(state.iframeContent);
  iframeDoc.close();

  if (state.patternSource === 'GCDS') {
      const scriptModule = iframeDoc.createElement('script');
      scriptModule.type = 'module';
      scriptModule.src = 'https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@latest/dist/gcds/gcds.esm.js';
      iframeDoc.head.appendChild(scriptModule);

      const scriptNoModule = iframeDoc.createElement('script');
      scriptNoModule.nomodule = true;
      scriptNoModule.src = 'https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@latest/dist/gcds/gcds.js';
      iframeDoc.head.appendChild(scriptNoModule);
  }

  // Append stylesheets and scripts from parent document to iframe
  Array.from(document.styleSheets).forEach(sheet => {
      if (sheet.href) {
          const link = iframeDoc.createElement('link');
          link.rel = 'stylesheet';
          link.href = sheet.href;
          iframeDoc.head.appendChild(link);
      } else if (sheet.ownerNode && sheet.ownerNode.tagName === 'STYLE') {
          const style = iframeDoc.createElement('style');
          style.textContent = sheet.ownerNode.textContent;
          iframeDoc.head.appendChild(style);
      }
  });

  iframe.onload = async () => {
    setTimeout(async () => {
        const root = iframeDoc.body.firstElementChild;
        const domInfo = traverseDOM(root);
        const jsonData = JSON.stringify(domInfo, null, 2);
        updateState({ jsonData });
        document.getElementById('jsonPreview').textContent = jsonData; // Update JSON preview
    }, 500)
  };
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  renderUI(); // Initial rendering of the UI

  document.getElementById('patternName').addEventListener('input', (event) => {
      updateState({ patternName: event.target.value });
  });

  document.querySelectorAll('input[name="patternSource"]').forEach(radio => {
      radio.addEventListener('change', (event) => {
          updateState({ patternSource: event.target.value });
      });
  });

  document.getElementById('content').addEventListener('input', (event) => {
      updateState({ content: event.target.value });
  });

  document.getElementById('getInfo').addEventListener('click', handleGetInfoOnClick);
});

async function handleGetInfoOnClick() {
  const { patternName, patternSource, content } = state;

  if (!patternName || !patternSource || !content) {
      alert('All fields are required.');
      return;
  }

  const iframeContent = `
      <!DOCTYPE html>
      <html>
      <head></head>
      <body>${content}</body>
      </html>
  `;
  updateState({ iframeContent });

  renderUI(); // Only render UI when the export button is clicked
}

function getNodeInfo(node) {
  const nodeInfo = {
      nodeType: node.nodeType,
      nodeName: node.nodeName,
      textContent: node.nodeType === Node.TEXT_NODE ? node.textContent : '',
      attributes: {},
      computedStyles: {},
      pseudoStyles: {}
  };

  if (node.nodeType === Node.ELEMENT_NODE) {
      Array.from(node.attributes).forEach(attr => {
          nodeInfo.attributes[attr.name] = attr.value;
      });

      const computedStyles = window.getComputedStyle(node);

      // Create a new element of the same type to compare default styles
      const defaultElement = document.createElement(node.nodeName);
      document.body.appendChild(defaultElement);
      const defaultStyles = window.getComputedStyle(defaultElement);

      for (let style of computedStyles) {
          const value = computedStyles.getPropertyValue(style);
          const defaultValue = defaultStyles.getPropertyValue(style);
          if (value !== defaultValue) {
              nodeInfo.computedStyles[style] = value;
          }
      }

      // Clean up the default element
      document.body.removeChild(defaultElement);

      // Capture pseudo-styles
      const pseudoStates = [':hover', ':active', ':visited', ':focus'];
      pseudoStates.forEach(state => {
          const pseudoStyles = window.getComputedStyle(node, state);
          nodeInfo.pseudoStyles[state] = {};
          for (let style of pseudoStyles) {
              const value = pseudoStyles.getPropertyValue(style);
              if (value !== 'none' && value !== 'auto' && value !== 'normal' && value !== '0') {
                  nodeInfo.pseudoStyles[state][style] = value;
              }
          }
      });
  }

  return nodeInfo;
}

function traverseDOM(node, parentInfo = null) {
  const nodeInfo = getNodeInfo(node);
  nodeInfo.children = Array.from(node.childNodes).map(child => traverseDOM(child, nodeInfo));
  nodeInfo.parent = parentInfo && parentInfo.nodeName != 'BODY' ? { nodeName: parentInfo.nodeName, nodeType: parentInfo.nodeType } : null;

  // Traverse Shadow DOM if it exists
  if (node.shadowRoot) {
      nodeInfo.shadowRoot = Array.from(node.shadowRoot.childNodes).map(child => traverseDOM(child, nodeInfo));
  }

  return nodeInfo;
}

function executeScripts(iframeDoc) {
  return new Promise((resolve) => {
      const scriptTags = Array.from(iframeDoc.querySelectorAll('script'));
      let loadedScripts = 0;
      scriptTags.forEach((scriptTag) => {
          const scriptElement = iframeDoc.createElement('script');
          if (scriptTag.type) scriptElement.type = scriptTag.type;
          if (scriptTag.src) {
              scriptElement.src = scriptTag.src;
              scriptElement.onload = () => {
                  loadedScripts += 1;
                  if (loadedScripts === scriptTags.length) resolve();
              };
          } else {
              scriptElement.textContent = scriptTag.textContent;
              loadedScripts += 1;
          }
          iframeDoc.head.appendChild(scriptElement);
          scriptTag.remove();
      });
      if (loadedScripts === scriptTags.length) resolve();
  });
}
