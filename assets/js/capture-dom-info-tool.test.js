const { getNodeInfo, traverseDom, gatherDomInfo, exportDomInfo } = require('./capture-dom-info-tool');

// Mocking document structure for testing
document.body.innerHTML = `
  <div id="root">
    <span id="child1">Text</span>
    <div id="child2">
      <p id="child2-1">Nested Text</p>
    </div>
  </div>
`;

describe('DOM Traversal Tool', () => {
  test('getNodeInfo should gather information of a node correctly', () => {
    const rootNode = document.getElementById('root');
    const info = getNodeInfo(rootNode);

    expect(info.tagName).toBe('DIV');
    expect(info.children.length).toBe(2);
    expect(info.children[0].tagName).toBe('SPAN');
  });

  test('traverseDom should traverse the DOM and gather information', () => {
    const rootNode = document.getElementById('root');
    const domInfo = traverseDom(rootNode);

    expect(domInfo.rootTagName).toBe('DIV');
    expect(domInfo.children.length).toBe(2);
    expect(domInfo.children[0].tagName).toBe('SPAN');
  });

  test('gatherDomInfo should gather complete DOM information', () => {
    const domInfo = gatherDomInfo(document.body);

    expect(domInfo.rootTagName).toBe('BODY');
    expect(domInfo.children.length).toBe(1);
    expect(domInfo.children[0].tagName).toBe('DIV');
  });
});
