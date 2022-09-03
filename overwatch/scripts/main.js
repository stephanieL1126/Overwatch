let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/bizhi1.img') {
      myImage.setAttribute('src', 'image/bizhi2.img');
    } else {
      myImage.setAttribute('src', 'image/bizhi1.img');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Choose your hero:');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'We need you，' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'We need you，' + storedName;
  }


myButton.onclick = function() {
    setUserName();
 }