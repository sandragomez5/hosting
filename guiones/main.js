let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');

function setUserName() {
  let myName = prompt('Antes de ser bienvenido al Misakismo, rellena el campo con tus últimas palabras como pagano.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Existes, piensas, dices, y yo veo que has realizado ese proceso sin aportar yo nada. ' + myName + ' Lo has vuelto a hacer.';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Existes, piensas, dices, y yo veo que has realizado ese proceso sin aportar yo nada. ' + storedName + ' Lo has vuelto a hacer.';
}

myButton.onclick = function() {
  setUserName();
}
<html>
    <head>
        <meta charset="utf-8">
        <title>Derivado de "Desafío: pasarela"</title>
        <style>
            #cat {
                position: absolute;
                left: 0px;
            }
        </style>
    </head>
    <body>
    <div>
        <!-- Cat walking GIF from: http://www.anniemation.com/clip_art/graphics.html -->
        <img id="cat" src="https://www.kasandbox.org/programming-images/misc/cat-walk.gif">
    </div>
    
  <script>
  var catEl = document.getElementById("cat");
  
  var startTime = new Date().getTime();
  var walkTheCat = function() {
      var currTime = new Date().getTime();
      var secondsElapsed = ((currTime - startTime)/1000);
      
      var newLeft = (50 + ((currTime - startTime)/1000)*30);
      catEl.style.left= newLeft + "px";
      if (newLeft<3000) {
          window.requestAnimationFrame(walkTheCat);
      }
  };
  
  walkTheCat();
  </script>

    </body>
</html>
