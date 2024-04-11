---
component: link
dateModified: 2024-04-04
dependency: None
lang: en
layout: side-by-side
status: "Reviewed (completed)"
title: Links
zenhub-issue: 957
---
## Decision rational
What are we going to do?

- Link colour on Canada.ca is #26374a and could be tokenized as gcds-accent-colour
  - We need to make sure that contrast between links and surrounding text (AA or AAA)
  - Does the underline be sufficient to indicate a link
  - Between the normal and the hover state, the contrast is not great for the GCWeb colours
- ~~Focus state for links should be styled as GCDS~~
- ~~The underline should be styled as GCDS (the underline might be closer)~~
- Add the GCWeb visited state
- ~~All links colours should be tokenized in GCWeb~~

```
Jennifer Mealing
15 h 10
The underline is sufficient to indicate
Jennifer Mealing
15 h 13
Though you said AAA, AA might be possible - though again then the state change, etc. everything being distinguishable. Also I've never seen anything that WCAG says you have to meet that for a link to be compliant?
There's other visual clues, cursor, underline, etc.
Jennifer Mealing
15 h 16
it's the colour of the primary button too, so  it's just about simplifying the colour palette
Dylan Zheng
15 h 16
https://www.w3.org/WAI/WCAG21/working-examples/link-contrast/
Jennifer Mealing
15 h 17
Thanks for the link Dylan
None of the links are underlined though in that example/documentation
Dylan Zheng
15 h 18
https://www.w3.org/WAI/WCAG21/Techniques/general/G183 
Yes we have the underline however meeting this success criterion would still be beneficial for our users
Ravina Samaroo
15 h 19
thanks Dylan never seen this guideline before
Dylan Zheng
15 h 19
Not only would a lighter link colour help us create a 3:1 contrast between surrounding text it would also enhance the contrast between rest and hover states as well.
Jennifer Mealing
15 h 21
Their own page (the Techniques) is written with a 1.33:1 ratio, for some reason
Dylan Zheng
15 h 21
I know lol
Jennifer Mealing
15 h 23
If we keep the same hue as the primary colour, #4E7FB7 would meet the 3:1
```