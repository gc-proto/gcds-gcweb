---
dateModified: 2024-05-22
dependency: Links
status: "In progress"
title: Theme and topic menu
---
<dl class="dl-horizontal brdr-0">
  <dt>Status</dt>
  <dd><span class="label label-warning mrgn-lft-sm">{{ page.status }}</span></dd>
  <dt>Dependencies</dt>
  <dd><span class="label label-info mrgn-lft-sm">{{ page.dependency }}</span></dd>
</dl>
<section class="panel panel-default hght-inhrt">
  <header class="panel-heading"><h2 class="panel-title">GCWeb</h2></header>
  <div class="panel-body">
    <div class="container">
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
          <li role="presentation"><a role="menuitem" href="https://www.international.gc.ca/world-monde/index.aspx?lang=eng">Canada and the world</a></li>
          <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/finance.html">Money and finances</a></li>
          <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/science.html">Science and innovation</a></li></ul>
      </nav>
    </div>
  </div>
</section>
<section class="panel panel-default hght-inhrt">
  <header class="panel-heading"><h2 class="panel-title">GCDS</h2></header>
  <div class="panel-body">
    <gcds-topic-menu></gcds-topic-menu>
  </div>
</section>
