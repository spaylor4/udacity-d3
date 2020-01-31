## Lesson 7: Narrative Structures

#### D3 Data Joins

Unlike normal javascript and many other coding languages, d3 doesn't need for loops to perform actions for all data points. Instead of a for loop like
```
for (var row in data) {
  draw("circle", row.val)
}
```
d3 instead appends the data to a selection using chained methods:
```
d3.select('svg')
  .selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
```
If there are no circles, the `.selectAll('circle')` will return an empty array. Then the `.data(data)` piece binds the data, and `.append('circle')` creates a circle for each point in the data.

D3 joins data (i.e. from a csv/json file) to html/svg elements on a page.

The `.enter()` statement is a special type of selection statement that selects the bound data. If there are no existing html elements corresponding to the data, `.enter()` selects the bound data to placeholder elements that aren't yet on the page, and `.append('circle')` adds them to the page svg element.

The enter method selects elements in data that aren't on the page yet, update selects those in data and already on the page, and exit selects those already on the page that aren't in the data.

#### Helpful Links

* [Thinking with Joins](https://bost.ocks.org/mike/join/): a more in-depth explanation of data joins
* [Visual Storytelling with D3](https://github.com/ritchieking/d3-book): d3 & data viz book, in github repo form
