let myTimerElement = document.getElementById('my-timer')

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

function myTimer(timeLimit = 10, addSecond = 1) {
  myTimerElement.second = (myTimerElement.second || 0) + addSecond;

  if (myTimerElement.second >= timeLimit) {
    clearInterval(myInterval);
  }

  myTimerElement.innerText = myTimerElement.second;
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

function createDivs() {
  const ClassName = "block";
  const fragment = document.createDocumentFragment();

  let allData = [
    { title: 'JS', color: 'red' },
    { title: 'Html', color: 'green' },
    { title: 'Css', color: 'yellow' },
    { title: 'React', color: 'pink' },
    { title: 'Angular', color: 'blue' },
    { title: 'Vue', color: 'purple' },
  ]

  for (let index = 1; index < allData.length; index++) {
    const { title, color } = allData[index];

    let el = document.createElement('div');

    el.classList.add(ClassName);

    el.setAttribute('title', title)
    el.setAttribute('bgColor', color)

    el.addEventListener('click', DivClick)

    fragment.appendChild(el);
  }

  document.body.appendChild(fragment);
}

function DivClick() {
  const title = this.getAttribute('title')
  const bgColor = this.getAttribute('bgColor')

  if (!title || !bgColor) return alert('Error!')

  const newColor = (bgColor === this.style.background) ? '' : bgColor;
  const newText = (title === this.innerText) ? '' : title;

  this.innerText = newText;
  this.style.background = newColor;
}

createDivs()

const myInterval = setInterval(myTimer, 1000);
