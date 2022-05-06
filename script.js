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

function delbut(idbut) {
  const element = document.getElementById(idbut);
  element.remove();
}

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
    for (let i = 0; i < 2; i++) {
      var img = document.createElement("img");
      img.src = "images\\Star.png";
      var src = document.getElementById("startaco");
      src.appendChild(img);
    }
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
  img.src = "images\\Star.png";
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
    document.getElementById("showrobot").innerHTML = "ISS robot head";
  }
  else if(ro == 1){
    document.getElementById("showrobot").innerHTML = "ISS arm head left";
  }
  else if(ro == 2){
    document.getElementById("showrobot").innerHTML = "ISS arm head right";
  }
  else if(ro == 3){
    document.getElementById("showrobot").innerHTML = "ISS robot body";
  }
  else if(ro == 4){
    document.getElementById("showrobot").innerHTML = "ISS leg head right";
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
  "robot_part_1": "images\\robot\\robot_part_1.png",
  "robot_part_21": "images\\robot\\fakepart_2.png",
  "robot_part_31": "images\\robot\\fakepart_4.png",
  "robot_part_3": "images\\robot\\robot_part_4.png",
  "robot_part_4": "images\\robot\\robot_part_3.png",
  "robot_part_61": "images\\robot\\fakepart_1.png",
  "robot_part_5": "images\\robot\\robot_part_5.png",
  "robot_part_81": "images\\robot\\fakepart_5.png",
  "robot_part_2": "images\\robot\\robot_part_2.png",
  "robot_part_10": "images\\robot\\fakepart_3.png",
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
    document.getElementById("showrobotsum").innerHTML = `<h2>This same like ISS robot<h2>`;
    var img = document.createElement("img");
    img.src = "images\\Star.png";
    var src = document.getElementById("starrobot");
    src.appendChild(img);
  }
  else if ( check_robot_1 == wantpart_1 || check_robot_2 == wantpart_2 || check_robot_3 == wantpart_3 || check_robot_4 == wantpart_4|| check_robot_5 == wantpart_5){
    document.getElementById("showrobotsum").innerHTML = `<h2>This like ISS robot<h2>`;
    for (let i = 0; i < 2; i++) {
      var img = document.createElement("img");
      img.src = "images\\Star.png";
      var src = document.getElementById("starrobot");
      src.appendChild(img);
    }
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
    document.getElementById("dinnerstar").innerHTML = `Star: ${dinnerstar}`;
  }else{
    document.getElementById("dinnerstar").innerHTML = `YOU LOSE!`;
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