// remove element from demo page to make room for circle (video 17)
//really removing html within element, not removing element entirely
d3.select('.main').html('');

// add & resize SVG element (video 21)
var svg = d3.select('.main').append('svg');

svg.attr('width', 600).attr('height', 300);

//create x and y scales for circle (video 22)
var y = d3.scale.linear().domain([15, 90]).range([0, 250]);
var x = d3.scale.log().domain([250, 100000]).range([0, 600]);
