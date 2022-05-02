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

function tacoChange(varval) {
  var mysample = '';
  mysample = varval;
  if(mysample=='0'){
  document.getElementById("showtaco").innerHTML = "Tortilla";
  }
  else if(mysample=='1'){
  document.getElementById("showtaco").innerHTML = "Tomato";
  }
  else if(mysample=='2'){
  document.getElementById("showtaco").innerHTML = "Lettuce";
  }
  else if(mysample=='3'){
  document.getElementById("showtaco").innerHTML = "Onion";
  }
  else if(mysample=='4'){
  document.getElementById("showtaco").innerHTML = "Pork";
  }
  else if(mysample=='5'){
  document.getElementById("showtaco").innerHTML = "Chiken";
  }
  else if(mysample=='6'){
  document.getElementById("showtaco").innerHTML = "Ketshup";
  }
  else if(mysample=='7'){
  document.getElementById("showtaco").innerHTML = "Mustard";
  }
}

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


document.getElementById('change').onclick = changeColor;  
    var value = 0
function mDown_0(obj) {
    document.getElementById("name").innerHTML += 1;
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}

function mUp(obj) {
  obj.style.backgroundColor="#3498db";
  obj.innerHTML="Click Me";
}
function mDown_1(obj) {
    document.getElementById("name").innerHTML += 2;
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}
function mDown_2(obj) {
    document.getElementById("name").innerHTML += 3;
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}
function mDown_3(obj) {
    document.getElementById("name").innerHTML += 4;
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}
function mDown_4(obj) {
    document.getElementById("name").innerHTML += 5;
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}
function mDown_5(obj) {
    document.getElementById("name").innerHTML += 6;
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}
function mDown_6(obj) {
    document.getElementById("name").innerHTML += 7;
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}
function mDown_7(obj) {
    document.getElementById("name").innerHTML += 8;
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}
function mDown_8(obj) {
    document.getElementById("name").innerHTML += 9;
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
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
// ประกอบหุ่นยนต์