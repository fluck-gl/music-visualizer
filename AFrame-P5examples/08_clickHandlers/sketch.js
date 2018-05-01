// variable to hold a reference to our A-Frame world
var world;

function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// now that we have a world we can add elements to it using a series of wrapper classes
	// these classes are discussed in greater detail on the A-Frame P5 documentation site
	// http://cs.nyu.edu/~kapp/courses/cs0380fall2017/aframep5.php

	// what textures can we choose from?
	var textures = ['iron', 'gold', 'stone'];

	// create lots of boxes
	for (var i = 0; i < 150; i++) {
		// pick a location
		var x = random(-50, 50);
		var z = random(-50, 50);

		// pick a random texture
		var t = textures[ int(random(textures.length)) ];

		// create a box here
		// note the inclusion of a 'clickFunction' property - this function will be invoked
		// every time this box is clicked on.  note that the function requires you to
		// accept a single argument -- this is a reference to the box that was clicked (essentially the entity itself)
		var b = new Box({
							x:x,
							y:0.5,
							z:z,
							asset:t,
							clickFunction: function(theBox) {
								// update this cube's color to something random!
								theBox.setColor( random(255), random(255), random(255) );
							}
		});

		// add the box to the world
		world.add(b);
	}

	// create a plane to serve as our "ground"
	var g = new Plane({
						x:0, y:0, z:0,
						width:100, height:100,
						asset: 'stone',
						repeatX: 100,
						repeatY: 100,
						rotationX:-90
					   });

	// add the plane to our world
	world.add(g);
}

// keep track of how much to change scale by
var scaleChange = 0.01;

function draw() {


}

function mousePressed() {
}
