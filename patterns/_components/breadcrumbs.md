---
dependency: Links
dateModified: 2024-04-01
status: "For review"
title: Breadcrumbs trail
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
        <nav id="wb-bc" property="breadcrumb">
          <h2>You are here:</h2>
          <ol class="breadcrumb" typeof="BreadcrumbList" style="font-size: 16px">
            <li property="itemListElement" typeof="ListItem">
              <a property="item" typeof="WebPage" href="https://www.canada.ca/en.html">
                <span property="name">Canada.ca</span>
              </a>
              <meta property="position" content="1">
            </li>
            <li property="itemListElement" typeof="ListItem">
              <a property="item" typeof="WebPage" href="#">
                <span property="name">Home page</span>
              </a>
              <meta property="position" content="2">
            </li>
            <li property="itemListElement" typeof="ListItem">
              <a property="item" typeof="WebPage" href="#">
                <span property="name">Parent page link</span>
              </a>
              <meta property="position" content="3">
            </li>
          </ol>
        </nav>
      </div>
    </section>
  </div>
  <div class="col-md-6">
    <section class="panel panel-default hght-inhrt">
      <header class="panel-heading"><h2 class="panel-title">GCDS</h2></header>
      <div class="panel-body">
        <gcds-breadcrumbs>
          <gcds-breadcrumbs-item href="#">Home page</gcds-breadcrumbs-item>
          <gcds-breadcrumbs-item href="#">Parent page link</gcds-breadcrumbs-item>
        </gcds-breadcrumbs>
      </div>
    </section>
  </div>
</div>
<div class="row">
  <div class="col-md-6">
    <dl>
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
    </dl>
  </div>
  <div class="col-md-6">
    <dl>
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
    </dl>  
  </div>
</div>
<h2>Decision rational</h2>
<p>What are we going to do?</p>
<ul>
  <li>Font size are at 16px intentionally, because we wnat to keep some hierarchy between the content and the navigation elements</li>
  <li>Adjust padding so that there's even space right and left of the chevron</li>
  <li>We like the custom icon approach (but icon might need some review)</li>
  <li>Guidance: Clickable should be set to false on static web content and to true for web apps</li>
  <li>Guidance: Breadcrumbs can be customizable in applications</li>
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