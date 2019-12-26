// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/ingredients.png') {
    myImage.setAttribute ('src','images/cookies.png');
  } else {
    myImage.setAttribute ('src','images/ingredients.png');
  }
}


// El gato desplazándose <3
var catEl = document.getElementById("cat");

var startTime = new Date().getTime();    
var walkTheCat = function(){
    var currTime = new Date().getTime();
    var newLeft = ((currTime - startTime) / 1000) * 100;
    var newTop = 0//((currTime - startTime) / 1000) * 100;
    if (newLeft > 850){ startTime = currTime};
    console.log(newLeft);
    catEl.style.left = newLeft + "px";
    catEl.style.top = newTop + "px";
    window.requestAnimationFrame(walkTheCat);
};
walkTheCat();

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Escribe tu nombre de Chef!!');
  if(!myName || myName === null) {
    
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = ' Hola!' + myName + 'preparad@ para cocinar?';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hola!... ' + storedName + '...preparad@ para cocinar?';
}

myButton.onclick = function() {
  setUserName();
}
