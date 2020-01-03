//LOOK AT DOM EXERCISE 2

//Getting a modal with an onclick event
let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}

//Revealing a hidden DOM element
let sneak = document.getElementById(".sneak");

function reveal(){
    document.getElementById("sneak").style.visibility = 'visible';
    document.getElementById("sneak").style.height = '50%';
    document.getElementById("sneak").style.width = '50%';
    // document.getElementById("sneak").style.display = 'flex';
    document.getElementById("sneak").style.alignItems = 'center';
    document.getElementById("sneak").style.alignContent = 'center';
}

function remove(){
    let elem = document.querySelector('#sneak');
    elem.parentNode.removeChild(elem);

    /* if (sneak){
      let elem = document.querySelector('#sneak');
      elem.parentNode.removeChild(elem);
    } else {
      */
}


//Add event listener
document.getElementById("date").addEventListener("click", displayDate);

function displayDate(){
    document.getElementById("demo").innerHTML = Date();
}


//Call function on click
const body = document.getElementByID("body");
const text = document.getElementById("text");

function turnBlue(){
    document.getElementById("text").style.color = 'blue';
}

function turnRed(){
    document.getElementById("body").style.backgroundColor = 'red';

}

function revert(){
    document.getElementById("text").style.color = '#618685';
    document.getElementById("body").style.backgroundColor = '#d5f4e6';
}



