const myBtn = document.getElementById("myBtn");
var result = document.getElementById("result");
myBtn.addEventListener("click", table);
function table(){

  if (Math.floor(Math.random()* 2) == 0) {
result.innerHTML ="Heads";
  } else {
result.innerHTML = "Tails";
  }
}
