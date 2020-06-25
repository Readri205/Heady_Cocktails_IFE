var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

xhr.open("GET", "http://api.worldbank.org/v2/region?format=json");

xhr.send();




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


