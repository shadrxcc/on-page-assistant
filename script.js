const assistant = document.getElementById("assistant");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

const timeline = gsap.timeline();

//initial position and transparency of the assistant
gsap.set(assistant, {
  x: 0,
  y: 600,
  opacity: 1,
  backgroundColor: "blue",
  width: "50px",
  height: "50px",
});

//event listeners for button interactions
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
    x: 0,
    y: window.innerHeight - assistant.offsetHeight,
    duration: 1,
  });
});

// function to show a message
function showMessage(message) {
  console.log(message);
}
