noseX=-20
noseY=-20
function preload()
{
    mask = loadImage("som.jpg")
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.position(500,150)
    video=createCapture(VIDEO)
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPosses)
}
function draw()
{
    image(video,0,0,300,300)
    image(mask,noseX,noseY,0,0)
}
function banana()
{
    save("some.png")
}
function modelLoaded()
{
    console.log ("model is loaded");
}
function gotPosses(results)
{
    if (results.length>0)
    {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
    } 
        
}

