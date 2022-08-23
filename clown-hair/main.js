
var leftEar_x = 0;
var leftEar_y = 0;
function preload(){

clown_hair = loadImage("clown_hair.png");
}

function setup(){

    canvas = createCanvas(500,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNEt = ml5.poseNet(video, model_loaded);

    poseNEt.on("pose", got_results);


}

function draw(){

    image(video, 0 , 0, 500, 500);

    //fill("maroon");
   // circle();
  image(clown_hair, leftEar_x, leftEar_y,250,200);

}

function model_loaded(){

    console.log("model is loaded");
}

function got_results(results){

    if(results.length > 0) {
      // console.log(results);
        leftEar_x = results[0].pose.leftEar.x -250;
        leftEar_y = results[0].pose.leftEar.y -150;
       console.log("X position : ",   leftEar_x);
        console.log("Y position : ",   leftEar_y);
    }

}

function take_snapshot(){

    save("my_selfie.png");
}