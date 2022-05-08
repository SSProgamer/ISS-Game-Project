bedroom = document.getElementsByClassName("room")[0]
gym = document.getElementsByClassName("room")[1]
cafetaria = document.getElementsByClassName("room")[2]
lab = document.getElementsByClassName("room")[3]
cycling = document.getElementsByClassName("minigame")[0]
breakfast = document.getElementsByClassName("minigame")[1]
lunch = document.getElementsByClassName("minigame")[2]
dinner = document.getElementsByClassName("minigame")[3]
robot = document.getElementsByClassName("minigame")[4]
plant = document.getElementsByClassName("minigame")[5]

message1 = [
  "สวัสดีครับ",
  "ท่านสมาชิก"
]
idx = 0
// var allstar = 0
var allstar1={
  x:0
  };

function addstar(star){
  allstar1.x = allstar1.x + star;
  document.getElementById("showallstar").innerHTML = `Total Star : ${allstar1.x}`;
}


function delbut(idbut) {
  const element = document.getElementById(idbut);
  element.remove();
}

function addstardin(){
  for (let i = 0; i < 3; i++) {
    var img = document.createElement("img");
    img.src = "images\\Star.png";
    var src = document.getElementById("dinnerstar");
    src.appendChild(img);
  }
}

//taco
tacoimg = {
  "Tomato": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/taco/tomato.png",
  "Lettuce": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/taco/lettuce.png",
  "Shallot": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/taco/shallot.png",
  "Pork": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/taco/pork.png",
  "Chicken": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/taco/chicken.png",
  "Beef": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/taco/beef.png",
  "Ketchup": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/taco/ketchup.png",
  "Mustard": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/taco/mustard.png",
}

var wantvegetable = ""
var wantmeat = ""
var wnatsauce = ""

function tacoRandom(){
  ranvegetable = Math.floor(Math.random() * 3);
  ranmeat = Math.floor(Math.random() * 3);
  ransauce = Math.floor(Math.random() * 2);
  switch (ranvegetable) {
    case 0:
      wantvegetable = "Tomato";
      break;
    case 1:
      wantvegetable = "Lettuce";
      break;
    case 2:
      wantvegetable = "Shallot";
      break;
  }
  switch (ranmeat) {
    case 0:
      wantmeat = "Pork";
      break;
    case 1:
      wantmeat = "Chicken";
      break;
    case 2:
      wantmeat = "Beef";
      break;
  }
  switch (ransauce) {
    case 0:
      wantsauce = "Ketchup";
      break;
    case 1:
      wantsauce = "Mustard";
      break;
  }
  document.getElementById("showwanttaco").innerHTML = `<h1>เราต้องการ ${wantvegetable}, ${wantmeat}, and ${wantsauce} Taco!!</h1>`;
}

function tacoChange(name) {
  document.getElementById("showtaco").innerHTML = name;
  if (name == "Tomato" || name == "Lettuce" || name == "Shallot"){
    document.getElementById("vegetable").src = tacoimg[name];
    document.getElementById("vegetable").name = name;
  }else if (name == "Pork" || name == "Chicken" || name == "Beef"){
    document.getElementById("meat").src = tacoimg[name];
    document.getElementById("meat").name = name;
  }else{
    document.getElementById("sauce").src = tacoimg[name];
    document.getElementById("sauce").name = name;
  }
}

function serveTaco(){
  vegetable = document.getElementById("vegetable").name
  meat = document.getElementById("meat").name
  sauce = document.getElementById("sauce").name
  
  if ( (vegetable == wantvegetable && meat == wantmeat) || (meat == wantmeat && sauce == wantsauce) || (vegetable == wantvegetable && sauce == wantsauce) ){
    addstar(2);
    for (let i = 0; i < 2; i++) {
      var img = document.createElement("img");
      img.src = "images\\Star.png";
      var src = document.getElementById("startaco");
      src.appendChild(img);
    }
  }
  else if ( vegetable == wantvegetable || meat == wantmeat || sauce == wantsauce ){
    addstar(1);
    var img = document.createElement("img");
    img.src = "images\\Star.png";
    var src = document.getElementById("startaco");
    src.appendChild(img);
  }
  if ( vegetable == wantvegetable && meat == wantmeat && sauce == wantsauce ){
    addstar(1);
  document.getElementById("showtaco").innerHTML = `<h2>ใช่! นั้นแหละทาโก้ที่เราต้องการ ( ͡° ͜ʖ ͡°)<h2>`;
  var img = document.createElement("img");
  img.src = "images\\Star.png";
  var src = document.getElementById("startaco");
  src.appendChild(img);
  // document.getElementById("startaco").innerHTML = `Star : 3`;
  }
  else{
    document.getElementById("showtaco").innerHTML = `<h2>ไม่ใช่ทาโก้แบบนั้นสิ!!!<h2>`;
  }
}
//taco


