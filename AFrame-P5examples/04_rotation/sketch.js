// variable to hold a reference to our A-Frame world
var world;

// some boxes that need to be global (so we can access them in 'draw')
var b4, b5, b6;

function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// now that we have a world we can add elements to it using a series of wrapper classes
	// these classes are discussed in greater detail on the A-Frame P5 documentation site
	// http://cs.nyu.edu/~kapp/courses/cs0380fall2017/aframep5.php
	
	// you can rotate an item about each axis (x, y and z)
	var b1 = new Box({
						x:-5, y:1, z:0,
						rotationX: 45,
						red: random(255), green: random(255), blue: random(255)
	});
	world.add(b1);

	var b2 = new Box({
						x:-3, y:1, z:0,
						rotationY: 45,
						red: random(255), green: random(255), blue: random(255)
	});
	world.add(b2);

	var b3 = new Box({
						x:-1, y:1, z:0,
						rotationZ: 45,
						red: random(255), green: random(255), blue: random(255)
	});
	world.add(b3);






	// you can also progressively update the rotation of an item using the "spin" method
	// (see the 'draw' function below)
	b4 = new Box({
						x:1, y:1, z:0,
						rotationX: 45,
						red: random(255), green: random(255), blue: random(255)
	});
	world.add(b4);

	b5 = new Box({
						x:3, y:1, z:0,
						rotationY: 45,
						red: random(255), green: random(255), blue: random(255)
	});
	world.add(b5);

	b6 = new Box({
						x:5, y:1, z:0,
						rotationZ: 45,
						red: random(255), green: random(255), blue: random(255)
	});
	world.add(b6);


	// create a plane to serve as our "ground"
	var g = new Plane({
						x:0, y:0, z:0,
						width:100, height:100,
						asset: 'stone',
						repeatX: 100,
						repeatY: 100,
						rotationX:-90, metalness:0.25
					   });

	// add the plane to our world
	world.add(g);
}

function draw() {

	// spin each box in one of the axes
	b4.spinX(0.2);
	b5.spinY(0.2);
	b6.spinZ(0.2);

}

// you can also force an object to a specfic rotation
function mousePressed() {
	b4.setRotation(0,0,0);
	b5.setRotation(0,0,0);
	b6.setRotation(0,0,0);
}
