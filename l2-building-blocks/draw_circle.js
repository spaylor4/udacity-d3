// remove element from demo page to make room for circle (video 17)
//really removing html within element, not removing element entirely
d3.select('.main').html('');

// add & resize SVG element (video 21)
var svg = d3.select('.main').append('svg');

svg.attr('width', 600).attr('height', 300);