// ประกอบหุ่นยนต์

ro = 0; // เพิ่มตัวเลขเพื่อตำแหน่งที่แสดง
var wantpart_1 = "robot_part_1"
var wantpart_2 = "robot_part_2"
var wantpart_3 = "robot_part_3"
var wantpart_4 = "robot_part_4"
var wantpart_5 = "robot_part_5"
function robotChange(name) {
  name_robot = ("robot_hand_"+ro);// เพิ่มตัวเลขและตำแหน่งที่แสดงจะเปลี่ยน
  ro++;
  if(ro > 5){
    ro = 5;
  }
  if(ro == 0){
    document.getElementById("showrobot").innerHTML = "หัวหุ่น ISS";
  }
  else if(ro == 1){
    document.getElementById("showrobot").innerHTML = "แขนขวาของหุ่น ISS";
  }
  else if(ro == 2){
    document.getElementById("showrobot").innerHTML = "แขนซ้ายของหุ่น ISS";
  }
  else if(ro == 3){
    document.getElementById("showrobot").innerHTML = "ลำตัวของหุ่น ISS";
  }
  else if(ro == 4){
    document.getElementById("showrobot").innerHTML = "ขาของหุ่น ISS";
  }
  if (name == "robot_part_1" || name == "robot_part_2" || name == "robot_part_3"){
    document.getElementById(name_robot).src = robotcoimg[name];
    document.getElementById(name_robot).name = name;
  }else if (name == "robot_part_4" || name == "robot_part_5" || name == "robot_part_6"){
    document.getElementById(name_robot).src = robotcoimg[name];
    document.getElementById(name_robot).name = name;
  }else{
    document.getElementById(name_robot).src = robotcoimg[name];
    document.getElementById(name_robot).name = name;
  }
}
robotcoimg = {
  "robot_part_1": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/robot/robot_part_1.png",
  "robot_fakepart_2": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/robot/fakepart_2.png",
  "robot_fakepart_4": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/robot/fakepart_4.png",
  "robot_part_3": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/robot/robot_part_4.png",
  "robot_part_4": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/robot/robot_part_3.png",
  "robot_fakepart_1": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/robot/fakepart_1.png",
  "robot_part_5": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/robot/robot_part_5.png",
  "robot_fakepart_5": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/robot/fakepart_5.png",
  "robot_part_2": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/robot/robot_part_2.png",
  "robot_fakepart_3": "https://raw.githubusercontent.com/SSProgamer/ISS-Game-Project/main/images/robot/fakepart_3.png",
}
function serverobot(){
  check_robot_1 = document.getElementById("robot_hand_0").name;
  check_robot_2 = document.getElementById("robot_hand_1").name;
  check_robot_3 = document.getElementById("robot_hand_2").name;
  check_robot_4 = document.getElementById("robot_hand_3").name;
  check_robot_5 = document.getElementById("robot_hand_4").name;
  console.log(check_robot_1);
  console.log(check_robot_2);
  console.log(check_robot_3);
  console.log(check_robot_4);
  console.log(check_robot_5);
  
  if ( check_robot_1 == wantpart_1 && check_robot_2 == wantpart_2 && check_robot_3 == wantpart_3 && check_robot_4 == wantpart_4 && check_robot_5 == wantpart_5){
    addstar(3);
  document.getElementById("showrobotsum").innerHTML = `<h2>This perfect ISS robot<h2>`;
  for (let i = 0; i < 3; i++) {
      var img = document.createElement("img");
      img.src = "images\\Star.png";
      var src = document.getElementById("starrobot");
      src.appendChild(img);
    }
  // document.getElementById("startaco").innerHTML = `Star : 3`;
  }
    else if ( (check_robot_1 == wantpart_1 && check_robot_2 == wantpart_2 && check_robot_3 == wantpart_3) || (check_robot_1 == wantpart_1 && check_robot_2 == wantpart_2 && check_robot_4 == wantpart_4) || (check_robot_1 == wantpart_1 && check_robot_2 == wantpart_2 && check_robot_5 == wantpart_5) || (check_robot_2 == wantpart_2 && check_robot_3 == wantpart_3 && check_robot_4 == wantpart_4) || (check_robot_2 == wantpart_2 && check_robot_3 == wantpart_3 && check_robot_5 == wantpart_5)|| (check_robot_3 == wantpart_3 && check_robot_4 == wantpart_4 && check_robot_5 == wantpart_5)){
      addstar(2);
      document.getElementById("showrobotsum").innerHTML = `<h2>This like ISS robot<h2>`;
    for (let i = 0; i < 2; i++) {
      var img = document.createElement("img");
      img.src = "images\\Star.png";
      var src = document.getElementById("starrobot");
      src.appendChild(img);
    }
    
  }
  else if ( check_robot_1 == wantpart_1 || check_robot_2 == wantpart_2 || check_robot_3 == wantpart_3 || check_robot_4 == wantpart_4|| check_robot_5 == wantpart_5){
    addstar(1);
    document.getElementById("showrobotsum").innerHTML = `<h2>This same like ISS robot<h2>`;
    var img = document.createElement("img");
    img.src = "images\\Star.png";
    var src = document.getElementById("starrobot");
    src.appendChild(img);
  }
  
  else{
    document.getElementById("showrobotsum").innerHTML = `<h2>No, this is not ISS robot<h2>`;
  }
}

