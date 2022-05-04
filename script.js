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

tacoimg = {
  "Tomato": "https://media.discordapp.net/attachments/956540195652661348/969254130856120420/tomato.png",
  "Lettuce": "https://media.discordapp.net/attachments/956540195652661348/969259559925477426/lettuce.png",
  "Onion": "https://media.discordapp.net/attachments/956540195652661348/969261842285334528/shallot.png",
  "Pork": "https://media.discordapp.net/attachments/956540195652661348/969267208641454120/meat.png",
  "Chicken": "https://media.discordapp.net/attachments/956540195652661348/969268504870129674/chicken.png",
  "Beef": "https://www.engdict.com/data/dict/media/images_public/cow-00085726_normal.png",
  "Kethcup": "https://media.discordapp.net/attachments/956540195652661348/969610737116925952/ketchup3.png?width=518&height=670",
  "Mustard": "https://media.discordapp.net/attachments/956540195652661348/969611440552026252/mastard.png?width=518&height=670",
}

function tacoChange(name) {
  // var mysample = '';
  // mysample = varval;
  // if(mysample=='0'){
  // document.getElementById("showtaco").innerHTML = "Tortilla";
  // }
  // else if(mysample=='1'){
  // document.getElementById("showtaco").innerHTML = "Tomato";
  // }
  // else if(mysample=='2'){
  // document.getElementById("showtaco").innerHTML = "Lettuce";
  // }
  // else if(mysample=='3'){
  // document.getElementById("showtaco").innerHTML = "Onion";
  // }
  // else if(mysample=='4'){
  // document.getElementById("showtaco").innerHTML = "Pork";
  // }
  // else if(mysample=='5'){
  // document.getElementById("showtaco").innerHTML = "Chiken";
  // }
  // else if(mysample=='6'){
  // document.getElementById("showtaco").innerHTML = "Ketshup";
  // }
  // else if(mysample=='7'){
  // document.getElementById("showtaco").innerHTML = "Mustard";
  // }
  document.getElementById("showtaco").innerHTML = name;
  if (name == "Tomato" || name == "Lettuce" || name == "Onion"){
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
  document.getElementById("showtaco").innerHTML = `<h2>This is ${vegetable}, ${meat}, and ${sauce} Taco!!</h2>`;
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