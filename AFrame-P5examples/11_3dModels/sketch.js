// variable to hold a reference to our A-Frame world
var world;

// our models
var charmander, robot;


function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// now that we have a world we can add elements to it using a series of wrapper classes
	// these classes are discussed in greater detail on the A-Frame P5 documentation site
	// http://cs.nyu.edu/~kapp/courses/cs0380fall2017/aframep5.php

	// create a base plane
	var basePlane = new Plane({
		x: 0, y:0, z:0, width:100, height:100, asset:'stone', rotationX:-90, repeatX:100, repeatY:100
	});
	world.add(basePlane);


	// add a Collada (DAE) model
	// DAE files are "all in one" 3D file formats - they contain both geometry and material info
	charmander = new DAE({
		asset: 'charmander',
		scaleX:5,
		scaleY:5,
		scaleZ:5
	});
	world.add(charmander);


	// add a Wavefront (OBJ) model
	// you need to make sure to reference both the OBJ and MTL file here (geometry & material are stored separately)
	robot = new OBJ({
		asset: 'robot_obj',
		mtl: 'robot_mtl',
		x: 5,
		y: 1.3,
		z: 0,
		rotationX:0,
		rotationY:180,
		scaleX:1,
		scaleY:1,
		scaleZ:1,
	});
	world.add(robot);
}

function draw() {
	robot.spinY(1);
}
