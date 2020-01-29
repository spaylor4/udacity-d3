## Lesson 5: [Dimple.js](http://dimplejs.org)

#### Basic Setup

To start a local webserver, run `python3 -m http.server` in the terminal.

To preview data in table format, run `console.table(data)` in javascript console. Need to refresh page to get debugger statement to catch and have data available.

In javascript, `===` tests for equality.

#### Chart Formatting

Course references Mike Bostock's [Margin Convention](https://bl.ocks.org/mbostock/3019563), which was helpful in explaining the reasoning behind the setup.

Strftime mapping cheatsheet [here](http://man7.org/linux/man-pages/man3/strftime.3.html).

#### Building Chart

Chart is plotted with code line `myChart.addSeries(null, dimple.plot.bar);`. The first argument is an option for faceting/grouping, which this example does not do, hence the null.

Need to call `myChart.draw();` after all chart elements are constructed to render the chart in the webpage.

Dimple automatically includes a tooltip with the data values.

Dimple allows both a line and scatter plot on the same chart. To do so, you must add both series:
```myChart.addSeries(null, dimple.plot.line);
myChart.addSeries(null, dimple.plot.scatter);```
