var outputscreen=document.getElementById('cal');
function display(num){
  
  outputscreen.value +=num;
}
function calculate(){
  try{
    outputscreen.value=eval(outputscreen.value)
  }
  catch(err){
    alert("invalid")
  }
}
function Clear(){
  outputscreen.value="";
}
function del(){
  outputscreen.value=outputscreen.value.slice(0,-1)
}