---
dateModified: 2024-04-02
dependency: None
status: "For review"
title: Buttons
---
<dl class="dl-horizontal brdr-0">
  <dt>Status</dt>
  <dd><span class="label label-warning mrgn-lft-sm">{{ page.status }}</span></dd>
  <dt>Dependencies</dt>
  <dd><span class="label label-info mrgn-lft-sm">{{ page.dependency }}</span></dd>
</dl>

<div class="row wb-eqht">
  <div class="col-md-6">
    <section class="panel panel-default hght-inhrt">
      <header class="panel-heading"><h2 class="panel-title">GCWeb</h2></header>
      <div class="panel-body">
        <ul  class="list-unstyled lst-spcd">
          <li>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-default">Default</button>
            <button type="button" class="btn btn-danger">Danger</button>
          </li>
          <li>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-link">Link</button>
          </li>
          <li>
            <button type="button" class="btn btn-default btn-lg">Lg button</button>
            <button type="button" class="btn btn-default">Default md button</button>
            <button type="button" class="btn btn-default btn-sm">sm button</button>
            <button type="button" class="btn btn-default btn-xs">xs button</button>
          </li>
          <li>
            <button type="button" class="btn btn-call-to-action">Supertask button</button>
          </li>
        </ul>
      </div>
    </section>
  </div>
  <div class="col-md-6">
    <section class="panel panel-default hght-inhrt">
      <header class="panel-heading"><h2 class="panel-title">GCDS</h2></header>
      <div class="panel-body">
       <gcds-button>
        Primary
      </gcds-button>
      <gcds-button button-role="secondary">
        Default
      </gcds-button>
      <gcds-button button-role="danger">
        Danger
      </gcds-button>
      </div>
    </section>
  </div>
</div>
<div class="row">
  <div class="col-md-6">
    <h2>DOM Node types</h2> 
    <p>There are several types of nodes, including:</p>
    <dl>
      <dt>Element</dt>
      <dd>Represents an HTML element, such as a <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, or <code>&lt;img&gt;</code>.</dd>
      <dt>Attr</dt>
      <dd>Represents an attribute of an element, such as the href attribute of a <code>&lt;a</code>&gt; tag.</dd>
      <dt>Text</dt>
      <dd>Represents plain text within an element, such as the content of a <code>&lt;p</code>&gt; tag.</dd>
    </dl>
    <h2>Node relationships</h2>
    <p>Nodes can have relationships with each other, such as:</p>
    <dl>
      <dt>Parent-Child</dt>
      <dd>A node can have a parent node, which is the node that contains it.</dd>
      <dt>Sibling</dt> 
      <dd>Nodes can have siblings, which are nodes at the same level in the document tree.</dd>
      <dt>Child nodes</dt>
      <dd>A node can have child nodes, which are nodes that are contained within it.</dd>
      <dt>CSS computed info</dt>
      <dd>The computed style of the element(s)</dd>
    </dl> 
  </div>
</div>
<h2>Decision rational</h2>
<p>What are we going to do?</p>

- Keep the Supertask button [because research](https://docs.google.com/document/d/1BfqYgcctsE-8IxATOmvirHksAd0f_2INs0EyuzYEG3o/edit#heading=h.9fzn9rvtxnbu)
- Update Canada.ca buttons to match the GCDS look
- We can update the look of the Supertask to match the modern look of GCDS
- Keep the Sign In button because CRA no visual updates
- Other button styles are straight from Bootstrap 3 w no overrides
- Scan of Canada.ca to see which buttons are widely use at the moment
  - Warning, info, success
  - Sizes
- We need a better guidance for buttons and links to avoid confusion about use cases

<h3>Decision and next steps</h3>
<div class="checkbox gc-chckbxrdio">
  <input id="todo1" type="checkbox" /><label for="todo1">Decision required</label>
</div>
<div class="checkbox gc-chckbxrdio">
  <input id="todo2" type="checkbox" /><label for="todo2">Decision made</label>
</div>
<div class="checkbox gc-chckbxrdio">
  <input id="todo3" type="checkbox" /><label for="todo3">No decision</label>
</div>
<div class="checkbox gc-chckbxrdio">
  <input id="todo4" type="checkbox" /><label for="todo4">Discusion - decision not required</label>
</div>