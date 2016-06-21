var n = 2000,
	points = [ { x: 50, y: 10 }, { x: 25, y: 90 }, { x: 75, y: 90 } ],
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
			x: Math.random() * 100,
			y: Math.random() * 100
		};
	}
	step();
	field.addEventListener('click', step);
});

function step() {
	dots.forEach(function(dot) {
		dot.element.style.left = dot.x + '%';
		dot.element.style.top = dot.y + '%';
		point = pick(points);
		dot.x = (dot.x + point.x) * 0.5;
		dot.y = (dot.y + point.y) * 0.5;
	});
}

function pick(arr) {
	return arr[~~(Math.random() * arr.length)];
}
