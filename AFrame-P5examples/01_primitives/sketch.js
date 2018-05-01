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
	
	// box primitive
	var b = new Box({
						x:-10, y:1, z:0,
						width:1, height: 1.2, depth: 2,
						red:random(255), green:random(255), blue:random(255)
					});
	world.add(b);

	// sphere primitive
	var s = new Sphere({
						x:-8, y:5, z:0,
						radius: 1.5,
						red:random(255), green:random(255), blue:random(255)
					});
	world.add(s);

	// plane primitive
	var p = new Plane({
						x: -6, y:2, z:0,
						width: 2, height:2,
						red:random(255), green:random(255), blue:random(255),
						side:'double'
					});
	p.tag.setAttribute('class', 'solid');
	world.add(p);

	// dodecahedron primitive
	var d = new Dodecahedron({
						x: -4, y:1, z:0,
						radius: 0.5,
						red:random(255), green:random(255), blue:random(255),
					});
	world.add(d);

	// Octahedron primitive
	var o = new Octahedron({
						x: -2, y:2, z:0,
						radius: 0.7,
						red:random(255), green:random(255), blue:random(255),
					});
	world.add(o);

	// Tetrahedron primitive
	var t = new Tetrahedron({
						x: 0, y:1, z:0,
						radius: 0.6,
						red:random(255), green:random(255), blue:random(255),
					});
	world.add(t);

	// circle primitive
	var c = new Circle({
						x: 2, y:2, z:0,
						radius: 1,
						red:random(255), green:random(255), blue:random(255),
						side:'double'
					});
	world.add(c);

	// cone primitive
	var co = new Cone({
						x: 4 , y:1, z:0,
						height:1.5,
						radiusBottom: 1, radiusTop: 0.25,
						red:random(255), green:random(255), blue:random(255),
					});
	world.add(co);

	// cylinder primitive
	var cl = new Cylinder({
						x: 6 , y:2, z:0,
						height:1.5,
						radius: 0.25,
						red:random(255), green:random(255), blue:random(255),
					});
	world.add(cl);

	// ring primitive
	var r = new Ring({
						x: 8 , y:1, z:0,
						radiusInner:0.5,
						radiusOuter: 1,
						side: 'double',
						red:random(255), green:random(255), blue:random(255),
					});
	world.add(r);

	// torus primitive
	var to = new Torus({
						x: 10 , y:2, z:0,
						radius:0.5,
						radiusTubular: 0.05,
						red:random(255), green:random(255), blue:random(255),
					});
	world.add(to);

	// torusKnot primitive
	var tok = new TorusKnot({
						x: 12 , y:1, z:0,
						radius:0.5,
						radiusTubular: 0.05,
						red:random(255), green:random(255), blue:random(255),
					});
	world.add(tok);



	// create a plane to serve as our "ground"
	var g = new Plane({x:0, y:0, z:0, width:100, height:100, red:0, green:102, blue:153, rotationX:-90, metalness:0.25});

	// add the plane to our world
	world.add(g);
}

function draw() {

}
