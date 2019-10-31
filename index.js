// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// document.title="UL cyberpark";
// console.log(document.all[7]);
//console.log(document.getElementById("intro"));  //getting an element by id
// let store = document.getElementById("intro")
// store.innerHTML="<h1>Hiii</h1>";
// console.log(store.innerText);
// console.log(store.textContent);
// console.log(store.textContent);
// store.textContent="Good morning";
// console.log(store.textContent);
 let hold=document.getElementsByClassName("Heading");
hold[1].textContent="Hello";
hold[1].style.borderBottom = "solid 3px blue";
hold[0].style.fontStyle = "italic";
hold[0].style.backgroundColor = "yellow";
var i=0;
for(i=0;i<hold.length;i++){
    hold[i].style.backgroundColor = "yellow";
}
let safe = document.getElementsByTagName("h1");
console.log(safe);
safe[1].textContent = "Tag Text changed";
console.log(safe[1].textContent);
let area = document.querySelector("input");
area.value = "Pling!!!";
let a2 = document.querySelector("#text");
a2.value = "WOW!!!";
let submit = document.querySelector('input[type="submit"]');
submit.value = "YESSS!!!";

function MyFun(){
 alert("Alert on button click");   
let ch1 = document.querySelector('.lichild');
ch1.style.color = 'red';
let ch2 = document.querySelector('.lichild:last-child');
ch2.style.color = 'blue';
let ch3 = document.querySelector('.lichild:nth-child(2)');
ch3.style.color = 'green';
let ch4 = document.querySelector('.lichild:nth-child(3)');
ch4.style.color = 'green';

}
function Fun(){
    alert("Page is loaded");
}
    function Myfunction(val){
        alert("The input value has changed. the new value is: "+ val);
    }

function myFunction() {
  alert("The form was submitted");
}