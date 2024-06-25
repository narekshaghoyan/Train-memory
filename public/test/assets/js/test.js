let myDivChangeColor = document.getElementById('change-color')
if (myDivChangeColor) {
  myDivChangeColor.addEventListener('click', changeColor)
}

let changeColorArrayDiv = document.getElementById('change-color-array')
if (changeColorArrayDiv) {
  changeColorArrayDiv.addEventListener('click', changeColorArrayV2)
}

let myDivMyName = document.getElementById('my-name')
if (myDivMyName) {
  myDivMyName.addEventListener('click', hideNameV2)
}

function changeColor() {
  var currentColor = this.style.background;

  var newColor = (currentColor !== 'yellow') ? 'yellow' : 'black';

  this.style.background = newColor;
}

function changeColorArrayV2(
) {
  const colorsArray = ['green', 'blue', 'red', 'pink']
  if (typeof this.colorIndex !== 'undefined') {
    this.colorIndex = (this.colorIndex + 1) % colorsArray.length;
  } else {
    this.colorIndex = 0;
  }

  this.style.background = colorsArray[this.colorIndex];
}

function changeColorArrayV1() {
  /* 
    For using create a let with a name index
  */
  const colorsArray = ['green', 'blue', 'red', 'pink']
  if (typeof index === 'undefined') {
    alert(`Error: Global variable 'index' is not defined! Create a 'index' or use changeColorArrayV1`);
  } else if (typeof index !== 'number') {
    alert(`Error: Global variable 'index' must be a number!`);
  } else {
    index++;
    this.style.background = colorsArray[index % colors.length];
  }
}

function myTimer(
  time_limit = 10,
  add_second = 1
) {
  let myTimer = document.getElementById('my-timer')

  if (!myTimer.second) myTimer.second = 0

  if (myTimer.second >= time_limit - 1) clearInterval(myInterval)

  myTimer.innerText = myTimer.second += add_second
}

function hideName(
) {
  const MyName = 'Narek Shaghoyan'
  let NewContent;

  if (this.textContent && this.textContent == MyName) {
    NewContent = ''
  } else {
    NewContent = MyName
  }

  this.textContent = NewContent
}

function hideNameV2(
) {
  const MyName = 'Narek Shaghoyan'
  this.textContent = this.textContent == MyName ? '' : MyName
}

const myInterval = setInterval(myTimer, 1000);
