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

// Function between number-buttons and screen

function collectingBtnValue(id){
    const collectValue= document.getElementById(id).innerText;
    let collected = parseInt(collectValue);

    document.getElementById('selfValue').value += collected;
}
document.getElementById('one').addEventListener('click',function(){
    collectingBtnValue('one');
})

document.getElementById('two').addEventListener('click',function(){
    collectingBtnValue('two');
 })
 
document.getElementById('three').addEventListener('click',function(){
    collectingBtnValue('three');
 })
 
document.getElementById('four').addEventListener('click',function(){
    collectingBtnValue('four');
 })
 
document.getElementById('five').addEventListener('click',function(){
    collectingBtnValue('five');
 })
 
document.getElementById('six').addEventListener('click',function(){
    collectingBtnValue('six');
 })
 
document.getElementById('seven').addEventListener('click',function(){
    collectingBtnValue('seven');
 })

 
document.getElementById('eight').addEventListener('click',function(){
    collectingBtnValue('eight');
 })
 
document.getElementById('nine').addEventListener('click',function(){
    collectingBtnValue('nine');
 })

 document.getElementById('zero').addEventListener('click',function(){
    collectingBtnValue('zero');
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
        
        
        var click = document.getElementById('click').innerText;
        var parsingClickValue = parseInt(click);
        click = parsingClickValue--;
        
        if(click == 1) {                                                //Disabling Submit button
        document.getElementById('submitBtn').disabled = true;
        }
        
        document.getElementById('click').innerText = parsingClickValue;
        
        document.getElementById('pin-not-match').style.display='block';

        document.getElementById('pin-match').style.display='none';

        document.getElementById('invalid-pin').style.display='none';
   
    }

})