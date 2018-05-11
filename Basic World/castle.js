
function castle() {

  this.displayCastle = function() {
    //front row
    addCone (10,-5,-10);
    addCylinder(10,-25,-10);

    //back row
    addCone (-15,-5,-10);
    addCylinder(-15,-25,-10);

    //right row
    addCone (10,-5,15);
    addCylinder(10,-25,15);

    //left row
    addCone (-15,-5,15);
    addCylinder(-15,-25,15);

    wall1();
    wall2();
    wall3();
    wall4();

  }
}

var mySound;
function preload(){
mySound = loadSound('sounds/Maroon5_this_love.mp3');
}
function mouseClicked() {
mySound.play();
}
function keyPressed() {
mySound.play();
}



//far
function wall1() {
   newWallBox(-5,-25, -10);
   
clickFunction: function(wall1) {
mySound = loadSound('sounds/Maroon5_this_love.mp3');
}
function setup() {
mySound.setVolume(0.1);
mySound.play();
}

}

//right
function wall2() {
   newSideWallBox(10,-25, 5);

}

//left
function wall3() {
   newSideWallBox(-15,-25, 5)
}

//close
function wall4() {
   newWallBox(0,-25, 15)
}

//create a 5x5x5 box object
function newBox (x,y,z) {

   // create a box entity.  entities take arguments in the form of an Object
  var box = new Box({
                      x:x,
                      y:y,
                      z:z,
                      width: 5,
                      height:5,
                      depth: 5,
                      red: random(255),
                     green: random(255),
                     blue: random(255)

                      });

  // add the entity to the world
  world.add( box );
}

function newWallBox (x,y,z) {

   // create a box entity.  entities take arguments in the form of an Object
  var box = new Box({
                      x:x,
                      y:y,
                      z:z,
                      width: 25,
                      height:30,
                      depth: 5,
                      asset: 'stonebrick',
                      repeatX: 20,
                      repeatY: 20,

                      });

  // add the entity to the world
  world.add( box );
}

function newSideWallBox (x,y,z) {

   // create a box entity.  entities take arguments in the form of an Object
  var box = new Box({
                      x:x,
                      y:y,
                      z:z,
                      width: 25,
                      height:30,
                      depth: 5,
                      asset: 'stonebrick',
                      repeatX: 20,
                      repeatY: 20,
                      });
  box.spinY(90);
  // add the entity to the world
  world.add( box );
}


var door1 = new Plane({
                      x: -5,
                      y: -20,
                      z: 15,
                      asset: 'doorLeft',
                      side: 'double',
                      height: 15,
                      width: 5,


                      clickFunction: function(thePlane) {
                                if (rotated1 == 0) {
                                  thePlane.rotateY(90);
                                  doorOpen.play();
                                  rotated1 = 1;
                                } else if (rotated1 == 1) {
                                  thePlane.rotateY(0);
                                  doorClose.play();
                                  rotated1 = 0;
                                }
                             }

                      });

//build 3 box high columns
function build4Column(x,y,z) {
  x = x;
  y = y;
  z = z;


  for (i = 0; i < 4; i++) {
    newBox(x,y,z);
    y += 5;
  }
}

//create a cone object
function addCone (x,y,z) {
  	// cone primitive
	var co = new Cone({
						x:x , y:y, z:z,
						height:5,
						radiusBottom: 5, radiusTop: 0.25,
						red: 96,
                  green: 101,
                  blue: 111
					});
	world.add(co);
}

//create a cylinder object
function addCylinder(x,y,z) {
  	// cylinder primitive
	var cl = new Cylinder({
						x:x , y:y, z:z,
						height:35,
						radius: 4.5,
						red: 25,
                  green: 29,
                  blue: 50
					});
	world.add(cl);
}

function addSphere(x,y,z) {

  // circle primitive
	var c = new Sphere({
						x: x, y:y, z:z,
						radius: 2,
						red: random(255),
            green: random(255),
            blue: random(255)
					});
	world.add(c);
}
