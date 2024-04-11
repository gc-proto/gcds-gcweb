---
dependency: None
dateModified: 2024-04-04
status: "For review"
title: Links
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
        <ul  class="list-unstyled">
          <li>
            <a href="#">Rest</a>
          </li>
          <li>
            <a href="#">Hover</a>
          </li>
          <li>
            <a href="#">Focus</a>
          </li>
          <li>
            <a href="#">Visited</a>
          </li>
        </ul>
      </div>
    </section>
    <!-- <dl>
      <dt>Link colour:</dt>
      <dd>rgb(40, 65, 98)</dd>
      <dt>Font size:</dt>
      <dd>16px</dd>
      <dt>Focus:</dt>
      <dd>Outline-color: rgb(229, 151, 0)</dd>
      <dt>Styled state:</dt>
      <dd>
        <ul>
          <li>hover</li>
          <li>focus</li>
          <li>visited</li>
        </ul>
      </dd>
      <dt>Truncated:</dt>
      <dd>ellipsis</dd>
      <dt>Icon:</dt>
      <dd>Glyphicons, before</dd>
      <dt>Guidance:</dt>
      <dd>Incomplete (missing states, Figma file)</dd>
      <dt>Clickable:</dt>
      <dd>True</dd>
      <dt>First item:</dt>
      <dd>Canada.ca</dd>
    </dl> -->
  </div>
  <div class="col-md-6">
    <section class="panel panel-default hght-inhrt">
      <header class="panel-heading"><h2 class="panel-title">GCDS</h2></header>
      <div class="panel-body">
        <ul class="list-unstyled">
          <li>
            <gcds-link href="#">
              Rest
            </gcds-link>
          </li>
          <li>
            <gcds-link href="#">
              Hover
            </gcds-link>
          </li>
          <li>
            <gcds-link href="#">
              Focus
            </gcds-link>
          </li>
        </ul>
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
<ul>
  <li>Text colour for GCWeb should be #26374a and should tokenize as gcds-accent-colour</li>
  <li>Focus state for links should be styled as GCDS</li>
  <li>The underline should be styled as GCDS (the underline might be closer)</li>
  <li>Add the GCWeb visited state</li>
  <li>All links colours should be tokenized in GCWeb</li>
</ul>
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
