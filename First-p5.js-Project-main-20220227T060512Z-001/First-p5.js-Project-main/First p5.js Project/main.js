function preload(){
  img=loadImage('Pic.jpg');
}

function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(110.250);
}

function draw(){
    image(img, 100, 100, 450, 300);
    fill(10,233,49);
    stroke(25,68,210);
    circle(40, 50, 70);
    rect(75, 40, 500, 30);
    circle(600,50,70);
    rect(75, 425, 500, 30);
    circle(40, 440, 70);
    circle(600, 440, 70)
}

function take_snapshot(){
    save('Mypicture.png');
}