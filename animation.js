var containers = document.getElementsByClassName('chart');
//var x = document.getElementsByTagName('svg');
var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
var r = containers[0].dataset.size / 5;

svg.setAttribute('width', '400px');
svg.setAttribute('height', '400px');
svg.setAttribute('style', 'border:1px solid black');

circle.setAttribute('cx', containers[0].dataset.size / 2);
circle.setAttribute('cy', containers[0].dataset.size / 2);
circle.setAttribute('r', r);
circle.setAttribute('fill', 'red');

var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
var linearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
linearGradient.setAttribute('id', 'gradient');
var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop1.setAttribute('stop-color', '#6E4AE2');
stop1.setAttribute('offset', '0%');
linearGradient.appendChild(stop1);
var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop2.setAttribute('stop-color', '#78F8EC');
stop2.setAttribute('offset', '100%');
linearGradient.appendChild(stop2);
var linearGradientBackground = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
linearGradientBackground.setAttribute('id', 'gradient-background');
var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop1.setAttribute('stop-color', 'rgba(0, 0, 0, 0.2)');
stop1.setAttribute('offset', '0%');
linearGradientBackground.appendChild(stop1);
var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop2.setAttribute('stop-color', 'rgba(0, 0, 0, 0.05)');
stop2.setAttribute('offset', '100%');
linearGradientBackground.appendChild(stop2);

defs.appendChild(linearGradient);
defs.appendChild(linearGradientBackground);

//console.log('Christina', containers.length);
containers[0].appendChild(svg);

svg.appendChild(circle);

svg.appendChild(defs);

var x = containers[0].dataset.arrow;
console.log('Christina', x);

var arrowSize = containers[0].dataset.size / 10;

var arrowYOffset, m;
if(x === 'up') {
    arrowYOffset = arrowSize / 2;
    m = -1;
}
else if(x === 'down') {
    arrowYOffset = 0;
    m = 1;
}
var arrowPosX = ((containers[0].dataset.size / 2) - arrowSize / 2);
var arrowPosY = (containers[0].dataset.size - containers[0].dataset.size / 3) + arrowYOffset;
var arrowDOffset =  m * (arrowSize / 1.5);
var arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
arrow.setAttribute('d', 'M 0 0 ' + arrowSize + ' 0 ' + arrowSize / 2 + ' ' + arrowDOffset + ' 0 0 Z');
arrow.setAttribute('fill', '#97F8F0');
arrow.setAttribute('opacity', '0.6');
arrow.setAttribute('transform', 'translate(' + arrowPosX + ',' + arrowPosY + ')');
svg.appendChild(arrow);
