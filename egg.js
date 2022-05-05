
var elem = document.getElementById("breakfast_oval");   
  var pos = 0;
       // pause animation
document.querySelector("#pause").addEventListener('click', function() {
    const el1 = document.getElementById('breakfast_oval');
    const el2 = document.getElementById('breakfast_bar_win');
  const el3 = document.getElementById('breakfast_bar_win_win');
	document.querySelector("#breakfast_oval").style.animationPlayState = 'paused';
  if (elementsOverlap(el1, el3)){
        document.getElementById("breakfast_win_text").innerHTML = "3 star";
    }
    else if (elementsOverlap(el1, el2)){
        document.getElementById("breakfast_win_text").innerHTML = "2 star";
    }
    else{
        document.getElementById("breakfast_win_text").innerHTML = "1 star";
    }
});

// play animation
document.querySelector("#play").addEventListener('click', function() {
	document.querySelector("#breakfast_oval").style.animationPlayState = 'running';
});
function elementsOverlap(el1, el2) {
        const domRect1 = el1.getBoundingClientRect();
        const domRect2 = el2.getBoundingClientRect();
      
        return !(
          domRect1.top > domRect2.bottom ||
          domRect1.right < domRect2.left ||
          domRect1.bottom < domRect2.top ||
          domRect1.left > domRect2.right
        );
      }
document.querySelector("#breakfast_oval").style.animationPlayState = 'paused';