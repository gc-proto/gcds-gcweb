---
breadcrumbs:
- title: Home
  link: "/en/"
dateModified: 2024-05-24
lang: en
script: "../assets/js/export-json-tool.js"
title: Export Detailed DOM Info to JSON
---
<div class="row">
  <div class="col-md-6">
    <p>This tool allows you to analyze a DOM node by providing detailed information about its CSS and HTML relationships. It helps you understand how different elements are styled and structured within the node.</p>
    <label for="patternName">Pattern Name:</label>
    <input type="text" id="patternName" placeholder="Enter pattern name" required>
    <fieldset class="gc-chckbxrdio">
      <legend>Select your design system</legend>
      <div class="radio">
        <input type="radio" id="sourceGCWeb" name="patternSource" value="GCWeb" required><label for="sourceGCWeb">GCWeb</label>
      </div>
      <div class="radio">
        <input type="radio" id="sourceGCDesignSystem" name="patternSource" value="GCDS" required><label for="sourceGCDesignSystem">GC Design System</label>
      </div>
    </fieldset>
    <div class="form-group">
      <label for="content">HTML Code:</label>
      <textarea class="form-control" id="content" rows="10" cols="50" required></textarea>
    </div>
    <button class="btn btn-primary" id="getInfo">Get DOM info</button>
    <iframe id="renderFrame" class="mrgn-tp-lg" style="display:block; border: none; width: 100%; height: 300px;"></iframe>
  </div>
  <div class="col-md-6">
    <h2>JSON Preview</h2>
    <pre id="jsonPreview" style="white-space: pre-wrap; border: 1px solid #ccc; padding: 10px; margin-top: 10px;"></pre>
    <div class="btn-group">
      <button class="btn btn-default" id="copyJson">Copy JSON to clipboard</button>
      <button class="btn btn-default" id="export">Export JSON file</button>
    </div>
  </div>
</div>
<script>
    const defaultValues = {{ site.data.defaultStyles | jsonify }};
</script>