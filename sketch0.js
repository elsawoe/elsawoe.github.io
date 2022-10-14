var canvas;


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


var points = []
var mult = 0.005
canvasSize = 700

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');

  // background(182,33,140)
  background(0,0,0,0)
  angleMode(DEGREES)
  //noiseDetail(0.5)

    var density = 50
    var space = width / density

    for (var x = 0; x < width; x += space) {
      for (var y = 0; y < height; y += space) {
        var p = createVector(x, y )
        points.push(p)
      }
    }
}

function draw() {

  strokeWeight(0.3)
  colorMode(RGB);
  for (let c = 0; c < 255; c++) {
    stroke(57, 204, 63,50);
  }



    for (var i = 0; i < points.length; i++) {

      var angle = map(noise(points[i].x*mult,points[i].y*mult),1,0,1,720)

      points[i].add(createVector(cos(angle),sin(angle)))


      ellipse(points[i].x, points[i].y, 1)

    }
}
