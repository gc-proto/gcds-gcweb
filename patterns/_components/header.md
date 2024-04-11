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
<section class="panel panel-default hght-inhrt">
  <header class="panel-heading"><h2 class="panel-title">GCDS</h2></header>
  <div class="panel-body">
    <gcds-header
    lang-href=""
    skip-to-href="#"
    >
    </gcds-header>
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