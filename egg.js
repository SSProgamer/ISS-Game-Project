egg_cook = {
  "egg_welldone": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/egg1.png",
  "egg_raw": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/egg2.png",
  "egg_burn": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/egg.png",
  
}

var elem = document.getElementById("breakfast_oval");   
  var pos = 0;
       // pause animation
document.querySelector("#pause").addEventListener('click', function() {
    const el1 = document.getElementById('breakfast_oval');
    const el2 = document.getElementById('breakfast_bar_win');
  const el3 = document.getElementById('breakfast_bar_win_win');
	document.querySelector("#breakfast_oval").style.animationPlayState = 'paused';
  if (elementsOverlap(el1, el3)){
    document.getElementById("microwave").src = egg_cook["egg_welldone"];
   // document.getElementById("breakfast_img_welldone").style.zIndex = `10`;
      document.getElementById("breakfast_win_text").innerHTML = "";
      $.getScript("script.js", function(){addstar(3);});
      //document.getElementById("showallstar").stepUp();
      for (let i = 0; i < 3; i++) {
        var img = document.createElement("img");
        img.src = "images\\Star.png";
        var src = document.getElementById("breakfast_win_text");
        src.appendChild(img);
      }
    
    }
    else if (elementsOverlap(el1, el2)){
      document.getElementById("microwave").src = egg_cook["egg_raw"];
        document.getElementById("breakfast_win_text").innerHTML = "";
      $.getScript("script.js", function(){addstar(2);});
      //document.getElementById("showallstar").stepUp();
      for (let i = 0; i < 2; i++) {
        var img = document.createElement("img");
        img.src = "images\\Star.png";
        var src = document.getElementById("breakfast_win_text");
        src.appendChild(img);
      }
      
    }
    else{
      document.getElementById("microwave").src = egg_cook["egg_burn"];
      document.getElementById("breakfast_win_text").innerHTML = "";
      $.getScript("script.js", function(){addstar(allstar.x+1);});
      //document.getElementById("showallstar").stepUp();
      var img = document.createElement("img");
      img.src = "images\\Star.png";
      var src = document.getElementById("breakfast_win_text");
      src.appendChild(img);
      
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