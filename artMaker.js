// Using window.onload in this way ensures that the HTML file is 
// fully loaded into the browser before our JavaScript executes. 
// This is crucial, because our div (the "canvas") might not exist if we do not wait.

window.onload = function(){
  let container = document.querySelector('#canvas');

  for(let i = 0; i < 400; i++) {
    let box = document.createElement('span');
    box.style.border = '1px solid black';
    box.style.height = '8px';
    box.style.width = '8px';

    container.appendChild(box);
  }
  document.body.appendChild(container);    

  let clickBox = document.querySelectorAll('span');
  
  for(let pixelBox of clickBox) {
  pixelBox.addEventListener('click', function(event) {
    pixelBox.style.backgroundColor = 'red'
  })
  }

}
  
