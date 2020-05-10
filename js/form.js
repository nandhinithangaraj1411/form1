class Form{
  constructor(){}

display(){
  
var name=createInput("Name");
var emailid=createInput("Email id")

name.position(350,50)
emailid.position(650,50)

var buttonsubmit=createButton("Submit")
  buttonsubmit.position(700,560)

  var title=createElement('h2')
  title.html("Survey to install cctv cameras at Public/Remote areas")
  title.position(450,80)
  
  var q1=createElement('h4')
  q1.html("Q1.Do you find it important to install cameras at Public/Remote areas")
  q1.position(350,150)
  
  var a1=createElement('h4')
  a1.html("Yes")
  a1.position(400,180)
  
  var a2=createElement('h4')
  a2.html("No")
  a2.position(400,200)
  
  var q2=createElement('h4')
  q2.html("Q2.If yes,then please choose an option supporting your purpose?")
  q2.position(350,240)
 
  var a3=createElement('h4')
  a3.html("To enhance women safety measures.")
  a3.position(400,270)
 
  var a4=createElement('h4')
  a4.html("To prevent robberies,and mishappenings")
  a4.position(400,290)
 
  var a5=createElement('h4')
  a5.html("other")
  a5.position(400,310)
  
  var q3=createElement('h4')
  q3.html("Q3.Name any area(s) in your District/State that you think need to be under cctv surveilance:")
  q3.position(350,340)
 
  var input=createInput("District/area/street")
  input.position(400,390)
 
  var q4=createElement('h4')
  q4.html("Q4.Would you want to make any financial contributions to support this cause?")
  q4.position(350,430)
  var a6=createElement('h4')
  a6.html('Yes') 
  a6.position(400,466)
  
  var a7=createElement('h4')
  a7.html('No')
  a7.position(400,492)

  var but=createButton(null);
  but.position(380,210)
 
  var but1=createButton(null);
  but1.position(380,230)
  
  var but2=createButton(null)
  but2.position(380,300)
  
  var but3=createButton(null)
  but3.position(380,320)
 
  var but4=createButton(null)
  but4.position(380,340)
  
  var but5=createButton(null)
  but5.position(380,492)
  
  var but6=createButton(null)
  but6.position(380,520)

  but5.mousePressed(function(){
      var input1=createInput("Kindly enter the amount you wold want to contribute ")
      input1.position(400,480)
    })

  
  
  buttonsubmit.mousePressed(function(){

    voter.name=name.value();
    voter.emailid=emailid.value();
    var subthx=createElement('h2');
      subthx.html("Thanks for submitting the survey" )
      subthx.position(400,300)
     title.hide();
      q1.hide();
      q2.hide();
      q3.hide();
      q4.hide();
      a1.hide();
      a2.hide();
      a3.hide();
      a4.hide()
      a5.hide();
      a6.hide();
      a7.hide();
      buttonsubmit.hide();
    
      input.hide();
      
      but.hide();
      but1.hide();
      but2.hide();
      but3.hide();
      but4.hide();
      but5.hide();
      but6.hide();
      
      voterCount=voterCount+1;
      //voter.index=voterCount;
      voter.updateCount(voterCount)
      voter.update();
  
    })

} 
}