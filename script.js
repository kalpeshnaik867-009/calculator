var input=document.querySelector("#n");
var input2=document.querySelector("#n2");
var ans=document.querySelector("#anss");
var number=document.querySelector(".num");
var cancle=document.querySelector("#cancle")


// document.getElementById("answer").value = 100;

// var ans= document.getElementById("answer")
// ans.value = 100


var joj;
 function add(){
   // var num1=Number(input.value);
    //var num2=Number(input2.value);
    ans.value=Number(input.value)+Number(input2.value); 
 }

 function sub(){
    ans.value=Number(input.value)-Number(input2.value);
 }
  function div(){
    ans.value=Number(input.value)/Number(input2.value);
 }
  function mul(){
    ans.value=Number(input.value)*Number(input2.value);
 }
 function num(getnnumber){
   console.log(input.value);
    if( input.value==''){
     input.value=getnnumber;
  }
  else{
   input2.value=getnnumber;
  }

 }
 function can(){
    input.value='';
    input2.value='';
    ans='';
   

   }
 


    
 
  