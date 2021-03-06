// remove element from demo page to make room for circle (video 17)
//really removing html within element, not removing element entirely
d3.select('.main').html('');

// add & resize SVG element (video 21)
var svg = d3.select('.main').append('svg');

svg.attr('width', 600).attr('height', 300);

/*Note: y axis and x axis both start at 0, x axis increases L to R like normal
y axis increases from top to bottom, opposite of normal Cartesian coordinates*/

//create x and y scales for circle (video 22)
// y is life expectancy, x is GDP per capita
var y = d3.scale.linear().domain([15, 90]).range([250, 0]);
var x = d3.scale.log().domain([250, 100000]).range([0, 600]);

/*Note on circles in graphics (video 23)
Be careful to use proportional areas rather than proportional radii to avoid
exaggerating size differences by squaring the comparison quantity*/

//create scale for radius of circle (video 24) representing population
var r = d3.scale.sqrt().domain([52070, 1380000000]).range([10, 40]);

//
svg.append('circle').attr('fill', 'red').attr('r', r(1380000000)).attr('cx', x(13330)).attr('cy', y(77));
