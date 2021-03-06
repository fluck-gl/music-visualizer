var world, theCastle;

var theRain = [];

var sky, stonebrick;

var x,y,z;

var amp;
var song1;

var volHist;

var container;

var tree1, tree2, tree3, tree4, corner, dog, courage, horse;

var balloons1, balloons2, balloons3, balloons4,ballonsd;

function preload() {
    song1 = loadSound("sounds/Maroon5_this_love.mp3");
    song2 = loadSound("sounds/Back_in_black.mp3");
    song3 = loadSound("sounds/yyz.mp3");
    song4 = loadSound("sounds/We_Will_Rock_You.mp3");
}

function setup() {
  noCanvas();

  amp = new p5.Amplitude();


  world = new World('VRScene');
  theCastle = new castle();

  // doorOpen = loadSound("sounds/open_door.mp3");
  // doorClose = loadSound("sounds/close_door.mp3");

  theCastle.displayCastle();

  // create a plane entity.
  var floor = new Plane({
                           x:0, y:-30, z:0,
         						width:80, height:80,
         						red: 19,
                           green: 64,
                           blue: 116,
         						rotationX:-90
                        });

  // add the plane to the world
  world.add(floor);
  
  container = new Container3D({x:-2.5, y:-10, z:2.5});

	world.add(container);
  
newAmp = 1;


  balloons1 = new OBJ({
      asset: 'balloon_obj',
      mtl: 'balloon_mtl',
      x: 10,
      y: -10,
      z: -10,
      red: 250,
      scaleX:3,
      scaleY:3,
      scaleZ:3,
  });
  world.add(balloons1);

  balloons2 = new OBJ({
      asset: 'balloon_obj',
      mtl: 'balloon_mtl',
      x: -15,
      y: -10,
      z: -10,
      red: 250,
      scaleX:3,
      scaleY:3,
      scaleZ:3,
  });
  world.add(balloons2);

  balloons3 = new OBJ({
      asset: 'balloon_obj',
      mtl: 'balloon_mtl',
      x: 10,
      y: -10,
      z: 15,
      red: 250,
      scaleX:3,
      scaleY:3,
      scaleZ:3,
  });
  world.add(balloons3);

  balloons4 = new OBJ({
      asset: 'balloon_obj',
      mtl: 'balloon_mtl',
      x: -15,
      y: -10,
      z: 15,
      red: 250,
      scaleX:3,
      scaleY:3,
      scaleZ:3,
  });
  world.add(balloons4);

  tree1 = new OBJ({
      asset: 'tree_obj',
      mtl: 'tree_mtl',
      x: 35,
      y: -30,
      z: -35,
      scaleX:1,
      scaleY:1,
      scaleZ:1,
  });
  world.add(tree1);

  tree2 = new OBJ({
      asset: 'tree_obj',
      mtl: 'tree_mtl',
      x: 35,
      y: -30,
      z: 35,
      scaleX:1,
      scaleY:1,
      scaleZ:1,
  });
  world.add(tree2);

  tree3 = new OBJ({
      asset: 'tree_obj',
      mtl: 'tree_mtl',
      x: -35,
      y: -30,
      z: 35,
      scaleX:1,
      scaleY:1,
      scaleZ:1,
  });
  world.add(tree3);

  tree4 = new OBJ({
      asset: 'tree_obj',
      mtl: 'tree_mtl',
      x: -35,
      y: -30,
      z: -35,
      scaleX:1,
      scaleY:1,
      scaleZ:1,
  });
  world.add(tree4);

//   dog = new OBJ({
//       asset: 'dog_obj',
//       mtl: 'dog_mtl',
//       x: 25,
//       y: -30,
//       z: 5,
//       red: 139,
//       green: 80,
//       blue: 14,
//       scaleX:5,
//       scaleY:5,
//       scaleZ:5,
//   });
//   world.add(dog);

}


function draw() {
  if (mouseIsPressed || touchIsDown) {
		world.moveUserForward(0.1);
	}
	
	if (amp.getLevel() > 0 && amp.getLevel() < .05) {
	        container.spinY(amp.getLevel() * 92);
            newAmp = amp.getLevel() * 113 ;
    } else if (amp.getLevel() > .05) {
        container.spinY(amp.getLevel() * 139);
        container.spinZ(amp.getLevel() * .2);
        newAmp = amp.getLevel() * 35;
    }

  // always create a new particle
	var temp = new Rain(-2.5, 0, 2.5, newAmp);

	if (frameCount % 10 == 0) {
  	// add to array
  	   theRain.push( temp );
	}
	
  	// draw all rain
  	for (var i = 0; i < theRain.length; i++) {
  		var result = theRain[i].move();
  		if (result == "gone") {
  			theRain.splice(i, 1);
  			i-=1;
  		}
  	}
  	

}

function Rain(x,y,z, nAmp) {

   
    
	// construct a new Sphere that lives at this position
	this.mySphere = new Sphere({
							x:x, y:y, z:z,
							red: random(255), green: random(255), blue: random(255),
							radius: nAmp * .2
	});
	// add the Sphere to the world
	world.add(this.mySphere);

	// keep track of an offset in Perlin noise space
	this.xOffset = random(1000);
	this.zOffset = random(2000, 3000);

	// function to move our sphere
	this.move = function() {
        
		var yMovement = -.3;

    //  amp.getLevel() *

		// the rain should randomly move in the x & z directions
		var xMovement = map( noise(this.xOffset), 0, 1, -0.05, 0.05);
		var zMovement = map( noise(this.zOffset), 0, 1, -0.05, 0.05);

		// update our poistions in perlin noise space
		this.xOffset += 0.05;
		this.zOffset += 0.25;

		// set the position of our Sphere (using the 'nudge' method)
		this.mySphere.nudge(xMovement, yMovement, zMovement);


		// take out the sphere it if hits the plane
		if (this.mySphere.y <= -27) {
			// remove the box from the world
			world.remove(this.mySphere);
			return "gone";
		}
		else {
		  return "ok";
		}
	}
}


/*
  courage = new DAE({
      asset: 'courg',
      scaleX:5,
      scaleY:5,
      scaleZ:5
  });
  world.add(courage);


  horse = new DAE({
      asset: 'horse_dae',
      scaleX:5,
      scaleY:5,
      scaleZ:5
  });
  world.add(horse);
  */

/*
  ballonsd = new DAE({
      asset: 'balloon_dae',
      scaleX:5.0,
      scaleY:5.0,
      scaleZ:5.0,
  });
  world.add(ballonsd);
*/
