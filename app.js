const inputColor = document.getElementById('inputColor');
const btnVisualizar = document.getElementById('btnVisualizar');
const hexa = document.getElementById('hexa');
const cardColor = document.getElementById('cardColor');

//se le agrega la funcionalidad al botón:
btnVisualizar.addEventListener('click', ()=> {
    hexa.textContent = inputColor.value; //toma el valor de input color y lo pone en el texto
    cardColor.style.backgroundColor = inputColor.value; //toma el valor del input y lo pone en el background-Color

});