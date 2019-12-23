< html >
    < head >
        < meta charset="utf-8" >
        < title >Derivado de "Desafío: pasarela"</title>
        < style >
            #cat {
                position: absolute;
                left: 10 px;
            }
        </ style >
    </ head >
    < body >
    < div >
        < !-- Cat walking GIF from: http://www.anniemation.com/clip_art/graphics.html -- >
        < img id="cat" src="https://www.kasandbox.org/programming-images/misc/cat-walk.gif" >
    </ div >
    
  < script >
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
  </ script >

    </ body >
</ html >
