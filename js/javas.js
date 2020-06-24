'use strict'
function welcome (){
    var welcome;
    var hello = prompt("Are you aware of coronavirus danger??", "Please type yes or no");
    if (hello == "yes"){
    alert ('Thanks for your awarness')
    }else {
        alert('please press contact us')
    }
}
function commit() {
    var comitt = prompt('Are you commited to social distancing principal??' , "Please type yes or no");
    if (comitt == "yes"){
    alert ('Thanks for your awarness')
    }else {
    alert('you should follow them!!!')
    }
}


function reuslt() {
    var result = confirm("Please confirm to follow Public safety measures");
    if (result==true){
    var status = 'Authorized';
    document.write( '<h1>' + status + '</h1>');
    }else { 
       var status = 'NOT Authorized';
        document.write( '<p class="not">' + status + '</p>');
    }
}
function clean(){
    var clean = prompt('How many times do you wash your hand daily??', 'please enter a number');
    if (clean >=10){
    alert (clean +' Times is good \,Give me a high five!!!')
    }else{
        alert (clean + ' times is not enough Go wash your self!!!!! GETOUT from my website hahahahaha');
        window.close();
    }
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
function random(){
    var userinput;
    var id = makeid(5);
while(userinput!==id){
       for(var i=1;i<=3;i++){
        var userinput = prompt('Please enter the generated code: '+id);
        if (userinput==id){
            alert("Welcome");
            break;
        }else if(i<=3){
            alert("You enter it WRONG {{{ "+ i + " }}} time")
            }   
             
           
        }
        if (userinput!==id){
           alert('YOU CANNOT ENTER THIS WEBSITE!!!!!!!!')
            window.close(); 
            break;

        }    
       
        
}
    
}



//welcome()
//commit()
//reuslt()
//clean()
random()

