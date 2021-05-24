

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch
// console.log(count)


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

/* const soundBtn = document.querySelector('increment.btn')
let myAudio = document.querySelector('#audio');
soundBtn.addEventListener('click',()=>{myAudio.play();});
fuction incrementBtn() {

} */

let count = 0
let countEl = document.getElementById("count-el")
let audio = new Audio("/sound");

function play() {
  audio.play();
}
function increment() {
    
    count += 1
    countEl.innerText = count

    
}
