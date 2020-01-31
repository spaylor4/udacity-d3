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
