let song;
let button;
let jump;
let amp;
let color;
let img;

// global array contains 360 amplitude readings
let volHist = [];

function setup() {
  createCanvas(700, 700);
  background(255,0,255);
  angleMode(DEGREES);

  // load song and any images
  song = loadSound("sounds/afro-asian.m4a", loaded);
  amp = new p5.Amplitude();
  img = loadImage("images/lillith.png");

}





function draw() {

  // get amplitude lvl from song
  vol = amp.getLevel() * tan(random(255));
  volHist.push(vol);


  if(song.isPlaying()) {

    translate(width / 2, height /2);

    // this is the 'shape' or the actual visualiztion
    beginShape();

    // 360 b/c our math mode is set to DEGREES
    for (let i = 0; i < 360; i++) {
        stroke(255, random(255), 255);
        fill(255, .8)
      r = map(volHist[i], 0, 1, 10, height);
      let x = r * cos(i);
      let y = r * sin(i);
      vertex(x, y);
    }

    if (volHist.length > 360) {
      volHist.splice(0, 1);
    }
    endShape();

}

}


// buttons
function loaded() {
  button = createButton("play");
  button.mousePressed(toggleSong);
  jump = createButton("jump");
  jump.mousePressed(jumpSong);

}

// toggle between on and off
function toggleSong() {
  if(!song.isPlaying()) {
    song.play();
    button.html("pause");
  } else {
    song.pause();
    button.html("play")
  }
}

// jump through the song
function jumpSong() {
  let len = song.duration();
  background(random(255),random(255),random(255));
  let ran = random(len);
  song.jump(ran);
}
