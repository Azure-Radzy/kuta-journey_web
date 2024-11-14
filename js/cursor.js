// CIRCLE ANIMATION START
console.clear();

const circleElement = document.querySelector('.circle');
const mouse = { x: 0, y: 0 }; 
const previousMouse = { x: 0, y: 0 } 
const circle = { x: 0, y: 0 }; 


let currentScale = 0;
let currentAngle = 0; 

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

const speed = 0.17;

const tick = () => {

  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;

  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;

  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;

  const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150); 
  const scaleValue = (mouseVelocity / 150) * 0.5;
  currentScale += (scaleValue - currentScale) * speed;
  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;

  if (mouseVelocity > 20) {
    currentAngle = angle;
  }

  const rotateTransform = `rotate(${currentAngle}deg)`;

  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  window.requestAnimationFrame(tick);
}

tick();
// CIRCLE ANIMATION END

// CURSOR ANIMATION START
(function   (){
  const link = document.querySelectorAll('.hover');
  const cursor = document.querySelector('.cursor');
  
  const animateit = function (e){
    const span = this.querySelector('span');
    const {offsetX: x, offsetY: y} = e,
    { offsetWidth: width, offsetHeight: height} = this,
    
    move = 25,
    xMove = x / width * (move * 2) - move,
    yMove = y / height * (move * 2) - move;
    
      span.style.transform = `translate(${xMove}px, ${yMove}px)`;
      
      if (e.type === 'mouseleave') span.style.transform = '';
    };

    const editCursor = e => {
      const {clientX: x, clientY: y} = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
  };
  
  link.forEach(b => b.addEventListener('mousemove', animateit));
  link.forEach(b => b.addEventListener('mouseleave', animateit));
  window.addEventListener('mousemove', editCursor);
  
})();
// CURSOR ANIMATION END