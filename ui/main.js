console.log('Loaded!');
//change text to add a new value entry
var element=document.getElementById('main-text');
element.innerHTML = 'New value is added';

//writing the code that will move the image when you click on it
var img= document.getElementById('imagemove');
img.onclick = function() {
    var interval = setInterval(moveRight,200)
    img.style.marginLeft = '200px';
};