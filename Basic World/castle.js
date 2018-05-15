
function castle() {

  this.displayCastle = function() {

    //build corner towers
    addCone (10,-5,-10);
    addCylinder(10,-25,-10);
    addCone (-15,-5,-10);
    addCylinder(-15,-25,-10);
    addCone (10,-5,15);
    addCylinder(10,-25,15);
    addCone (-15,-5,15);
    addCylinder(-15,-25,15);

    //build walls and planes for visualiztion
    //front
    wall1();
    //left
    wall2();
    //right
    wall3();
    //behind
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
   var plane = new Plane({
                            x:0, y:-25, z:-7.4,
          					width:25, height:30,
          					red: 255,
                            green: 255,
                            blue: 255,

                            clickFunction: function(thePlane) {
                                    if (song1.isPlaying()) {
                                      song1.pause();
    
                                      addFun1(false);
                                    } else {
                                        song2.pause();
                                        song3.pause();
                                        song4.pause();
                                    
                                        song1.play();
                                      
                                        addFun1(true);
                                        if (song2.isPaused()) {
                                            addFun2(false);
                                        }
                                        if (song3.isPaused()) {
                                            addFun3(false);
                                        }
                                        if (song4.isPaused()) {
                                            addFun4(false);
                                        }
                                    }   
                            }
                         });

   // add the plane to the world
   world.add(plane);
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
   var plane = new Plane({
                            x:7.4, y:-25, z:5,
          						 width:25, height:30,
          						 red: 255,
                            green: 255,
                            blue: 255,

                            clickFunction: function(thePlane) {
                                if (song2.isPlaying()) {
                                      song2.pause();
    
                                      addFun2(false);
                                    } else {
                                        song1.pause();
                                        song3.pause();
                                        song4.pause();
                                    
                                        song2.play();
                                        
                                        addFun2(true);
                                        if (song1.isPaused()) {
                                            addFun1(false);
                                        }
                                        if (song3.isPaused()) {
                                            addFun3(false);
                                        }
                                        if (song4.isPaused()) {
                                            addFun4(false);
                                        }
                                 }
                            }
                         });

   // add the plane to the world
   plane.spinY(270);
   world.add(plane);

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
   var plane = new Plane({
                            x:-12.4, y:-25, z:5,
          						 width:25, height:30,
          						 red: 255,
                            green: 255,
                            blue: 255,

                            clickFunction: function(thePlane) {
                                    if (song3.isPlaying()) {
                                      song3.pause();
    
                                      addFun3(false);
                                    } else {
                                        song1.pause();
                                        song2.pause();
                                        song4.pause();
                                    
                                        song3.play();
                                      
                                        addFun3(true);
                                         if (song1.isPaused()) {
                                            addFun1(false);
                                        }
                                        if (song2.isPaused()) {
                                            addFun2(false);
                                        }
                                        if (song4.isPaused()) {
                                            addFun4(false);
                                        }
                                    }   
                            }
                         });

   // add the plane to the world
   plane.spinY(90);
   world.add(plane);
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
   var plane = new Plane({
                            x:0, y:-25, z:12.4,
          						 width:25, height:30,
          						 red: 255,
                            green: 255,
                            blue: 255,

                             clickFunction: function(thePlane) {
                                    if (song4.isPlaying()) {
                                      song4.pause();
    
                                      addFun4(false);
                                    } else {
                                        song1.pause();
                                        song2.pause();
                                        song3.pause();
                                    
                                        song4.play();
                                      
                                        addFun4(true);
                                         if (song1.isPaused()) {
                                            addFun1(false);
                                        }
                                        if (song2.isPaused()) {
                                            addFun2(false);
                                        }
                                         if (song3.isPaused()) {
                                            addFun3(false);
                                        }
                                    }   
                            }
                         });

   // add the plane to the world
   plane.spinY(180);
   world.add(plane);
}


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
	var s = new Sphere({
						x: x, y:y, z:z,
						radius: 2,
						red: random(255),
            green: random(255),
            blue: random(255)
					});
	return s;
}

function addBox(x,y,z) {

  // box primitive
	var b = new Box({
						x: x, y:y, z:z,
						height: 3,
						width: 3,
						depth: 3,
						red: random(255),
                        green: random(255),
                        blue: random(255)
					});
	return b;
}

