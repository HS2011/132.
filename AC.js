status = ""
function preload(){
imag = loadImage("IMG_1033.jpg")
}
function setup(){
canvas = createCanvas(400,500)
canvas.position(400,150)
object = ml5.objectDetector("cocossd", ModelLoaded)
document.getElementById("status").innerHTML = "Status: Detecting Objects."
}
function ModelLoaded() {
    console.log("Model Loaded")
    status = true
    objection.detect(imag, gotResults)
  
  }
  function gotResults(results, error){
    if(error){
      console.error(error)
    }
    console.log(results)
    objects = results
  }
function draw(){

}