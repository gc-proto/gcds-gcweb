---
dateModified: 2024-05-22
dependency: Signature, language toggle, links, search, breadcrumbs, top menu
layout: no-container
status: "In progress"
title: Global header
---
<div class="container">
  <dl class="dl-horizontal brdr-0">
    <dt>Status</dt>
    <dd><span class="label label-warning mrgn-lft-sm">{{ page.status }}</span></dd>
    <dt>Dependencies</dt>
    <dd><span class="label label-info mrgn-lft-sm">{{ page.dependency }}</span></dd>
  </dl>
</div>
<section class="panel panel-default hght-inhrt">
  <header class="panel-heading"><h2 class="panel-title">GCWeb</h2></header>
  <div class="panel-body">
    <nav>
      <ul id="wb-tphp">
        <li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li>
        <li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to About this site</a></li>
      </ul>
    </nav>
    <header>
      <div id="wb-bnr" class="container"><div class="row">
        <section id="wb-lng" class="col-xs-3 col-sm-12 pull-right text-right">
          <h2 class="wb-inv">Language selection</h2>
          <ul class="list-inline mrgn-bttm-0">
            <li><a lang="fr" hreflang="fr" href="header-docs-fr.html">
                <span class="hidden-xs" translate="no">Français</span>
                <abbr title="Français" translate="no" class="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase">fr</abbr>
            </a></li>
          </ul>
        </section>
        <div class="brand col-xs-9 col-sm-5 col-md-4" property="publisher" typeof="GovernmentOrganization">
          <a href="https://www.canada.ca/en.html" property="url">
            <img src="https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/sig-blk-en.svg" alt="Government of Canada" property="logo" /><span class="wb-inv"> / <span lang="fr">Gouvernement du Canada</span></span>
          </a>
          <meta property="name" content="Government of Canada">
          <meta property="areaServed" typeof="Country" content="Canada" />
          <link property="logo" href="https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/wmms-blk.svg" />
        </div>
        <section id="wb-srch" class="col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-xs-12 col-sm-5 col-md-4">
          <h2>Search</h2>
          <form action="https://www.canada.ca/en/sr/srb.html" name="cse-search-box" role="search">
            <div class="form-group wb-srch-qry">
              <label for="wb-srch-q" class="wb-inv">Search Canada.ca</label>
              <input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Search Canada.ca" />
              <datalist id="wb-srch-q-ac"></datalist>
            </div>
            <div class="form-group submit">
              <button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search</span></button>
            </div>
          </form>
        </section>
      </div>
    </div>
    <hr>
    <div class="container"><div class="row"><div class="col-md-8">
      <nav class="gcweb-menu" typeof="SiteNavigationElement">
        <h2 class="wb-inv">Menu</h2>
        <button type="button" aria-haspopup="true" aria-expanded="false"><span class="wb-inv">Main </span>Menu <span class="expicon glyphicon glyphicon-chevron-down"></span></button>
        <ul role="menu" aria-orientation="vertical" data-ajax-replace="https://www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-en.html"><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/jobs.html">Jobs and the workplace</a></li>
          <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/immigration-citizenship.html">Immigration and citizenship</a></li>
          <li role="presentation"><a role="menuitem" href="https://travel.gc.ca/">Travel and tourism</a></li>
          <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/business.html">Business and industry</a></li>
          <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/benefits.html">Benefits</a></li>
          <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/health.html">Health</a></li>
          <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/taxes.html">Taxes</a></li>
          <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/environment.html">Environment and natural resources</a></li>
          <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/defence.html">National security and defence</a></li>
          <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/culture.html">Culture, history and sport</a></li>
          <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/policing.html">Policing, justice and emergencies</a></li>
          <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/transport.html">Transport and infrastructure</a></li>
          <li role="presentation"><a role="menuitem" href="https://international.gc.ca/world-monde/index.aspx?lang=eng">Canada and the world</a></li>
          <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/finance.html">Money and finances</a></li>
          <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/science.html">Science and innovation</a></li></ul>
      </nav>
      </div></div></div>
      <nav id="wb-bc" property="breadcrumb">
        <h2>You are here:</h2>
        <div class="container">
          <ol class="breadcrumb" typeof="BreadcrumbList">
            <li property="itemListElement" typeof="ListItem">
              <a property="item" typeof="WebPage" href="https://www.canada.ca/en.html">
                <span property="name">Canada.ca</span>
              </a>
              <meta property="position" content="1">
            </li>
          </ol>
        </div>
      </nav>
    </header>
  </div>
</section>
<section class="panel panel-default hght-inhrt">
  <header class="panel-heading"><h2 class="panel-title">GCDS</h2></header>
  <div class="panel-body">
    <gcds-header
    lang-href="en/index.html"
    skip-to-href="#"
    >
    </gcds-header>
  </div>
</section>
<div class="container">
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