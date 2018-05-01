// variable to hold a reference to our A-Frame world
var world;

// which images should we use as our background?
var allImages = ['#sky1', '#sky2', '#sky3'];

// which image are we currently using?
var currentImage = 0;

function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// now that we have a world we can add elements to it using a series of wrapper classes
	// these classes are discussed in greater detail on the A-Frame P5 documentation site
	// http://cs.nyu.edu/~kapp/courses/cs0380fall2017/aframep5.php
}

function draw() {

	// move to the next sky image periodically
	if (frameCount % 600 == 0) {
		// move to the next image in our array
		currentImage += 1;
		if (currentImage == allImages.length) {
			currentImage = 0;
		}

		// set our sky to the newly selected image

		// grab a reference to our sky sphere
		var sky = select('#theSky');
		sky.attribute('src', allImages[currentImage]);
	}
}
