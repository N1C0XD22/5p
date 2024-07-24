function preload(){

}

function setup(){
    canvas=createCanvas(640, 480);
canvas.position(110, 250);
video=createCapture(VIDEO);
video.hide();

tint_color=" ";
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot(){
    save('yo.png')
}

ellipse(350, 230, 50, 55)
ellipse(250, 130, 50, 55)
ellipse(450, 330, 50, 55)
ellipse(350, 430, 50, 55)