const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
//Fuction is called when button clicked
const calculate = (btnValue) => {
display.focus();
//button clicked is =
if (btnValue === "=" && output !== "") {
output = eval(output.replace("%", "/100"));
}
//button pressed is AC

else if (btnValue === "AC") {
output = "";
}
//button pressed is DEL
else if (btnValue === "DEL") {
output = output.toString().slice(0, -1);
}
//button pressed is √
else if(btnValue ==="√"){
output = output**(1/2);
}
//button pressed is x2
else if (btnValue ==="x2"){
output = output*output;
}
else {
if (output === "" && specialChars.includes(btnValue)) return;
output += btnValue;
}
display.value = output;
};

buttons.forEach((button) => {
button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});