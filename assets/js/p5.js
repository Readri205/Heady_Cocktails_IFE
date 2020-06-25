var lineX = 0;

function setup() {
    createCanvas(600, 400);

}

function draw() {
    background (51);


    stroke(255);
    line(lineX, 0, lineX, height);
    if (lineX > width) {
        lineX=0;
    }

}

