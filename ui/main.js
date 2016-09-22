console.log('Loaded!');
//change text to add a new value entry
var element=document.getElementById('main-text');
element.innerHTML = 'Pappuch is a good girl';

//writing the code that will move the image when you click on it
var img= document.getElementById('imagemove');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,50)
};

//Counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
    
    
    //make a request to the counter end point
    
    //capture the response and store it in a variable
    
    //render the variable in the correct span
    counter = counter +1;
    var span = document.getElementById('count')
    span.innerHTML = counter.toString();
};