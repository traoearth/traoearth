let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc =  myImage.getAttribute('src');
    if(mySrc === 'images/yuuka.png') {
        myImage.setAttribute('src', 'images/icon.png');
    } else {
        myImage.setAttribute('src', 'images/yuuka.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('输入你的名字');
    if(!myName) {
        setUserName()
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = '优香太可爱了，' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '优香太可爱了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
}