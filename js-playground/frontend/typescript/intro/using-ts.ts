const button = document.querySelector("button")! as HTMLElement;
const input1 = document.querySelector("#num1")! as HTMLInputElement;
const input2 = document.querySelector("#num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return +num1 + +num2;
  }

  return num1 + num2;
}

button.addEventListener("click", () => {
  console.log(add(+input1.value, +input2.value));
});
