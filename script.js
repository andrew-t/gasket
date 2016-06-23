var n = 1000,
	distance = 0.5,
	points = [ { x: 50, y: 20 }, { x: 18, y: 80 }, { x: 82, y: 80 } ],
	//points = [ { x: 10, y: 10 }, { x: 10, y: 90 }, { x: 90, y: 10 }, { x: 90, y: 90 } ],
	dots = [],
	field,
	moveTimeout = 1000, // todo: this should really be in css
	moveLength = 2000;

document.addEventListener('DOMContentLoaded', function(e) {
	field = document.getElementById('field');
	for (var i = n - 1; i >= 0; i--) {
		el = document.createElement('div');
		el.classList.add('dot');
		field.appendChild(el);
		dots[i] = {
			element: el,
			x: random() * 100,
			y: random() * 100
		};
	}
	points.forEach(function(point, i) {
		point.element = document.createElement('div');
		point.element.classList.add('point');
		point.element.classList.add('p' + i);
		field.appendChild(point.element);
		position(point);
	});
	dots.forEach(position);
	window.addEventListener('click', step);
});

function step() {
	dots.forEach(function(dot) {
		var i = ~~(Math.random() * points.length);
		dot.element.classList.add('p' + i);
		setTimeout(function() {
			dot.x = dot.x * (1 - distance) + points[i].x * distance;
			dot.y = dot.y * (1 - distance) + points[i].y * distance;
			position(dot);
		}, moveTimeout);
		setTimeout(function() {
			dot.element.classList.remove('p' + i);
		}, moveTimeout + moveLength);
	});
}

function position(dot) {
	dot.element.style.left = dot.x + '%';
	dot.element.style.top = dot.y + '%';
}

function random() {
	return Math.random() * Math.random() *
			((Math.random() >= 0.5) - 0.5) + 0.5;
}
