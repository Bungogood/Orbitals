class vector {
	constructor(x, y) {
		this.set(x, y);
	}
	
	set(x, y) {
		this.x = x;
		this.y = y;
	}

	clone() {
		return new vector(this.x, this.y);
	}
	
	add(v) {
		this.x += v.x;
		this.y += v.y;
	}

	sub(v) {
		this.x -= v.x;
		this.y -= v.y;
	}

	mag() {
		return (this.x**2+this.y**2)**(1/2)
	}
}

function add(a, b) {
	return new vector(a.x + b.x, a.y + b.y);
}

function sub(a, b) {
	return new vector(a.x - b.x, a.y - b.y);
}

function mul(v, m) {
	return new vector(v.x * m, v.y * m);
}

function div(v, m) {
	return new vector(v.x / m, v.y / m);
}

function create(x, y) {
	return new vector(x, y);
}