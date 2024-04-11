---
status: "In progress"
dependency: Links
title: Language toggle
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
        <section id="wb-lng" class="col-xs-3 col-sm-12 pull-right text-right">
          <h2 class="wb-inv">Language selection</h2>
          <ul class="list-inline mrgn-bttm-0">
            <li><a lang="fr" hreflang="fr" href="header-docs-fr.html">
                <span class="hidden-xs" translate="no">Français</span>
                <abbr title="Français" translate="no" class="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase">fr</abbr>
            </a></li>
          </ul>
        </section>
      </div>
    </section>
  </div>
  <div class="col-md-6">
    <section class="panel panel-default hght-inhrt">
      <header class="panel-heading"><h2 class="panel-title">GCDS</h2></header>
      <div class="panel-body">
        <gcds-lang-toggle href="#"></gcds-lang-toggle>
      </div>
    </section>
  </div>
</div>
