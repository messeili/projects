'use strict'
var welcome;
var hello = prompt("Are you aware of coronavirus danger??", "Please type yes or no");
if (hello = "yes"){
alert ('Thanks for your awarness')
}else {
    alert('please press contact us')
}
var comitt = prompt('Are you commited to social distancing principal??' , "Please type yes or no");
if (comitt = "yes"){
alert ('Thanks for your awarness')
}else {
    prompt('you should follow them!!!')
}
var clean = prompt('How many times do you wash your hand daily??', 'please enter a number');
if (clean >=10){
alert ('Give me a high five!!!')
}else{
    alert ('Go wash your self!!!!!')
}
var result = confirm("Please confirm to follow Public safety measures");
if (result==true){
var status = 'Authorized';
document.write( '<h1>' + status + '</h1>');
}else { 
   var status = 'NOT Authorized';
    document.write( '<p class="not">' + status + '</p>');
}

