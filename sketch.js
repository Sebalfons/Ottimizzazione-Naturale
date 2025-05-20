function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("canvas-container");
    background(20);
  }
  
  function draw() {
    fill(255, 100);
    noStroke();
    ellipse(mouseX, mouseY, 40);
  }
  