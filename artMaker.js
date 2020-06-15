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
  // To create a color pallet, we are going to push in a new div containing each 
  // color to our 'pallet' div. We'll then add a click event listener to each div 
  // in our pallet that will modify what color our canvasPixels will turn.

  let containerPallet = document.querySelector('#pallet');
  let colorChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

  for(let color of colorChoices) {
    // create new div
    let newColor = document.createElement('div');

    // CSS
    newColor.style.border = '2px solid black';
    newColor.style.backgroundColor = color;

    // add an event listener to our color
    // How can we know what color is selected?
    // I'll add a 'selected' div to display what color is currently selected

    newColor.addEventListener('click',function() {
      currentColor = 'color';
      let selected = document.querySelector('#current-color');
      selected.style.backgroundColor = color ; 
    })

    let pallet = document.querySelector('#pallet');
    pallet.appendChild(newColor);

    containerPallet.appendChild(newColor);
  }
 document.body.prepend(containerPallet);
}