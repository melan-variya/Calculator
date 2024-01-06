const one=document.getElementById('one');
const two=document.getElementById('two');
const three=document.getElementById('three');
const four=document.getElementById('four');
const five=document.getElementById('five');
const six=document.getElementById('six');
const seven=document.getElementById('seven');
const eight=document.getElementById('eight');
const nine=document.getElementById('nine');
const zero=document.getElementById('zero');
const plus=document.getElementById('plus');
const minus=document.getElementById('minus');
const multi=document.getElementById('mul');
const divi=document.getElementById('divi');
const finalans =document.getElementById("final");
const answer =document.getElementById("answer");
const clean =document.getElementById("delete");

var calculation=0;
var strnumber="";
var intnumber=0;
var si=answer.textContent;
one.onclick= function(){
    if(si.length<10)
    console.log(si.length);

    answer.innerHTML+=('1');
    // number+='1';
}
two.onclick= function(){
    answer.innerHTML+=('2');
    // number+='2';
}
three.onclick= function(){
    answer.innerHTML+=('3');
    // number+='3';
}
four.onclick= function(){
    answer.innerHTML+=('4');
    // number+='4';
}
five.onclick= function(){
    answer.innerHTML+=('5');
    // number+='5';
}
six.onclick= function(){
    answer.innerHTML+=('6');
    // number+='6';
}
seven.onclick= function(){
    answer.innerHTML+=('7');
    // number+='7';
}
eight.onclick= function(){
    answer.innerHTML+=('8');
    // number+='8';
}
nine.onclick= function(){
    answer.innerHTML+=('9');
    // number+='9';
}
zero.onclick= function(){
    answer.innerHTML+=('0');
    // number+='0';
}
plus.onclick= function(){
    // calculation+=parseInt(number);
    // number="";
    answer.innerHTML+=('+');
}
multi.onclick= function(){
    // calculation*=parseInt(number);
    // number="";
    answer.innerHTML+=('*');
}
divi.onclick= function(){
    // calculation+=parseInt(number);
    // number="";
    answer.innerHTML+=('/');
}
minus.onclick= function(){
    answer.innerHTML+=('-');
}

finalans.onclick=function(){
    function evaluateExpression(expression) {
        try {
            return eval(expression);
        } catch (error) {
            alert("Please Enter Valid Input.");

        }
    }
    
    let result = evaluateExpression(answer.textContent);
    console.log(result);
    answer.innerHTML=result;
}
clean.onclick= function(){
    answer.innerHTML="";
}