// ประกอบหุ่นยนต์

function closebox() {
  var x = document.getElementById("messagebox");
  if (idx < message1.length) {
    document.getElementById("message").innerText = `${message1[idx]}`;
    idx += 1;
  }else{
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
}

// ประกอบหุ่นยนต์
function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}
// 
// ประกอบหุ่นยนต์

dinnerstar = 3
function decstar(){
  console.log("Collide!");
  if (dinnerstar > 1){
    dinnerstar -= 1
    document.getElementById("dinnerstar").innerHTML = "";
    for (let i = 0; i < dinnerstar; i++) {
      var img = document.createElement("img");
      img.src = "images\\Star.png";
      var src = document.getElementById("dinnerstar");
      src.appendChild(img);
    }
  }else{
    dinnerstar = 0
    document.getElementById("dinnerstar").innerHTML = ``;
  }
}

// //reset
// const reloadtButton = document.querySelector("#reload");
// // Reload everything:
// function reload() {
//     reload = location.reload();
// }
// // Event listeners for reload
// reloadButton.addEventListener("click", reload, false);

function fun(){  
   document.getElementByClass("minigame lunch").reset();  
 }

// simon
var game={ 
	level: 1, 
	turn: 0, 
  score: 0,
	active: false, 
	handler: false, 
	shape: '.shape', 
	genSequence1: [[1],[1,3],[1,3,4],[1,3,4,4],[1,3,4,4,2],[1,3,4,4,2,1],[1,3,4,4,2,1,1]],
  genSequence: [],
	plaSequence: [],
	
	init: function(){				
		if(this.handler === false){		
			this.initPadHandler();		
		}
		this.newGame();			

	},

	initPadHandler: function(){

		that=this;

		$('.pad').on('mouseup',function(){

			if(that.active===true){

				var pad=parseInt($(this).data('pad'),10);
					
				that.flash($(this),1,300, pad);

				that.logPlayerSequence(pad);

			}
		});

		this.handler=true;

	},

	newGame: function(){			

		this.level=1;
		this.score=0;
		this.newLevel();
		this.displayLevel();
    this.displayScore();

	},

	newLevel: function(){
		
		this.genSequence.length=0;
		this.plaSequence.length=0;
		this.pos=0;
		this.turn=0;
		this.active=true;
		this.randomizePad(this.level); 
		this.displaySequence(); 

	},
	
	flash: function(element, times, speed, pad){ 

		var that = this;					

		if(times > 0){
			that.playSound(pad);				
			element.stop().animate({opacity: '1'}, {		
				duration: 50,
				complete: function(){
				element.stop().animate({opacity: '0.5'}, 200);
				}
			});											

		}

		if (times > 0) {									
			setTimeout(function () {
				that.flash(element, times, speed, pad);
			}, speed);
			times -= 1;						
		}
	},

	playSound: function(clip){				


		var sound= $('.sound'+clip)[0];
		sound.currentTime=0;				
		sound.play();					


	},

	randomizePad: function(passes){
    for(i=0;i<passes;i++){
			this.genSequence.push(this.genSequence1[passes][i]);
    }
	},

	logPlayerSequence: function(pad){		

		this.plaSequence.push(pad);
		this.checkSequence(pad);
		
	
	},

	checkSequence: function(pad){			

		that=this;

		if(pad !== this.genSequence[this.turn]){	
				
				this.incorrectSequence();

			}
    else{									
				this.turn++;					
			}
		if(this.turn === this.genSequence.length){
			this.level++;
			this.displayLevel();
			this.active=false;
      if(this.level === 3){
        this.score++;
        this.displayScore();
        addstar(1);
      }
      else if(this.level ===5){
        this.score++;
        this.displayScore();
        addstar(1);
      }
      else if(this.level === 7){
        this.score++;
        this.displayScore();
        this.incorrectSequence();
        addstar(1);
      }
      if(this.level !==7){
        setTimeout(function(){
				  that.newLevel();},1000);
        }
      }
    else{
      
    }
    if(pad == 1){
        document.getElementById("plantback").style.backgroundColor = "red";
      }
      else if(pad == 4){
        document.getElementById("plantback").style.backgroundColor = "yellow";
      }
    else if(pad == 3){
        document.getElementById("plantback").style.backgroundColor = "blue";
      }
    else if(pad == 2){
        document.getElementById("plantback").style.backgroundColor = "#59ff00";
      }
	},

	displaySequence: function(){				
		
		var that=this;

		$.each(this.genSequence, function(index, val) {		
			
			setTimeout(function(){
				
				that.flash($(that.shape+val),1,300,val);
			
			},500*index);		
		});
	},

	displayLevel: function(){						
		
		$('.level h2').text('Level: '+this.level);

	},
  displayScore: function(){
    
      document.getElementById("starplant").innerHTML = "";
      for (let i = 0; i < this.score; i++) {
        var img = document.createElement("img");
        img.src = "images\\Star.png";
        var src = document.getElementById("starplant");
        src.appendChild(img);
      }

	},

	incorrectSequence: function(){		

		var corPad = this.genSequence[this.turn],		
			
			that = this;
			this.active=false;
			this.displayLevel();

		setTimeout(function(){						
			that.flash($(that.shape+corPad),4,300,corPad);
		},500);
    // if (this.score === 1){
    //   $.getScript("script.js", function(){addstar(1);});
    // }
    // else if (this.score === 2){
    //   $.getScript("script.js", function(){addstar(2);});
    // }
    // else if (this.score ===3){
    //   $.getScript("script.js", function(){addstar(3);});
    // }
    // else{
    //   $.getScript("script.js", function(){addstar(0);});
    // }
    $('.level h2').text('Level: END');
		//$('.start').show();				
	

	}

};
$(document).ready(function(){							

	$('.start').on('mouseup', function(){			
		$(this).hide();
    setTimeout(function(){
      game.init();
    }, 500); 

	});


});
// ปุ่ม simon

