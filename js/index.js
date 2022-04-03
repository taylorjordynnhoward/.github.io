
function button1Clicked()
{
  document.getElementById('button-1').classList.toggle('was-clicked');
}
function windowLoaded() {
console.log('linked ok!');
document.getElementById('button-1').addEventListener('click', button1Clicked);
}
first = prompt("Enter your first name")
 document.getElementById('firstname').innerHTML = first;

/*
mouseover
mouseleave
mousedown
mouseup
*/
window.onload = windowLoaded;
