//-----------------------------------------------Task 1--------------------------------------------------------------

document.querySelector(`.wrapper`).innerHTML = `
<div class="coordinates">
  <table class="cords">
     <tr><td></td><td></td><td></td><td></td><td  class="y"></td><td></td><td></td></tr>
     <tr><td></td><td></td><td></td><td></td><td  class="y"></td><td></td><td></td></tr>
     <tr><td></td><td></td><td></td><td></td><td  class="y"></td><td></td><td></td></tr>
     <tr><td></td><td></td><td></td><td></td><td  class="y"></td><td></td><td></td></tr>
     <tr><td></td><td></td><td></td><td></td><td  class="y"></td><td></td><td></td></tr>
     <tr><td></td><td></td><td></td><td></td><td  class="y"></td><td></td><td></td></tr>
     <tr><td></td><td></td><td></td><td></td><td  class="y"></td><td></td><td></td></tr>
     <tr><td class="x"></td><td class="x"></td><td class="x"></td><td class="x"></td><td class="x y xy">0</td><td class="x"></td><td class="x"></td></tr>
     <tr><td></td><td></td><td></td><td></td><td  class="y"></td><td></td><td></td></tr>
  </table>
  <div class="redPoint"></div>
</div>
`;

var circle = document.querySelector(".redPoint");

var xPos = 0;
var yPos = 0;
var angle = -5;

function animate() {
  xPos += 4.22;
  angle += .05;

  yPos = Math.round(90 * (Math.exp(angle) + Math.cos(Math.pow(angle,2))));

  circle.style.transform = `translate3d(${xPos}px, ${-yPos}px, 0)`;

  if (Math.abs(xPos) >= 580) {
    xPos = 0;
  }

  if (angle >= 2) {
    angle = -5;
    xPos = 0
  }

  requestAnimationFrame(animate);
}
animate();

//-----------------------------------------------Task 2--------------------------------------------------------------
