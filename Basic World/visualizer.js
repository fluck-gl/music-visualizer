let song;
let button;
let jump;
let amp;
let color;
let img;



let volHist = [];


function setup() {
  createCanvas(700, 700);
  background(255,0,255);
  angleMode(DEGREES);

  song = loadSound("sounds/afro-asian.m4a", loaded);
  amp = new p5.Amplitude();
  img = loadImage("images/lillith.png");

}



function draw() {
  vol = amp.getLevel() * tan(random(255));
  // rotate(PI);
  // image(img, width / 3, height/3, img.width/10, img.height/10);

  volHist.push(vol);
  // visual(volHist, width, height);


  if(song.isPlaying()) {

   // noFill();

    translate(width / 2, height /2);
    beginShape();
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
    } else {
      stroke(255);
    }
    endShape();


}



}
//
// function visual(vol, w, l) {
//   if(song.isPlaying()) {
//
//    // noFill();
//
//     translate(w / 2, l /2);
//     beginShape();
//     for (let i = 0; i < 360; i++) {
//         stroke(255, random(255), 255);
//         fill(255, .8)
//
//       r = map(vol[i], 0, 1, 10, height);
//       let x = r * cos(i);
//       let y = r * sin(i);
//       vertex(x, y);
//     }
//
//
//     if (vol.length > 360) {
//       vol.splice(0, 1);
//     }
//
//
//     endShape();
//
//
// }
// }

function loaded() {
  button = createButton("play");
  button.mousePressed(toggleSong);
  jump = createButton("jump");
  jump.mousePressed(jumpSong);

}


function toggleSong() {
  if(!song.isPlaying()) {
    song.play();
    button.html("pause");
  } else {
    song.pause();
    button.html("play")
  }
}

function jumpSong() {
  let len = song.duration();
  background(random(255),random(255),random(255));
  let ran = random(len);
  song.jump(ran);
  console.log(ran);
}
