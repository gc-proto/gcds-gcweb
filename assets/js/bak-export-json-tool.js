function getNodeInfo(node) {
    const nodeInfo = {
        nodeType: node.nodeType,
        nodeName: node.nodeName,
        textContent: node.nodeType === Node.TEXT_NODE ? node.textContent : '',
        attributes: {},
        computedStyles: {}
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
    }

    return nodeInfo;
}

function traverseDOM(node, parentInfo = null) {
    const nodeInfo = getNodeInfo(node);
    nodeInfo.children = Array.from(node.childNodes).map(child => traverseDOM(child, nodeInfo));
    nodeInfo.parent = parentInfo ? { nodeName: parentInfo.nodeName, nodeType: parentInfo.nodeType } : null;

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

document.getElementById('exportButton').addEventListener('click', async () => {
    const patternName = document.getElementById('patternName').value.trim();
    const patternSource = document.querySelector('input[name="patternSource"]:checked').value;
    const content = document.getElementById('content').value.trim();

    if (!patternName || !patternSource || !content) {
        alert('All fields are required.');
        return;
    }

    const iframe = document.getElementById('renderFrame');
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Clear the iframe content
    iframeDoc.open();
    iframeDoc.write('<!DOCTYPE html><html><head></head><body></body></html>');
    iframeDoc.close();

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

    if (patternSource === 'GCDS') {
        const scriptModule = iframeDoc.createElement('script');
        scriptModule.type = 'module';
        scriptModule.src = 'https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@latest/dist/gcds/gcds.esm.js';
        iframeDoc.head.appendChild(scriptModule);

        const scriptNoModule = iframeDoc.createElement('script');
        scriptNoModule.nomodule = true;
        scriptNoModule.src = 'https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@latest/dist/gcds/gcds.js';
        iframeDoc.head.appendChild(scriptNoModule);
    }

    // Write the HTML content after adding the scripts
    iframeDoc.body.innerHTML = content;

    iframe.onload = async () => {
        await executeScripts( iframeDoc );

        const root = iframeDoc.body;
        const domInfo = traverseDOM( root );

        const jsonData = JSON.stringify( domInfo, null, 2 );

        // Show JSON preview in the pre tag
        document.getElementById( 'jsonPreview' ).textContent = jsonData;

        // Create and download the JSON file
        const blob = new Blob([ jsonData ], { type: 'application/json' });
        const url = URL.createObjectURL( blob );
        const a = document.createElement( 'a' );
        a.href = url;
        a.download = `${patternSource}_${patternName}.json`;
        document.body.appendChild( a );
        a.click();
        document.body.removeChild( a );
        URL.revokeObjectURL( url );
    };

    // Ensure iframe's onload is triggered
    iframeDoc.open();
    iframeDoc.write(`
        <!DOCTYPE html>
        <html>
            <head></head>
            <body>${content}</body>
        </html>`
    );
    iframeDoc.close();
});
