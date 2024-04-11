---
dateModified: 2024-04-10
dependency: Lists
status: "In progress"
title: Date modified
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
       <dl id="wb-dtmd">
        <dt>Date modified:</dt>
        <dd><time property="dateModified">2023-01-26</time></dd>
      </dl>
      </div>
    </section>
  </div>
  <div class="col-md-6">
    <section class="panel panel-default hght-inhrt">
      <header class="panel-heading"><h2 class="panel-title">GCDS</h2></header>
      <div class="panel-body">
        <gcds-date-modified>2023-01-26</gcds-date-modified>
        <gcds-date-modified type="version">1.0.0</gcds-date-modified>
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