/**
 * Gathers detailed information of a DOM node, including its children and computed styles.
 * @param {Node} node - The DOM node to gather information from.
 * @returns {Object} An object containing the node information.
 */
function getNodeInfo(node) {
    const computedStyles = window.getComputedStyle(node);
    const styles = {};

    for (let i = 0; i < computedStyles.length; i++) {
        const prop = computedStyles[i];
        styles[prop] = computedStyles.getPropertyValue(prop);
    }

    const info = {
        tagName: node.tagName,
        styles,
        children: [],
    };

    if (node.shadowRoot) {
        info.shadowRoot = traverseDom(node.shadowRoot);
    } else {
        node.childNodes.forEach(child => {
            if (child.nodeType === Node.ELEMENT_NODE) {
                info.children.push(getNodeInfo(child));
            }
        });
    }

    return info;
}

/**
 * Traverses the DOM starting from the given root node, gathering information recursively.
 * @param {Node} root - The root node to start the traversal from.
 * @returns {Object} An object containing the gathered DOM information.
 */
function traverseDom(root) {
    const domInfo = {
        rootTagName: root.tagName,
        children: [],
    };

    root.childNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
            domInfo.children.push(getNodeInfo(node));
        }
    });

    return domInfo;
}

/**
 * Initiates the traversal and gathers the entire DOM information.
 * @param {Node} root - The root node to start the traversal from.
 * @returns {Object} The complete DOM information.
 */
function gatherDomInfo(root) {
    return traverseDom(root);
}

/**
 * Exports the gathered DOM information as a JSON file.
 * @param {Object} domInfo - The DOM information to export.
 * @param {string} filename - The name of the output JSON file.
 */
function exportDomInfo(domInfo, filename) {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(domInfo, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", filename);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

document.addEventListener("DOMContentLoaded", () => {
    const getInfoButton = document.getElementById('getInfo');
    const exportButton = document.getElementById('export');
    const jsonPreview = document.getElementById('jsonPreview');
    let domInfo = null;

    getInfoButton.addEventListener('click', () => {
        domInfo = gatherDomInfo(document.body);
        jsonPreview.textContent = JSON.stringify(domInfo, null, 2);
    });

    exportButton.addEventListener('click', () => {
        if (domInfo) {
            exportDomInfo(domInfo, 'domInfo.json');
        } else {
            alert('Please gather the DOM information first by clicking "Get Info".');
        }
    });
});
