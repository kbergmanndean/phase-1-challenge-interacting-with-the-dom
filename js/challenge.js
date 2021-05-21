document.addEventListener("DOMContentLoaded", function() {
    //let intervalId=setInterval (countUp, 1000); 
})

//grab counter from document, turn it into number
let counter=document.querySelector("#counter");
let realNumber=parseInt(counter.innerText,10);
//increment counter
function countUp(){
    realNumber++;
    counter.innerText=realNumber;
}
//set counter going
let intervalId=setInterval (countUp, 1000); 

//get plus button
const plusButton=document.querySelector("#plus")
//click event on plus button
plusButton.addEventListener("click",countUp,) 
//get minus button
const minusButton=document.querySelector("#minus")
//decrement counter
function countDown() {
    realNumber--;
    counter.innerText=realNumber;
}
//click event on minus button
minusButton.addEventListener("click",countDown)
//get like button and likes list
const likeButton=document.querySelector("#heart");
const likesList=document.querySelector(".likes")
//keep track of clicks WRONG METHOD LOL:
//let likeCount=0
// likeButton.onclick=function() {
//     likeCount++;
//     likesList.textContent=likeCount
// }
//HERES PART OF THE GIVEN METHOD LOL:
// heart.addEventListener("click",function(){
//     d=void 0;
//     if([].concat(_toConsumableArray(likesList.children)).map(function(counter){
//         return parseInt(counter.dataset.num)
//     })
//     .includes(realNumber)){
//         d=document.querySelector('[data-num="'+realNumber+'"]');
//         let e=parseInt(d.children[0].innerText);
//         d.innerHTML=realNumber+" has been liked <span>"+(e+1)+"</span> times"
//     }
//     else(d=document.createElement("li")).setAttribute("data-num",realNumber),
//     d.innerHTML=realNumber+" has been liked <span>1</span> time",likesList.appendChild(d)})


//get pause button
const pauseButton=document.querySelector("#pause")
//function for pausing
function pause() {
    clearInterval(intervalId)
}
//event for pause
pauseButton.addEventListener("click",pause)

