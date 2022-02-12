status=""
objects=[]

function preload()
{
}

function setup()
{
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()
    video.size(380,380)
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function draw()
{
    image(video,0,0,380,380);
   // rect(30,60,459,350);
   // text("Dog", 45,75)
   // fill("#FF0000")
   // noFill()    //Used to unset the color//
    // stroke("#FF0000")

  //  fill("#FF0000")
   // stroke("#FF0000")
  //  noFill()
  //  text("Cat", 320, 120)
    // rect(300,90,270,320)//

    // Using for-loop to draw a rectangle, labels , color

    if()

function modelLoaded()
{
    console.log("modelLoaded")
    status=true
}

function gotresults(error,results)
{
    if (error)
    {
        console.log(error)
    }
    else 
    {
        console.log(results)
        objects=results;
    }
}
