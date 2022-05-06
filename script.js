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

//taco
tacoimg = {
  "Tomato": "images\\taco\\tomato.png",
  "Lettuce": "images\\taco\\lettuce.png",
  "Shallot": "images\\taco\\shallot.png",
  "Pork": "images\\taco\\pork.png",
  "Chicken": "images\\taco\\chicken.png",
  "Beef": "images\\taco\\beef.png",
  "Kethcup": "images\\taco\\ketchup.png",
  "Mustard": "images\\taco\\mustard.png",
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
      wantsauce = "Kethcup";
      break;
    case 1:
      wantsauce = "Mustard";
      break;
  }
  document.getElementById("showwanttaco").innerHTML = `<h2>We want ${wantvegetable}, ${wantmeat}, and ${wantsauce} Taco!!</h2>`;
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
    document.getElementById("startaco").innerHTML = `Star : 2`;
  }
  else if ( vegetable == wantvegetable || meat == wantmeat || sauce == wantsauce ){
    var img = document.createElement("img");
    img.src = "images\\Star.png";
    var src = document.getElementById("startaco");
    src.appendChild(img);
  }
  if ( vegetable == wantvegetable && meat == wantmeat && sauce == wantsauce ){
  document.getElementById("showtaco").innerHTML = `<h2>Yes, this is what we want.<h2>`;
  var img = document.createElement("img");
  img.src = "images\\Star3.png";
  var src = document.getElementById("startaco");
  src.appendChild(img);
  // document.getElementById("startaco").innerHTML = `Star : 3`;
  }
  else{
    document.getElementById("showtaco").innerHTML = `<h2>No, this is not our taco.<h2>`;
  }
}
//taco


// ประกอบหุ่นยนต์

ro = 0; // เพิ่มตัวเลขเพื่อตำแหน่งที่แสดง
function robotChange(name) {
  document.getElementById("showrobot").innerHTML = name;
  name_robot = ("robot_hand_"+ro);// เพิ่มตัวเลขและตำแหน่งที่แสดงจะเปลี่ยน
  ro++;
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
  "robot_part_1": "images\\taco\\tomato.png",
  "robot_part_2": "images\\taco\\lettuce.png",
  "robot_part_3": "images\\taco\\shallot.png",
  "robot_part_4": "images\\taco\\pork.png",
  "robot_part_5": "images\\taco\\chicken.png",
  "robot_part_6": "images\\taco\\beef.png",
  "robot_part_7": "images\\taco\\ketchup.png",
  "robot_part_8": "images\\taco\\mustard.png",
  "robot_part_9": "images\\taco\\ketchup.png",
  "robot_part_10": "images\\taco\\mustard.png",
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