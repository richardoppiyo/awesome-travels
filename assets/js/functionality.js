const btn = document.querySelector('#show');
const btnclose = document.querySelector('#hide');

// To open the menu bar
function display() {
  console.log(btn);
  document.getElementById('show').style.display = 'none';
  document.getElementById('hide').style.display = 'flex';
}

// To close the menu bar
function close() {
  document.getElementById('show').style.display = 'flex';
  document.getElementById('hide').style.display = 'none';
}

btn.addEventListener('click', display);
btnclose.addEventListener('click', close);