// egg
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
      addstar(3);
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
      addstar(2);
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
      addstar(1);
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
// egg

// whell
; (function wheel($, d3, window, document, undefined) {

  var pluginName = "wheel",
    defaults = {
      min: 0,
      max: 1,
      step: 0.1
    };

  function Plugin(element, options) {
    this._defaults = defaults;
    this._name = pluginName;
    this.arc;
    this.deg = 0;
    this.oldvalue = 0;
    this.chenk = 0;
    this.element = element;
    this.handle = element.querySelector("#handle");
    this.progress = element.querySelector(".progress");
    this.options = $.extend({}, defaults, options);
    this.progressFill;
    this.rad = -Math.PI / 2;
    this.svg;
    this.value;
    


    this.init();
  }

  Plugin.prototype.startDrag = function(event) {
    var self = this;

    $(window).on("mousemove touchmove", function(event) {
      event.preventDefault();
      self.drag(event);
    }).on("mouseup touchend", function(event) {
      event.preventDefault();
      self.stopDrag(event);
    });
  };

  Plugin.prototype.drag = function(event) {
    var self = this;
    var $element = $(self.element);

    var pageX = event.pageX;
    var pageY = event.pageY;
    var touches = event.originalEvent.touches;

    // Touch device
    if (touches && touches.length === 1) {
      pageX = touches[0].pageX;
      pageY = touches[0].pageY;
    }

    var offset = $element.offset();

    var deltaX = pageX - (offset.left + $element.width() / 2);
    var deltaY = pageY - (offset.top + $element.height() / 2);

    self.rad = Math.atan2(deltaY, deltaX);
    self.deg = self.rad * (180 / Math.PI);

    // Convert radians to degrees relative to positive y-axis
    if (self.deg <= 0 && self.deg >= -90) {
      self.deg = 90 + self.deg;

    } else if (self.deg < -90) {
      self.deg = 270 + 180 + self.deg;
    }
    else {
      self.deg += 90;
    }
    this.update();
  };
  Plugin.prototype.stopDrag = function() {
    $(window).off("mousemove mouseup");
    this.update();
  };

  Plugin.prototype.keyDown = function(event) {
    var self = this;
    var step = self.options.step || 1;

    switch (event.keyCode) {
      case 38:
        self.deg += step;
        if (self.deg > 360) {
          self.deg -= 360;

        }
        break;
      case 40:
        self.deg -= step;
        if (self.deg < 0) {
          self.deg += 360;

        }
        break;
      default:
        break;
    }

    // Convert degrees to radians relative to positive x-axis
    if (self.deg >= 0 && self.deg <= 270) {
      self.rad = (self.deg - 90) * (Math.PI / 180);

    } else {
      self.rad = (self.deg - 360 - 90) * (Math.PI / 180);

    }

    self.update();
  };
var chenk_sro1 = 1;
var chenk_sro2 = 1;
var chenk_sro3 = 1;
  Plugin.prototype.update = function() {

    var self = this;
    var $element = $(self.element);
    var $handle = $(self.handle);
    var progress = self.deg / 360;
    var radius = $element.width() / 2 - $handle.width() / 2;

    var left = Math.cos(self.rad) * radius + $element.width() / 2;
    var top = Math.sin(self.rad) * radius + $element.height() / 2;

    $handle.css({
      left: left,
      top: top
    });

    //deg text center
    self.value = ((self.options.max - self.options.min) / 360 * self.deg);

    if (180 >= self.value && self.value >= 150) {
      self.chenk = 1;
    }
    if ((50 >= self.value || self.value >= 300) && self.chenk == 1) {
      self.oldvalue += 1;
      self.chenk = 0;
    }
    // แสดงค่ามีถึงจุดที่กำหนด
    if (self.oldvalue == 10 && chenk_sro1 == 1) {
      chenk_sro1 = 0;
      addstar(1);
      document.getElementById("cycling_star").innerHTML = "";
      var img = document.createElement("img");
      img.src = "images\\Star.png";
      var src = document.getElementById("cycling_star");
      src.appendChild(img);
    }
    else if (self.oldvalue == 25 && chenk_sro2 == 1) {
      //alert("Hello! I am an tum!");
      addstar(1);
      chenk_sro2 = 0;
      document.getElementById("cycling_star").innerHTML = "";
      for (let i = 0; i < 2; i++) {
        var img = document.createElement("img");
        img.src = "images\\Star.png";
        var src = document.getElementById("cycling_star");
        src.appendChild(img);
      }
    }
    else if (self.oldvalue == 40 && chenk_sro3 == 1) {
      //alert("Hello! I am an wow!");
      chenk_sro3 = 0;
      addstar(1);
      document.getElementById("cycling_star").innerHTML = "";
      for (let i = 0; i < 3; i++) {
        var img = document.createElement("img");
        img.src = "images\\Star.png";
        var src = document.getElementById("cycling_star");
        src.appendChild(img);
      }
        
    }

    if (typeof self.options.onChange === "function") {

      self.options.onChange(self.oldvalue);

    }

    // Draw progress bar
    //self.progressFill.attr("d", self.arc.endAngle(2 * Math.PI * progress));
  };

  Plugin.prototype.init = function() {
    // Place initialization logic here
    // You already have access to the DOM element and
    // the options via the instance, e.g. this.element 
    // and this.options
    var self = this;
    var $element = $(self.element);
    var $handle = $(self.handle);
    var width = $element.width();
    var height = $element.height();

    $handle.on("mousedown touchstart", function(event) {
      event.preventDefault();
      self.startDrag(event);
      $(this).focus();
    }).keydown(function(event) {
      event.preventDefault();
      self.keyDown(event);
    });

    self.arc = d3.svg.arc()
      .startAngle(0)
      .innerRadius(width / 2 - 20)
      .outerRadius(width / 2);

    self.svg = d3.select(this.progress)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    self.progressFill = self.svg.append("path")
      .attr("class", "progress-fill");

    self.update();
  };

  // A really lightweight plugin wrapper around the constructor, 
  // preventing against multiple instantiations
  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName,
          new Plugin(this, options));
      }
    });
  };

})(jQuery, d3, window, document);
$(function() {
  $(".wheel").wheel({
    min: 0,
    max: 360,
    step: 1,
    onChange: function(value) {
      $("#value_cycling").html(Math.round(value));
      ;
    }
  });
});

//wheel