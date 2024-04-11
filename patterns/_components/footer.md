---
dateModified: 2024-05-22
dependency: Links, signature
layout: no-container
status: "In progress"
title: Global footer
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
    <footer id="wb-info">
      <h2 class="wb-inv">About this site</h2>
      <div class="gc-contextual">
        <div class="container">
          <nav>
            <h3>[Contextual footer header]</h3>
            <ul class="list-col-xs-1 list-col-sm-2 list-col-md-3"><li><a href="http://canada.ca/en">Contextual link 1</a></li><li><a href="http://canada.ca/en">Contextual link 2</a></li><li><a href="http://canada.ca/en">Contextual link 3</a></li></ul>
          </nav>
        </div>
      </div>
      <div class="gc-main-footer">
        <div class="container">
          <nav>
            <h3>Government of Canada</h3>
            <ul class="list-col-xs-1 list-col-sm-2 list-col-md-3"><li><a href="https://www.canada.ca/en/contact.html">All contacts</a></li>
              <li><a href="https://www.canada.ca/en/government/dept.html">Departments and agencies</a></li>
              <li><a href="https://www.canada.ca/en/government/system.html">About government</a></li></ul>
            <h4><span class="wb-inv">Themes and topics</span></h4>
            <ul class="list-unstyled colcount-sm-2 colcount-md-3"><li><a href="https://www.canada.ca/en/services/jobs.html">Jobs</a></li>
              <li><a href="https://www.canada.ca/en/services/immigration-citizenship.html">Immigration and citizenship</a></li>
              <li><a href="https://travel.gc.ca/">Travel and tourism</a></li>
              <li><a href="https://www.canada.ca/en/services/business.html">Business</a></li>
              <li><a href="https://www.canada.ca/en/services/benefits.html">Benefits</a></li>
              <li><a href="https://www.canada.ca/en/services/health.html">Health</a></li>
              <li><a href="https://www.canada.ca/en/services/taxes.html">Taxes</a></li>
              <li><a href="https://www.canada.ca/en/services/environment.html">Environment and natural resources</a></li>
              <li><a href="https://www.canada.ca/en/services/defence.html">National security and defence</a></li>
              <li><a href="https://www.canada.ca/en/services/culture.html">Culture, history and sport</a></li>
              <li><a href="https://www.canada.ca/en/services/policing.html">Policing, justice and emergencies</a></li>
              <li><a href="https://www.canada.ca/en/services/transport.html">Transport and infrastructure</a></li>
              <li><a href="https://international.gc.ca/world-monde/index.aspx?lang=eng">Canada and the world</a></li>
              <li><a href="https://www.canada.ca/en/services/finance.html">Money and finance</a></li>
              <li><a href="https://www.canada.ca/en/services/science.html">Science and innovation</a></li>
              <li><a href="https://www.canada.ca/en/services/indigenous-peoples.html">Indigenous peoples</a></li>
              <li><a href="https://www.canada.ca/en/services/veterans-military.html">Veterans and military</a></li>
              <li><a href="https://www.canada.ca/en/services/youth.html">Youth</a></li></ul>
          </nav>
        </div>
      </div>
      <div class="gc-sub-footer">
        <div class="container d-flex align-items-center">
          <nav>
            <h3 class="wb-inv">Government of Canada Corporate</h3>
            <ul>
              <li><a href="https://www.canada.ca/en/social.html">Social media</a></li>
              <li><a href="https://www.canada.ca/en/mobile.html">Mobile applications</a></li>
              <li><a href="https://www.canada.ca/en/government/about.html">About Canada.ca</a></li><li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>
              <li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li>
            </ul>
          </nav>
          <div class="wtrmrk align-self-end">
            <img src="https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/wmms-blk.svg" alt="Symbol of the Government of Canada" />
          </div>
        </div>
      </div>
    </footer>
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
    <gcds-footer
      display="full"
      contextual-heading="Contextual navigation"
      contextual-links='{ "Why GC Notify": "#", "Features": "#", "Activity on GC Notify": "#" }'
    >
    </gcds-footer>
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