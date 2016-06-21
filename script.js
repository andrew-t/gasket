var n = 2000,
	distance = 0.5,
	points = [ { x: 50, y: 20 }, { x: 25, y: 80 }, { x: 75, y: 80 } ],
	//points = [ { x: 10, y: 10 }, { x: 10, y: 90 }, { x: 90, y: 10 }, { x: 90, y: 90 } ],
	dots = [],
	field;

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
	points.forEach(function(point) {
		point.element = document.createElement('div');
		point.element.classList.add('point');
		field.appendChild(point.element);
		position(point);
	});
	step();
	field.addEventListener('click', step);
});

function step() {
	dots.forEach(function(dot) {
		dot.element.style.left = dot.x + '%';
		dot.element.style.top = dot.y + '%';
		point = pick(points);
		dot.x = dot.x * (1 - distance) + point.x * distance;
		dot.y = dot.y * (1 - distance) + point.y * distance;
	});
}

function position(dot) {
	dot.element.style.left = dot.x + '%';
	dot.element.style.top = dot.y + '%';
}

function pick(arr) {
	return arr[~~(Math.random() * arr.length)];
}

function random() {
	return Math.random() * Math.random() *
			((Math.random() >= 0.5) - 0.5) + 0.5;
}
