const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/vijayimg1.png') {
      myImage.setAttribute('src','images/vijay2.png');
    } else {
      myImage.setAttribute('src','images/vijayimg1.png');
    }
}

