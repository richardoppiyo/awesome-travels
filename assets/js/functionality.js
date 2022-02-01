const btn = document.querySelector('#show');
const btnclose = document.querySelector('#hide');
const showMoreBtn = document.querySelector('#showmore');

// To open the menu bar
function display() {
  document.getElementById('show').style.display = 'none';
  document.getElementById('hide').style.display = 'flex';
}

// To close the menu bar
function close() {
  document.getElementById('show').style.display = 'flex';
  document.getElementById('hide').style.display = 'none';
}

function toggle() {
  const button = document.getElementById('showmore');
  if (button.innerHTML === 'LESS') {
    button.innerHTML = 'MORE';
  } else {
    button.innerHTML = 'LESS';
  }
}

btn.addEventListener('click', display);
btnclose.addEventListener('click', close);
showMoreBtn.addEventListener('click', toggle);
