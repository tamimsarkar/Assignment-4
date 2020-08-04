function generateOTP(){
  var numbers = '0123456789';
  var OTP = '';
  for (let i = 0; i < 4; i++) {
    var element = Math.floor(Math.random() * numbers.length);
    OTP += numbers[element];
      
  }
  return OTP
}


document.getElementById('OTP-btn').addEventListener('click',function(){
    

    document.getElementById('generateScreen').value =  generateOTP();
})

// Function between number buttons and screen

function collectingMynumbers(id){
    const collectValue= document.getElementById(id).innerText;
    let collected = parseInt(collectValue);

    document.getElementById('selfValue').value += collected;
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

 // For Cencel Button

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

//Apply Screen Condition
 
document.getElementById('submitBtn').addEventListener('click',function(){
  
    var generateScreen = document.getElementById('generateScreen').value;
  
    var selfScreen = document.getElementById('selfValue').value;
    document.getElementById('generateScreen').value ='';             // One OTP code can use only one time

    var span = parseInt(document.getElementById('click').innerText);

    if(generateScreen.length == 4 && selfScreen.length == 4 && generateScreen == selfScreen)  {
        
        document.getElementById('pin-match').style.display='block';
        
        document.getElementById('pin-not-match').style.display='none';

        document.getElementById('invalid-pin').style.display='none';
       
    }else if( selfScreen.length > 4 ){

        document.getElementById('invalid-pin').style.display='block';
        
    }
    else {
        document.getElementById('pin-not-match').style.display='block';

        document.getElementById('pin-match').style.display='none';

        document.getElementById('invalid-pin').style.display='none';
   
    }

})