const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const G = 6.67*10**(-11);
//const G = 1;
var intervalID;

function main() {
    s.update();
    s.draw();
}

let s = new system();
/*
s.add(new mass(create(0,0), create(0,0), 500), focus=true);
s.addorbit(200, 10);
s.addorbit(400, 10);
//s.add(new mass(create(300,0), create(0,(G*500/300)**(1/2)), 1000));
//s.add(new mass(create(300,0), create(0,(G*500/300)**(1/2)), 1000));

*/
s.add(new mass(create(0,0), create(0,0), 5*10**13), focus=true);
s.add(new mass(create(200,0), create(0,(G*5*10**13/200)**(1/2)+0.5), 10**9));

/*s.add(new mass(create(-250,0), create(0,3), 10));
s.add(new mass(create(300,0), create(0,2), 30));
s.add(new mass(create(250,0), create(0,-3), 10));
*/
start();