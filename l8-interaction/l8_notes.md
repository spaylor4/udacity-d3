## Lesson 8: Animation & Interaction

#### GeoJSON

In GeoJSON, longitude coordinates come first and latitude second.

#### D3 Functions

D3 [nest function](https://github.com/d3/d3-collection/blob/v1.0.7/README.md#nest) helps to group and aggregate data.

The key function specifies the grouping of the nest, and the rollup function takes each group and performs a specified aggregation.

[Sort function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) orders data. In the class's world cup example, we sorted our grouped data by attendance so that world cups with the highest attendance were plotted first.
```
svg.append('g')
  .attr("class", "bubble")
  .selectAll("circle")
  .data(nested.sort(function(a, b) {
    return b.values['attendance'] - a.values['attendance'];
  }))
  .enter()
  .append("circle")
```

* If the anonymous function inside the sort function returns <0, the data is sorted so a is before b.

* If the return is >0, b is sorted before a.

* If they are equal, there is no change to the existing order.

#### Adding Animation/Interaction

To show animation over time, we'll need to use both the `.exit()` and `.enter()` functions, whereas previously for static graphics we only used `.enter()`. This will remove elements from the previous frame before adding the elements for the next frame.

In the example, we used the javascript `this` keyword to select the button that is clicked on. An explanation of `this` is available [here](http://tomhicks.github.io/code/2014/08/11/some-of-this.html).

#### Helpful Links

* [Mapschool](https://mapschool.io): overview of vector/raster, projections, and other basics of mapping

* [Ogre](http://ogre.adc4gis.com): tool for converting to geoJSON

* Shapefile to GeoJSON [tutorial](https://ben.balter.com/2013/06/26/how-to-convert-shapefiles-to-geojson-for-use-on-github/)

* D3 nest function [examples](http://bl.ocks.org/phoebebright/raw/3176159/)

* D3 animation [tutorial](http://synthesis.sbecker.net/articles/2012/07/10/learning-d3-part-3-animation-interaction)

* Mike Bostock's d3 [maps tutorial](https://medium.com/@mbostock/command-line-cartography-part-1-897aa8f8ca2c) and webkid's [small multiple tutorial](https://webkid.io/blog/multiple-maps-d3/)

* Python [basemap package](https://pypi.python.org/pypi/basemap/1.0.7) and R [maps package](http://cran.r-project.org/web/packages/maps/maps.pdf)

* Mike Bostock's [For Example](https://bost.ocks.org/mike/example/)
