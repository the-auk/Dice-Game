var total=0, final=0, active=0, gamePlaying, roll;
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('#current-0').textContent = '0';
//only selects first element??
//change something in html using ids instead of classes
//query selector selects the id, use # to define the id, change text using textContent
//user innerHTML to change HTML do italics and shit on text
//document.querySelector('#current-'+active).innerHTML='<em>'+roll+'</em>';

// var x = document.querySelector('#current-0').textContent;
// console.log(x);

//changing css using javascript, querySelector using classes
//use . to denote the class from css, use style to change style
//then the css property and then the value
document.querySelector('.dice').style.display='none';
//Listeners
// different type of events, two arguments, first is the type of event, second is the function we need to call
//this function is called callback funtion because it is not called by us
//addEventListener('click', btn())
//or we can write the function instead of the name -> anonymous function cannot be called back
document.querySelector('.btn-roll').addEventListener('click', function() {

roll = Math.floor((Math.random()*6)+1); //random roll
//change pic to what roll is
var temp = document.querySelector('.dice');
temp.style.display='block';
temp.src='dice-'+ roll+'.png';
//change what current is
if(roll==1){
  final = parseInt(document.querySelector('#score-'+active).textContent);
  end();}
total=total+roll;
document.querySelector('#current-'+active).innerHTML='<em>'+total+'</em>';

});

document.querySelector('.btn-hold').addEventListener('click', function() {
//change the final score
   final = parseInt(document.querySelector('#score-'+active).textContent)+total;
   end();
 });

function end()
{
  roll=0;
  total=0;
  //display the current as zero
  document.querySelector('#current-'+active).innerHTML='<em>'+total+'</em>';
  //display final score, only happens in hold or end
  document.querySelector('#score-'+active).textContent=final;
  
  final=0;
  //changing classes in html
  if(active==0) {
    active=1;
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
    //document.querySelector('.player-0-panel').classList.toggle('active');
  }
  else {
    active=0;
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
  }
}
