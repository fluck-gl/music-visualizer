function viz(song) {

    this.song = song;
   this.volHist = [];

    var plane = new Plane({
                            x:0, y:-5, z:-5,
          					width:10, height:10,
          					red: 255,
                            green: 255,
                            blue: 255,
                            side: 'double',
                            clickFunction: function(thePlane) {
                               thePlane.setColor(100, 140, 50);
                            }
                         });
                         //plane.rotateX(90);
    world.add(plane)

   // this.background(255,0,255);
   // this.angleMode(DEGREES);

   this.vizualizer = function() {
      vol = amp.getLevel() * tan(random(255));
      volHist.push(vol);

      if(this.song.isPlaying()) {

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

      this.loaded = function() {
        button = createButton("play");
        button.mousePressed(toggleSong);
        jump = createButton("jump");
        jump.mousePressed(jumpSong);

      }

      this.toggleSong = function() {
        if(!this.song.isPlaying()) {
          this.song.play();
          button.html("pause");
        } else {
          this.song.pause();
          button.html("play")
        }
      }

      this.jumpSong = function() {
        let len = this.song.duration();
        background(random(255),random(255),random(255));
        let ran = random(len);
        this.song.jump(ran);
      }


      this.loaded = function() {
        button = createButton("play");
        button.mousePressed(toggleSong);
        jump = createButton("jump");
        jump.mousePressed(jumpSong);

      }

}
}
