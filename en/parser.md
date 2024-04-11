---
breadcrumbs:
- title: Mandatory elements
  link: "/en/"
dateModified: 2024-05-24
script: "../../assets/js/export-json-tool.js"
title: Export Detailed DOM Info to JSON
---
<div class="row">
  <div class="col-md-6">
    <p>Some description</p>
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
    <button id="exportButton">Get DOM info</button>
    <iframe id="renderFrame" class="mrgn-tp-lg" style="display:block; border: none; width: 100%; height: 300px;"></iframe>
  </div>
  <div class="col-md-6">
    <pre id="jsonPreview" style="white-space: pre-wrap; border: 1px solid #ccc; padding: 10px; margin-top: 10px;"></pre>
    <!-- <button id="export">Export JSON file</button> -->
  </div>
</div>
<script>
    const defaultValues = {{ site.data.defaultStyles | jsonify }};
</script>