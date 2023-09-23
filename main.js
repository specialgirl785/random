leftWristX = 0
rightWristX =0;

difference=0;

function preload(){

}

function draw(){
background('azure');
document.getElementById('iceSpice').innerHTML = "fontsize=" + difference;
textSize(difference)
fill('cyan')
text('B.I.M.A', 50, 400)
}

function setup(){

    canvas=createCanvas(550,550)
    canvas.position(560,200)
    video = createCapture(VIDEO)
    video.size(550,500)
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("PoseNet has been loaded successfully")
}

function gotPoses(results){
if(results.length > 0){
console.log(results)
leftWristX = results[0].pose.leftWrist.x
rightWristX = results[0].pose.rightWrist.x
difference=floor(leftWristX - rightWristX)
}
}