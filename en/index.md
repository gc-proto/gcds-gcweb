---
breadcrumbs: false
title: Mandatory elements
---
<div class="container">
  <div class="row">
    <p class="mrgn-tp-lg" property="description">List of Canada.ca GC mandatory elements: differences between Canada.ca DS and GC Design System. Their rationale should be explained in the documentation of each pattern.</p>

    <h2>Todo</h2>
    <div class="checkbox gc-chckbxrdio">
      <input id="todo1" type="checkbox" /><label for="todo1">Decide on the format of the rationale</label>
    </div>
    <div class="checkbox gc-chckbxrdio">
      <input id="todo2" type="checkbox" /><label for="todo2">Add the rationale to the documentation of each pattern</label>
    </div>
    <div class="checkbox gc-chckbxrdio">
      <input id="todo3" type="checkbox" /><label for="todo3">Leverage <code>_data</code> files to store the rationale</label>
    </div>
    <div class="checkbox gc-chckbxrdio">
      <input id="todo4" type="checkbox" /><label for="todo4">Figure out how to manage multiple languages (English and French)</label>
    </div>

    <h2>Table of mandatory elements</h2>
    {% for collection in site.collections %}
      {%- unless collection.label contains "posts" -%}
    <table class="table">
      <caption class="bg-info text-left">{{ collection.label }}</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Dependencies</th>
        </tr>
      </thead>
      <tbody>
        {%- for pattern in collection.docs -%}
        <tr>
          <td><a href="{{ pattern.url | relative_url }}">{{ pattern.title }}</a></td>
          <td>{{ pattern.status }}</td>
          <td>{{ pattern.dependency }}</td>
        </tr>
        {%- endfor -%}
      </tbody>
    </table>
      {%- endunless -%}
    {% endfor %}
  </div>
</div>