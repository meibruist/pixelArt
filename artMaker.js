// Using window.onload in this way ensures that the HTML file is 
// fully loaded into the browser before our JavaScript executes. 
// This is crucial, because our div (the "canvas") might not exist if we do not wait.

window.onload = function(){
  
  // create container for the pixel box
  let containerCanvas = document.querySelector('#canvas');

  for(let i = 0; i < 400; i++) {  // if i want more boxes / pixels, change it here
    let box = document.createElement('span');
    box.style.border = '1px solid black';
    box.style.height = '8px';
    box.style.width = '8px';

    containerCanvas.appendChild(box);
  }
  document.body.appendChild(containerCanvas);    

  // event listener for to change color to red
  let clickBox = document.querySelectorAll('span');  
  
  let currentColor = 'blue';

  for(let pixelBox of clickBox) {             // more flexible for loop so it doesn't matter the number of pixels
  pixelBox.addEventListener('click', function() {
    pixelBox.style.backgroundColor = currentColor
  })
  }

  // color pallet
  let containerPallet = document.querySelector('#pallet');
  let colorChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

  for(let color of colorChoices) {
    let boxPallet = document.createElement('span');
    boxPallet.style.border = '2px solid black';
    boxPallet.style.backgroundColor = color
    containerPallet.appendChild(boxPallet);
  }
 document.body.prepend(containerPallet);

// When a user clicks on one of these divs, you'll need to save that 
// spans color in a variable.


}
  
