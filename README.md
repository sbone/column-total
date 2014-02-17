# Click to Count
This weekend I was collecting tax documents, and wanted to add a couple numbers together from a column of tabular data.
Instead of manually typing in the dozen numbers, I...
* took a screenshot,
* OCR'd it
* split the string into an array with Javascript
* calculated the array total with a for loop

It took longer than just typing it out, but that's not as satisfying.

That inspired me to try and write a lil' JS bookmarklet that'd let me
click on elements and add their amounts together.
It's not robust, and is currently just made to handle numbers in tables.

## TODO:
* working demo page
* toggable history (show which numbers are added together)
* bookmarklet builder
* change mouse cursor on clickable/addable elements?

