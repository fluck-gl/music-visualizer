
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

//far
function wall1() {
   var box = new Box({
                       x:-5,
                       y:-25,
                       z:-10,
                       width: 25,
                       height:30,
                       depth: 5,
                       asset: 'stonebrick',
                       repeatX: 20,
                       repeatY: 20,

                       });
   world.add( box );
   var plane1 = new Plane({
                            x:0, y:-25, z:-7.4,
          						 width:25, height:30,
          						 red: 255,
                            green: 255,
                            blue: 255,

                            clickFunction: function(thePlane) {
                               thePlane.setColor(192, 232, 249);
                            }
                         });

   // add the plane to the world
   world.add(plane1);
}

//right
function wall2() {
   var box = new Box({
                       x: 10,
                       y: -25,
                       z: 5,
                       width: 25,
                       height:30,
                       depth: 5,
                       asset: 'stonebrick',
                       repeatX: 20,
                       repeatY: 20,
                       });
   box.spinY(90);
   world.add( box );

}

//left
function wall3() {
   var box = new Box({
                       x: -15,
                       y: -25,
                       z: 5,
                       width: 25,
                       height:30,
                       depth: 5,
                       asset: 'stonebrick',
                       repeatX: 20,
                       repeatY: 20,
                       });
   box.spinY(90);
   world.add( box );
}

//close
function wall4() {
   var box = new Box({
                       x:0,
                       y:-25,
                       z:15,
                       width: 25,
                       height:30,
                       depth: 5,
                       asset: 'stonebrick',
                       repeatX: 20,
                       repeatY: 20,

                       });
   world.add( box );
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
