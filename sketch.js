const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    backgroundImg = loadImage("sprites/sunrise1.png");
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format

    var responseJSON= await response.json()
    // write code slice the datetime

    console.log(responseJSON)
    var dt= responseJSON.datetime;
    console.log(dt)
    
    var time= dt.slice(11,13)
    console.log(time)

    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here



  
        
        if(time>06 && time<15){
        img="sprites/sunset1.png"
        }
        else{
            img="sprites/sunset2.png"
        
        }
        backgroundImg= loadImage(img)
        
       
}
