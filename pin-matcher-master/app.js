function generateOTP(){
  var numbers = '0123456789';
  var OTP = '';
  for (let i = 0; i < 4; i++) {
    var element = Math.floor(Math.random() * numbers.length);
    OTP += numbers[element];
      
  }
  return OTP
}
var result = generateOTP();

document.getElementById('OTP-btn').addEventListener('click',function(){
    

    document.getElementById('generateScreen').value =  generateOTP();
})

// Function between number buttons and screen

function collectingMynumbers(id){
    const collectValue= document.getElementById(id).innerText;
    let collected = parseInt(collectValue);

    document.getElementById('selfValue').value+=collected;
}
document.getElementById('one').addEventListener('click',function(){
   collectingMynumbers('one');
})

document.getElementById('two').addEventListener('click',function(){
    collectingMynumbers('two');
 })
 
document.getElementById('three').addEventListener('click',function(){
    collectingMynumbers('three');
 })
 
document.getElementById('four').addEventListener('click',function(){
    collectingMynumbers('four');
 })
 
document.getElementById('five').addEventListener('click',function(){
    collectingMynumbers('five');
 })
 
document.getElementById('six').addEventListener('click',function(){
    collectingMynumbers('six');
 })
 
document.getElementById('seven').addEventListener('click',function(){
    collectingMynumbers('seven');
 })

 
document.getElementById('eight').addEventListener('click',function(){
    collectingMynumbers('eight');
 })
 
document.getElementById('nine').addEventListener('click',function(){
    collectingMynumbers('nine');
 })

 document.getElementById('zero').addEventListener('click',function(){
    collectingMynumbers('zero');
 })

 // For Empty input Value

 document.getElementById('forEmptyScreen').addEventListener('click',function(){
    document.getElementById('selfValue').value = '';
 })

 document.getElementById('backspace').addEventListener('click',function(){
   back();
 })
 
function back() {
    var value = document.getElementById("selfValue").value;
    document.getElementById("selfValue").value = value.substr(0, value.length - 1);
}


 // Close Button

 
//Apply Screen Condition
 
document.getElementById('submitBtn').addEventListener('click',function(){
  
    var cScreen = document.getElementById('generateScreen').value;
  
    var sScreen = document.getElementById('selfValue').value;
    document.getElementById('generateScreen').value ='';             // One OTP code can use only one time

    if(cScreen === sScreen )  {
        
        document.getElementById('pin-match').style.display='block';
        
        document.getElementById('pin-not-match').style.display='none';
       
    }
    else {
        document.getElementById('pin-not-match').style.display='block';
        document.getElementById('pin-match').style.display='none';
   
    }
})

//Disable submit Button


document.getElementById('submitBtn').addEventListener('click',function(){
   var clicks = document.getElementById('click').innerText;
   var clicked = parseInt(clicks);
  
  for (let i = 0; i < clicked.length; i--){
      const element = clicked[i];
      document.getElementById('click').innerText = element;
      if(element<=0){
        this.disabled = true;
    }
  
  }
 
  
})