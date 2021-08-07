img="";
status="";
objects=[];
function preload(){
    img=loadImage("dog_cat.jpg")
}
function setup(){
Canvas=createCanvas(380,380)
Canvas.center();
video = createCapture(VIDEO)
video.size(380,380)
video.hide()
objectDetector= ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting objects"
}
function draw(){
    
    image(video, 0,0 ,380,380)
    objectDetector.detect(video, gotResults)
    
    
    if (status !=""){
        r=random(255)
        g=random(255)
        b=random(255)
        for (i=0; i < objects.length; i++)
        {
        document.getElementById("status").innerHTML="Status: Detected objects"
        document.getElementById("oc").innerHTML=`number of objects is ${objects.length}`
        fill(r,g,b);
        percent = floor(objects[i].confidence *100);
        text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
     noFill();
     stroke(r,g,b);
     rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height );
    }}
    }
function modelLoaded(){
    status=true;
   
}
function gotResults(error, results){
    if(error){
        
        document.getElementById("error").innerHTML=error
        document.getElementById("error").style.color="red"
        
    }
    objects = results;
    
        }
