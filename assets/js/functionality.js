const btn = document.querySelector('#show');
const btnclose = document.querySelector('#hide');
const showMoreBtn = document.querySelector('#showmore');
const featuredSpeakersSect = document.querySelector('#dyna-bottom-section');

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

let featuredSpeakers = [
  {
    name : 'Yochai Benkler',
    description : 'Havard Professor at Havard Technical College of Education',
    notes : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image :  './images/speakers/speaker-1.png'
  },
  {
    name : 'Kamau Mwangi',
    description : 'SVCET Professor at SVCET Technical College of Education',
    notes : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image :  './images/speakers/speaker-2.png'
  },
  {
    name : 'Wachira Waruru',
    description : 'VIT Professor at VIT Technical College of Education',
    notes : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image :  './images/speakers/speaker-3.png'
  },
  {
    name : 'Robert Bonse',
    description : 'TUK Professor at TUK Technical College of Education',
    notes : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image :  './images/speakers/speaker-4.png'
  },
  {
    name : 'Kiplagat Kipchoge',
    description : 'UON Professor at UON Technical College of Education',
    notes : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image :  './images/speakers/speaker-5.png'
  },
  {
    name : 'Shreshta Nitu',
    description : 'KU Professor at KU Technical College of Education',
    notes : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    image :  './images/speakers/speaker-6.png'
  }
];

featuredSpeakers.forEach((item) => {
  const content = `<div class="col-md-6 top-feature">
                      <div class="top-feature-1">
                        <img src="${item.image}">
                      </div>
                      <div class="top-feature-2">
                        <h4>${item.name}</h4>
                        <h6><em>${item.description}</em></h6>
                        <hr>
                        <p>${item.notes}</p>
                      </div>
                    </div>`

        featuredSpeakersSect.innerHTML += content ;
});