function addSmallCylinder(x,y,z) {
    c = new Cylinder({
        x:x, y:y, z:z, 
        red: random(255),
        green: random(255),
        blue: random(255),
        height:3,
		radius: 1.5,
        });
    return c;
}

function addTorusKnot(x,y,z) {
    t = new TorusKnot({
        x:x, y:y, z:z, 
        red: random(255),
        green: random(255),
        blue: random(255),
		radiusTubular: .4,
        });
    return t;
}



// x:0, y:-25, z:-7.4,
//x:7.4, y:-25, z:5,
// x:-12.4, y:-25, z:5,
// x:0, y:-25, z:12.4,

function addFun1 (bool) {
    if (bool === true) {
        sphere1 = addSphere (random(-5, 5), -15, -5);
        sphere2 = addSphere (random(-5, 5), -15,  7);
        sphere3 = addSphere (random(-5, 5), -15,  5);
        sphere4 = addSphere (random(-5, 5), -15,  1);
        sphere5 = addSphere (random(-5, 5), -15,  -3);
        sphere6 = addSphere (random(-5, 5), -15,  10);

        
        container.addChild(sphere1);
        container.addChild(sphere2);
        container.addChild(sphere3);
        container.addChild(sphere4);
        container.addChild(sphere5);
        container.addChild(sphere6);
    } else {
        console.log("removing sphere");
        container.removeChild(sphere1);
        container.removeChild(sphere2);
        container.removeChild(sphere3);
        container.removeChild(sphere4);
        container.removeChild(sphere5);
        container.removeChild(sphere6);
    }
}

function addFun2 (bool) {
    if (bool === true) {
        box1 = addBox (random(-5, 5), -15, -9);
        box2 = addBox (random(-5, 5), -15,  0);
        box3 = addBox (random(-5, 5), -15,  5);
        box4 = addBox (random(-5, 5), -15,  6);
        box5 = addBox (random(-5, 5), -15,  10);
        box6 = addBox (random(-5, 5), -15, 12);
        
        
        container.addChild(box1);
        container.addChild(box2);
        container.addChild(box3);
        container.addChild(box4);
        container.addChild(box5);
        container.addChild(box6);
    } else {
        console.log("removing sphere");
        container.removeChild(box1);
        container.removeChild(box2);
        container.removeChild(box3);
        container.removeChild(box4);
        container.removeChild(box5);
        container.removeChild(box6);
    }
}

function addFun3 (bool) {
    if (bool === true) {
        cylinder1 = addSmallCylinder(random(-5, 5), -15, -9);
        cylinder2 = addSmallCylinder(random(-5, 5), -15,  0);
        cylinder3 = addSmallCylinder(random(-5, 5), -15,  5);
        cylinder4 = addSmallCylinder(random(-5, 5), -15,  6);
        cylinder5 = addSmallCylinder(random(-5, 5), -15,  10);
        cylinder6 = addSmallCylinder(random(-5, 5), -15, 12);
        
        
        container.addChild(cylinder1);
        container.addChild(cylinder2);
        container.addChild(cylinder3);
        container.addChild(cylinder4);
        container.addChild(cylinder5);
        container.addChild(cylinder6);
    } else {
        console.log("removing sphere");
        container.removeChild(cylinder1);
        container.removeChild(cylinder2);
        container.removeChild(cylinder3);
        container.removeChild(cylinder4);
        container.removeChild(cylinder5);
        container.removeChild(cylinder6);
    }
}

function addFun4 (bool) {
    if (bool === true) {
        torus1 = addTorusKnot(random(-5, 5), -15, -9);
        torus2 = addTorusKnot(random(-5, 5), -15,  0);
        torus3 = addTorusKnot(random(-5, 5), -15,  5);
        torus4 = addTorusKnot(random(-5, 5), -15,  6);
        torus5 = addTorusKnot(random(-5, 5), -15,  10);
        torus6 = addTorusKnot(random(-5, 5), -15, 12);
        
        
        container.addChild(torus1);
        container.addChild(torus2);
        container.addChild(torus3);
        container.addChild(torus4);
        container.addChild(torus5);
        container.addChild(torus6);
    } else {
        console.log("removing sphere");
        container.removeChild(torus1);
        container.removeChild(torus2);
        container.removeChild(torus3);
        container.removeChild(torus4);
        container.removeChild(torus5);
        container.removeChild(torus6);
    }
}
