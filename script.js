const assistant = document.getElementById("assistant");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const reset = document.getElementById("reset");

const timeline = gsap.timeline();

gsap.set(assistant, {
  x: 0,
  y: 600,
  opacity: 1,
  backgroundColor: "blue",
  width: "50px",
  height: "50px",
});

button1.addEventListener("click", () => {
  gsap.to(assistant, {
    x: button1.offsetLeft,
    y: button1.offsetTop + 20,
    duration: 1,
  });
  showMessage("You clicked Button 1.");
});

button2.addEventListener("click", () => {
  gsap.to(assistant, {
    x: button2.offsetLeft,
    y: button2.offsetTop + 20,
    duration: 1,
  });
  showMessage("You clicked Button 2.");
});

button3.addEventListener("click", () => {
  gsap.to(assistant, {
    x: button3.offsetLeft,
    y: button3.offsetTop + 20,
    duration: 1,
  });
  showMessage("You clicked Button 3.");
});

button4.addEventListener("click", () => {
  gsap.to(assistant, {
    x: button4.offsetLeft,
    y: button4.offsetTop + 20,
    duration: 1,
  });
  showMessage("You clicked Button 4.");
});

button5.addEventListener("click", () => {
  gsap.to(assistant, {
    x: button5.offsetLeft,
    y: button5.offsetTop + 20,
    duration: 1,
  });
  showMessage("You clicked Button 5.");
});

reset.addEventListener("click", () => {
  assistant.innerHTML = ''
  gsap.to(assistant, {
    x: 0,
    y: window.innerHeight - assistant.offsetHeight,
    duration: 1,
  });
});

function showMessage(message) {
  assistant.innerHTML = '';

  const messageElement = document.createElement("div");
  messageElement.textContent = message;

  messageElement.style.padding = "10px";
  messageElement.style.backgroundColor = "lightgray";
  messageElement.style.borderRadius = "5px";
  messageElement.style.marginTop = "10px";

  assistant.appendChild(messageElement);

  setTimeout(() => {
    assistant.removeChild(messageElement);
  }, 5000);
}

