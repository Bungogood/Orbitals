class system {
    constructor(objs = []) {
        this.objs = objs;
        this.focus = null;
        this.origin = create(500, 500);
    }

    add(m, focus = false) {
        this.objs.push(m);
        if (focus) {
            this.focus = m;
        }
    }

    addorbit(r, m) {
        this.add(new mass(create(r,0), create(0,(G*this.focus.m/r)**(1/2)), m));
    }

    remove(m) {
        this.objs = this.objs.filter(e => e != m);
    }

    update() {
        this.interplanetary();
        this.planetary();
        if (this.focus != null) {
            this.recentre()
        }
    }

    draw() {
        clear();
        for (let i=0; i < this.objs.length; i++) {
            this.objs[i].draw(this.origin, this.trails);
        }
    }

    interplanetary() {
        for (let j=0; j < this.objs.length-1; j++) {
            for (let i=j+1; i < this.objs.length; i++) {
                if (this.collsion(this.objs[i], this.objs[j])) {
                    j--;
                    i--;
                    break;
                } else {
                    this.interact(this.objs[i], this.objs[j]);
                }
            }
        }
    }

    planetary() {
        for (let i=0; i < this.objs.length; i++) {
            if (this.outofbounds(this.objs[i])) {
                i--;
            } else {
                this.objs[i].update();
            }
        }
    }

    interact(a, b) {
        a.acc(b);
        b.acc(a);
    }

    collsion(a, b) {
        if (sub(a.s, b.s).mag() < a.r + b.r) {
            let m = a.m + b.m;
            let v = div(add(a.momentum(), b.momentum()), m);
            let s = div(add(a.s, b.s), 2);
            this.add(new mass(s, v, m), this.focus == a || this.focus == b);
            this.remove(a);
            this.remove(b);
            return true;
        } else {
            return false;
        }
    }

    outofbounds(m) {
        if (m.s.mag() > 500) {
            this.remove(m);
            return true;
        } else {
            return false;
        }
    }

    recentre() {
        for (let i=0; i < this.objs.length; i++) {
            this.objs[i].s.sub(this.focus.s);
            this.objs[i].v.sub(this.focus.v);
        }
    }

    start() {
        start(this.update)
    }

    stop() {
        stop()
    }
}