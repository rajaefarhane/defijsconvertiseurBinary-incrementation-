const convert = document.getElementById("convert");
var crypted = document.getElementById("crypted");

convert.addEventListener("click", function() {
let code = document.getElementById("msgToCode").value;
console.log(code);
let array = [];
for (var i = 0; i < code.length; i++) {
let test = code.charCodeAt(i);
console.log(test);
let binary = Number(test.toString(2));
array.push(binary);
crypted.innerHTML = array;
console.log(binary);
}
});
