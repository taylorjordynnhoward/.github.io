const para = document.queryselector('p');

para.addEventListener('click', updateName);

function updateName () {
  const name = prompt('Enter a new name');
  para.textContent = 'Player 1: ${name}'
}
