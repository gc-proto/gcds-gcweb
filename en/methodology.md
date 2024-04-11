---
breadcrumbs:
- title: Home
  link: "/en/"
dateModified: 2024-07-11
lang: en
title: Comparison methodology
---

To compare the visual alignment of components from the two different design systems, we can use a systematic methodology that examines key visual elements such as typography, spacing, and colors. Here's a step-by-step approach to create this comparison:

### 1. Defining comparison criteria
Establishing a set of criteria for comparing components. These criteria can include:

- **Typography**: Font family, size, weight, line height, and letter spacing.
- **Spacing**: Padding, margin, and overall component dimensions.
- **Colors**: Background color, border color, text color, and hover/active states.
- **Layout**: Responsiveness, grid systems, and layout alignment.

### 2. Gathering component data
Collecting detailed information about the components we want to compare from each design system. For example, for buttons:

- GCDS: Typography (font family, size, weight), padding, margin, background color, border color, text color.
- GCWeb: Same set of properties.

### 3. Creating a comparison matrix
Create a matrix or a table to visually compare each component's properties. Here’s an example structure:

<table class="table table-bordered">
   <thead>
      <tr>
         <th>Property</th>
         <th>GCDS</th>
         <th>GCWeb</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Font Family</td>
         <td>Arial</td>
         <td>Helvetica</td>
      </tr>
      <tr>
         <td>Font Size</td>
         <td>14px</td>
         <td>16px</td>
      </tr>
      <tr>
         <td>Font Weight</td>
         <td>Bold</td>
         <td>Normal</td>
      </tr>
      <tr>
         <td>Line Height</td>
         <td>1.5</td>
         <td>1.4</td>
      </tr>
      <tr> 
         <td>Letter Spacing</td>
         <td>0.5px</td>
         <td>0.2px</td>
      </tr>
      <tr>
         <td>Padding</td>
         <td>10px 20px</td>
         <td>12px 18px</td>
      </tr>
      <tr>
         <td>Margin</td>
         <td>8px</td>
         <td>10px</td>
      </tr>
      <tr>
         <td>Background Color</td>
         <td>#007BFF</td>
         <td>#0066CC</td>
      </tr>
      <tr>
         <td>Border Color</td>
         <td>#0056b3</td>
         <td>#004080</td>
      </tr>
      <tr>
         <td>Text Color</td>
         <td>#FFFFFF</td>
         <td>#FFFFFF</td>
      </tr>
      <tr>
         <td>Hover State</td>
         <td>Darker shade</td>
         <td>Darker shade</td>
      </tr>
   </tbody>
</table>

### 4. Visual analysis
Use visual aids to help compare the components. This can include:

- **Screenshots**: Place screenshots of the components side by side.
- **Overlay Comparison**: Overlay one component on top of the other with some transparency to see differences directly.
- **Design Tools**: Use tools like Figma, Sketch, or Adobe XD to import the components and compare them within a design file.

### 5. Quantitative and qualitative analysis
- **Quantitative**: Measuring and noting the exact differences in values (e.g., font size differences in pixels, padding in pixels).
- **Qualitative**: Describing the visual impact of these differences. For instance, "The buttons in GCDS have a bolder appearance due to the thicker font weight and slightly larger padding."

### 6. Scoring system
Developing a scoring system to rank the alignment level. This can be a simple scale (e.g., 1 to 5) for each property or a more complex weighted system if certain properties are more important than others.

### 7. Summary and recommendations
Summarizing our findings in a report. Highlight areas where the components align well and where there are significant differences. Providing recommendations on how to achieve better visual alignment if needed.

### Example Comparison Process
1. **Typography**:
   - Comparing font families to see if they have similar characteristics.
   - Measuring font sizes and weights to identify discrepancies.
   - Checking line height and letter spacing for consistency.

2. **Spacing**:
   - Measuring padding and margin around the components.
   - Comparing the overall dimensions of similar components.

3. **Colors**:
   - Comparing the hex codes of background, border, and text colors.
   - Looking at the color contrast and accessibility compliance.

### Tools for comparison
- **Design Inspection Tools**: Tools like Figma's Inspect feature or parser (that export detailled DOM information) can help extract exact values for typography, spacing, and colors.
- **Browser Dev Tools**: Use browser developer tools to inspect and compare CSS properties directly from live websites.
- **Comparison Tools**: Tools like [Applitools](https://applitools.com/) or [AyeSpy](https://github.com/newsuk/AyeSpy) can also facilitate the comparison of design specs.

By following a structured methodology, we can effectively compare the visual alignment of components from the different design systems, ensuring a thorough analysis of typography, spacing, and colors.