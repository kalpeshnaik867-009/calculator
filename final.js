const input = document.querySelector("#n");

var ans = document.querySelector("#anss");
var number = document.querySelector(".num");
var cancle = document.querySelector("#cancle");
const con = document.querySelector(".new-con");
const digit1=document.querySelector(".digits");
const symbolss=document.querySelector(".arrSymbols");
const cleann=document.querySelector(".clean");
  


for (let i = 1; i <= 9; i++) {
    const buttons = document.createElement("button");
    buttons.innerText = i;
    buttons.id = "id-button";
    buttons.onclick = function () {
        return num(i);
    }
    digit1.appendChild(buttons);


}
const arr=['+','-','/','*'];
for(let i=0;i<arr.length;i++){
    const buttons = document.createElement("button");
    buttons.innerText=arr[i];
    buttons.id="id-button";
    buttons.onclick=function(){
      return num(arr[i]);
       
    }
     symbolss.appendChild(buttons);
  
 
    console.log(arr[i]);
}




function num(getnnumber) {
    input.value = input.value + getnnumber;
}

function equal() {
    if (input.value.split('+').length > 1) {
        input.value = Number(input.value.split('+')[0]) + Number(input.value.split('+')[1])
    }
    else if (input.value.split('-').length > 1) {
        input.value = Number(input.value.split('-')[0]) - Number(input.value.split('-')[1])
    }
    else if (input.value.split('/').length > 1) {
        input.value = Number(input.value.split('/')[0]) / Number(input.value.split('/')[1])
    }
    else if (input.value.split('*').length > 1) {
        input.value = Number(input.value.split('*')[0]) * Number(input.value.split('*')[1])
    }


}

var clearfn = () => {
    input.value = input.value.slice(0, -1);
};







