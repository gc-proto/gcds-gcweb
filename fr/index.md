---
title: Tout les composantes
---

<table class="table">
  <thead>
    <tr>
      <th>Nom</th>
      <th>État</th>
      <th>Dépendance</th>
    </tr>
  </thead>
  <tbody>
    {%- for pattern in site.patterns -%}
    <tr>
      <td><a href="{{ pattern.url }}">{{ pattern.name }}</a></td>
      <td>{{ pattern.status }}</td>
      <td>{{ pattern.dependency }}</td>
    </tr>
    {%- endfor -%}
  </tbody>
</table>