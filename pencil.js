status = "";
function preload(){
    pencil = loadImage("cartoy.jpg");
}
function setup(){
    canvas = createCanvas(600,400);
    canvas.center();
    coco = ml5.objectDetector("coccossd", modelLoaded);
}
function modelLoaded(){
    console.log("The Model is Loaded...  Woo Hoo 😁");
    status = true;
    coco.detect(pencil, gotResult);
}
function gotResult(error, result){
    if(error){
        console.log(error);
        }
        else{
            console.log(result);
            object = result;
        }
}