// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 50;
// Setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas.
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
// create random x and y starting points on the canvas

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


// write a draw function
function draw({ key }) {
  // increment the hue
  hue += 1;
  console.log(hue);
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  console.log(key);
  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);