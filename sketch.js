var canvas;
var database;
var voter;
var form;
var voterCount;


function setup(){
    database=firebase.database();
    canvas=createCanvas(800,600)
    form=new Form();
    voter=new Voter();
    form.display();
    voter.getCount();
    
}
function draw(){
    
    
}

