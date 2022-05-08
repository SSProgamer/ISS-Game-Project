// Defines identifiers for accessing HTML elements
    const //minutesInput = document.getElementById("minutesInput"),
          startButton = document.getElementById("startButton"),
          counterDiv = document.getElementById("counterDisplay");
          
    // Adds listeners and declares global variables
    startButton.addEventListener('click', start);
    let totalSeconds; // global variable to count down total seconds
    let timer; // global variable for setInterval and clearInterval 
    //Disables buttons that are not needed yet
    //disable(minutesInput);

    
    
    // Defines functions that get the minutes and seconds for display
    function getMinutes(totalSeconds){
      return Math.floor(totalSeconds / 60); // Gets quotient rounded down 
    }
    
    function getSeconds(totalSeconds){
     let seconds = totalSeconds % 60; // Gets remainder after division
     return (seconds < 10 ? "0" + seconds : seconds) // Inserts "0" if needed
    }
    
    
    // Defines functions that manipulate the countdown
    function start(){
      totalSeconds = 0.25 * 60; // Sets initial value of totalSeconds based on user input
      counterDiv.innerHTML = getMinutes(totalSeconds) + ":" + getSeconds(totalSeconds); // Initializes display
      //disable(minutesInput);  // Toggles buttons
      disable(startButton);
      runTimer();
    }
    
    function runTimer(){
      // Is the main timer function, calls `tick` every 1000 milliseconds
      timer = setInterval(tick, 1000);
    }
    
    function tick(){
      //console.log(totalSeconds);
       if (totalSeconds == 1){
         totalSeconds--; // Decreases total seconds by one
        counterDiv.innerHTML = getMinutes(totalSeconds) + ":" + getSeconds(totalSeconds); // Updates display
        alert("END TIME!!");
         
         
        }
      else if(totalSeconds > 0){
        totalSeconds--; // Decreases total seconds by one
        counterDiv.innerHTML = getMinutes(totalSeconds) + ":" + getSeconds(totalSeconds); // Updates display
        
      }
     
      else{
        // The timer has reached zero. Let the user start again. 
         enable(startButton);
        document.getElementById("cycling_roll").style.zIndex = `-10`
        
      }
    }
    
    
    // Defines functions to disable and re-enable HTML elements
    function disable(element){ element.setAttribute("disabled",""); }
    function enable(element){ element.removeAttribute("disabled"); }