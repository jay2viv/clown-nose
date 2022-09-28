nosex = 0;
nosey = 0;
function preload()
{
    clown_nose = loadImage("image-removebg-preview.png")
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300,300)
    posenet = ml5.poseNet(video,modelready);
    posenet.on('pose',gotposes);
    
}

function modelready()
{
    console.log("yay it worked")
}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
    }
}
function draw()
{
    image(video,0,0,300,300);
    fill("red");
    stroke("red");
    circle(nosex,nosey,20)
    image(clown_nose,nosex,nosey,55,40)

}

function take_img()
{
    save("my.jpg")
}