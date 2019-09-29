## CSS

=> What is CSS selector specificity and how does it work?
==> Specificty is the means by which browsers decide which CSS property values are most important. 

=> What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
==> 
Resetting is meant to strip all default browser styling on elements. For e.g. margins, paddings, font-sizes of all elements are reset to be the same. 
You have to redeclare styling for common typographic elements.
==>
Normalizing preserves useful default styles rather than “unstyling” everything. It also corrects bugs for common browser dependencies.
=== 
I would choose resetting when I have very a customized or unconventional site design such that I need to do a lot of my own styling do not need any default styling to be preserved.

=> Describe z-index and how stacking context is formed.
==> The z-index property in CSS controls the vertical stacking order of elements that overlap. It only effects elements that have a position value that is not static.

=> Describe floats and how they work.
==> Float is a CSS positioning property. Floated elements remain a part of the flow of the page, and will affect the positioning of other elements (e.g. text will flow around floated elements), unlike position: absolute elements, which are removed from the flow of the page.