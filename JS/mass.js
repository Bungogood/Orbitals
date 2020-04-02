class mass {
    constructor (s, v, m, colour = "#000000") {
        this.s = s;
        this.v = v;
        this.a = new vector(0, 0);
        this.m = m;
        this.r = Math.log(m);
        this.colour = colour;
    }

    update() {
        this.v.add(this.a);
        this.s.add(this.v);
        this.a.set(0, 0);
    }

    draw(offset = create(0, 0)) {
        circle(add(this.s, offset), this.r, this.colour);
    }
    
    force(obj) {
        let d = sub(obj.s, this.s);
        let r = d.mag()**3;
        return mul(d, G*obj.m/r);
    }

    acc(obj) {
        this.a.add(this.force(obj));
    }

    momentum() {
        return mul(this.v, this.m);
    }
}