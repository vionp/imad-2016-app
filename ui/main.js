console.log('Loaded!');
//change text to add a new value entry
var element=document.getElementById('main-text');
element.innerHTML = 'New value is added';

//writing the code that will move the image when you click on it
var img= document.getElementById('imagemove');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,100)
    img.style.marginLeft = '100px';
};