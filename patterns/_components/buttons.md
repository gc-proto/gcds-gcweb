---
dependency: None
dateModified: 2024-04-02
status: "In progress"
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
            <button type="button" class="btn btn-primary">Button label</button>
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
            <button type="button" class="btn btn-default">Default button</button>
            <button type="button" class="btn btn-default btn-sm">sm button</button>
    `       <button type="button" class="btn btn-default btn-xs">xs button</button>
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
       <gcds-button>
        Button label
      </gcds-button>
      <gcds-button button-role="secondary">
        Default
      </gcds-button>
      <gcds-button button-role="danger">
        Danger
      </gcds-button>
      </div>
    </section>
    <!-- <dl>
      <dt>Link colour:</dt>
      <dd>rgb(43, 67, 128)</dd>
      <dt>Font size:</dt>
      <dd> mobile: 16px | desktop: 20px</dd>
      <dt>Focus:</dt>
      <dd>Outline-color: rgb(5, 53, 210)</dd>
      <dt>Styled state:</dt>
      <dd>
        <ul>
          <li>hover</li>
          <li>focus</li>
        </ul>
      </dd>
      <dt>Truncated:</dt>
      <dd>-</dd>
      <dt>Icon:</dt>
      <dd>custom, after</dd>
      <dt>Guidance:</dt>
      <dd>Web, Figma, Storybook</dd>
      <dt>Clickable:</dt>
      <dd>True/False</dd>
      <dt>First item:</dt>
      <dd>Customizable</dd>
    </dl> -->
  </div>
</div>
