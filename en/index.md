---
breadcrumbs: false
dateModified: 2020-07-04
title: Mandatory elements
---
<div class="container">
  <div class="row">
    <p class="mrgn-tp-lg" property="description">List of Canada.ca GC mandatory elements: differences between Canada.ca DS and GC Design System. Their rationale should be explained in the documentation of each pattern.</p>
    <p>To help with the comparison, we have created a <a href="parser.html">parser</a> that extracts key DOM information about a component.</p>
    <p>We're working on a <a href="methodology.html">comparison methodology</a> to evaluate the visual alignment of components from the two different design systems.</p>
    <h2>Table of mandatory elements</h2>
    {% for collection in site.collections %}
      {%- unless collection.label contains "posts" -%}
    <table class="wb-tables table mrgn-bttm-lg" data-wb-tables='{"ordering": true }'>
      <caption class="bg-info">{{ collection.label }}</caption>
      <tfoot>
        <tr>
          <td colspan="4"><b>Total</b>: {{ collection.docs.size }}</td>
        </tr>
      </tfoot>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Dependencies</th>
          <th>Alignment</th>
        </tr>
      </thead>
      <tbody>
        {%- for pattern in collection.docs -%}
        <tr>
          <td><a href="{{ pattern.url | relative_url }}">{{ pattern.title }}</a></td>
          <td>{{ pattern.status }}</td>
          <td>{{ pattern.dependency }}</td>
          <td><meter value="{{ pattern.alignment }}" min="0" low="33" high="66" optimum="83" max="100"></meter></td>
        </tr>
        {%- endfor -%}
      </tbody>
    </table>
      {%- endunless -%}
    {% endfor %}
  </div>
</div>

<p>Link to the <a href="parser.html">parser</a></p>