let myDivChangeColor = document.getElementById('change-color')
myDivChangeColor.addEventListener('click', changeColor)

let changeColorArrayDiv = document.getElementById('change-color-array')
changeColorArrayDiv.addEventListener('click', changeColorArrayV1)

function changeColor() {
  var currentColor = this.style.background;

  var newColor = (currentColor !== 'yellow') ? 'yellow' : 'black';

  this.style.background = newColor;
}

function changeColorArrayV1() {
  // Define an array of colors to cycle through
  let colors = ['green', 'blue', 'red', 'pink'];

  if (typeof this.colorIndex !== 'undefined') {
    this.colorIndex = (this.colorIndex + 1) % colors.length;
  } else {
    this.colorIndex = 0;
  }

  this.style.background = colors[this.colorIndex];
}

function changeColorArrayV2(

) {
  /* 
    For using create a let with a name index
  */
  if (typeof index === 'undefined') {
    alert(`Error: Global variable 'index' is not defined! Create a 'index' or use changeColorArrayV1`);
  } else if (typeof index !== 'number') {
    alert(`Error: Global variable 'index' must be a number!`);
  } else {
    let colors = ['green', 'blue', 'red', 'pink'];
    index++;
    this.style.background = colors[index % colors.length];
  }
}


