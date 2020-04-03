let scrollPosition = 0;
let down;
let isISISon = false;
let touchStart = 0;
let eyeBeingTracked = false;
const experienceStart = 1552435199;
const sections = document.querySelectorAll('section');
const shapes = document.querySelectorAll('.inside');
const isisNavToSelf = document.querySelector('.isisNavToSelf');
const isisNavToPortfol = document.querySelector('.isisNavToPortfol');
const scrollerToOffer = document.querySelector('.scroller-to-offer');
const scrollerToAbout = document.querySelector('.scroller-to-about');
const scrollerToPortfolio = document.querySelector('.scroller-to-portfolio');
const bluePositionNotifier = document.querySelectorAll('.bl-scroll-pointer');
const redPositionNotifier = document.querySelectorAll('.rd-scroll-pointer');
const counter = document.querySelector('.counter');
const sendContactForm = document.querySelector('.contact');

const cases = {
  0: ['год','года','лет'],
  1: ['месяц','месяца','месяцев'],
  2: ['день','дня','дней'],
  3: ['час','часа','часов'],
  4: ['минута','минуты','минут'],
  5: ['секунда','секунды','секунд']
}

const hexElDescription = {
  0: {
    0: [
      'Описание сути работы из портфолио',
      'Какие инструменты были использованы',
      'Ссылки на гитхаб и на сам сайтец'
    ],
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
  },
  1: {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
  },
  2: {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
  },
}

// should've put it to an external file for experience count
const countStamp = () => Math.floor(Date.now() / 1000) - experienceStart;

const decorateNumber = n => {
  const digits = Array.from((+n).toString());
  const view = [];

  for (let i = 1; digits.length; i++) view.unshift(i % 4 ? digits.pop() : ' ');

  return view.join('');
};

const figuresChecker = (el, last, teen, i) => {
  if (teen || +last === 0 || +last >= 5 && +last <= 9) {
    return ` ${el} ${cases[i][2]}`;
  } else if (+last >= 2 && +last <= 4) {
    return ` ${el} ${cases[i][1]}`;
  } else {
    return ` ${el} ${cases[i][0]}`;
  }
}
const padezh = (arr) => {
  let term = '';
  for (let i = 0; i < arr.length; i++) {
    let mt = arr[i] === 0;
    // making it string
    arr[i] = String(arr[i]);

    // creating chekers if it's teen
    let teen = arr[i].length === 2 && arr[i][0] === '1';
    
    if (!mt) term += figuresChecker(arr[i], arr[i].slice(-1), teen, i);
  }
  return term;
}
const countToHumanFormat = () => {
  let inYear = 31536000;
  let inMonth = 2628000;
  let inDay = 86400;
  let inHour = 3600;
  let averageDaysInMonth = 30.416666666667
  let years = Math.floor(countStamp() / inYear);
  let months = Math.floor(countStamp() / inMonth) % 12;
  let days = Math.floor((countStamp() / inDay) % averageDaysInMonth);
  let hours = Math.floor(countStamp() / inHour) % 24;
  let minutes = Math.floor(countStamp() / 60) % 60;
  let seconds = countStamp() % 60;

  return padezh([years, months, days, hours, minutes, seconds]);
}

const setCounter = () => {
  counter.innerHTML = decorateNumber(countStamp());
  counter.title = countToHumanFormat();
};
// end of experience count

// start of eye tracking
function mouseTracker(e) {
  const pupil = document.querySelector('.pupil');

  let xMover = e.clientX - (document.documentElement.clientWidth / 2);
  let yMover = e.clientY - (document.documentElement.clientHeight / 2);
  
  if (yMover > pupil.offsetWidth / 2) {
    yMover = pupil.offsetWidth / 2;
  } else if (yMover < -pupil.offsetWidth / 2) {
    yMover = -pupil.offsetWidth / 2;
  }
  
  if (xMover > pupil.offsetWidth) {
    xMover = pupil.offsetWidth;
  } else if (xMover < -pupil.offsetWidth) {
    xMover = -pupil.offsetWidth;
  }
  
  pupil.style.transform = `rotate(-45deg) translate(${xMover}px, ${yMover}px)`;
}
// end of eye tracking

// making scroll smoothely
const smoothScroll = (down) => {
  scrollTo(0, 0);
  if (down && scrollPosition < sections.length - 1) {
    scrollPosition++;
  } else if (!down && scrollPosition > 0) {
    scrollPosition--;
  } else {
    return;
  }

  for (let i = 0; i < sections.length; i++) sections[i].style.transform = `translateY(-${scrollPosition * 100}vh)`;
  for (let i = 0; i < shapes.length; i++) shapes[i].style.transform = `translateY(-${scrollPosition * 100 / 2}vh) rotate(30deg)`;

  for (let i = 0; i < bluePositionNotifier.length; i++) {
    bluePositionNotifier[i].style.transform = ``;
    redPositionNotifier[i].style.transform = ``;
  }

  bluePositionNotifier[scrollPosition].style.transform = `translateX(50%)`;
  redPositionNotifier[scrollPosition].style.transform = `translateX(-50%)`;

  if (scrollPosition === 1) setTimeout(() => document.querySelector('.made-with-css-wrapper').style.display = `flex`, 1200);
  if (scrollPosition === 2 && !eyeBeingTracked) {
    for (let i = 0; i < hex.length; i++) hex[i].style.display = `flex`;
    eyeBeingTracked = true;
    setTimeout(() => document.body.addEventListener('mousemove', mouseTracker), 3000);
  }
  
}

// scroll after click
const scrToOffer = () => {
  scrollPosition = 1;
  smoothScroll(false);
}
const scrToAbout = () => {
  scrollPosition = 0;
  smoothScroll(true);
}
const scrToPortfolio = () => {
  scrollPosition = 1;
  smoothScroll(true);
}

// individual scroll immersive system (ISIS)
const isis = ev => {
  document.removeEventListener('wheel', isis); // removing the listener, so it wont break while scrolling
  setTimeout(() => {
    document.addEventListener('wheel', isis);
  }, 1200); // returning the listener immediately after the scroll ends

  ev.deltaY > 0 ? down = true : down = false; // checking direction

  smoothScroll(down);
}

// touch-screen ISIS interface
const touchStartDefine = ev => touchStart = ev.touches[0].clientY;
const getDirectionTouch = ev => {
  let down = false;
  if (touchStart > ev.changedTouches[0].clientY) down = true;
  if (touchStart === ev.changedTouches[0].clientY) return;
  smoothScroll(down);
}

// checks the size to control ISIS
const resizeControl = () => {
  console.log(window.innerWidth);  // window.innerWidth showed incorrect witdh after resizing
  if (isISISon) {
    // absolute isis remove
    document.removeEventListener('wheel', isis);
    document.removeEventListener('touchstart', touchStartDefine);
    document.removeEventListener('touchend', getDirectionTouch);

    // buttoned isis remove
    isisNavToSelf.removeEventListener('click', scrToAbout);
    isisNavToPortfol.removeEventListener('click', scrToPortfolio);
    
    scrollerToOffer.removeEventListener('click', scrToOffer);
    scrollerToAbout.removeEventListener('click', scrToAbout);
    scrollerToPortfolio.removeEventListener('click', scrToPortfolio);

    isISISon = false;
  }
  
  if (document.documentElement.clientWidth > 991 && !isISISon) { // window.innerWidth showed incorrect witdh after resizing
    // absolute isis
    document.addEventListener('wheel', isis);
    document.addEventListener('touchstart', touchStartDefine);
    document.addEventListener('touchend', getDirectionTouch);

    // buttoned isis
    isisNavToSelf.addEventListener('click', scrToAbout);
    isisNavToPortfol.addEventListener('click', scrToPortfolio);
    
    scrollerToOffer.addEventListener('click', scrToOffer);
    scrollerToAbout.addEventListener('click', scrToAbout);
    scrollerToPortfolio.addEventListener('click', scrToPortfolio);

    isISISon = true;
    scrollTo(0, 0);
  } else {
    // getting rid of previous chages
    for (let i = 0; i < sections.length; i++) sections[i].style.transform = ``;
    for (let i = 0; i < shapes.length; i++) shapes[i].style.transform = ``;

    // apply suitable changes
    scrollTo(0, document.documentElement.clientHeight * scrollPosition);
  }
}

if (document.documentElement.clientWidth > 991) {
  // absolute isis
  document.addEventListener('wheel', isis);
  document.addEventListener('touchstart', touchStartDefine);
  document.addEventListener('touchend', getDirectionTouch);

  // buttoned isis
  isisNavToSelf.addEventListener('click', scrToAbout);
  isisNavToPortfol.addEventListener('click', scrToPortfolio);

  scrollerToOffer.addEventListener('click', scrToOffer);
  scrollerToAbout.addEventListener('click', scrToAbout);
  scrollerToPortfolio.addEventListener('click', scrToPortfolio);

  isISISon = true;
}
window.addEventListener('resize', resizeControl);

bluePositionNotifier[scrollPosition].style.transform = `translateX(50%)`;
redPositionNotifier[scrollPosition].style.transform = `translateX(-50%)`;

setInterval(setCounter, 1000);

sendContactForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  let name = ev.target[0].value;
  let phone = ev.target[1].value;
  console.log('Имя:', name);
  console.log('Телефон:', phone);
});

for (let i = 0; i < control.length; i++) control[i].addEventListener('click', switcher);
controlRight.addEventListener('click', switcherRight);
controlLeft.addEventListener('click', switcherLeft);
for (let i = 0; i < hex.length; i++) hex[i].addEventListener('click', () => {
  if (currentPage === 0 && i === 8) return;

  hex[i].style = `display: flex; transform: scale(2) translate(-75%, 0); z-index: 3`;

  let oldLayout = document.querySelector('.about-hex-layout');
  if (oldLayout) oldLayout.parentNode.removeChild(oldLayout);

  let aboutHexLayout = document.createElement('div');
  aboutHexLayout.className = 'about-hex-layout';

  let shadower = document.createElement('div');
  shadower.className = 'shadower';

  let closeSign = document.createElement('div');
  closeSign.className = 'close-sign';
  let p = document.createElement('p');
  p.innerHTML = '+';

  let fullDescriptionWrapper = document.createElement('div');
  fullDescriptionWrapper.className = 'full-description-wrapper';

  let fullDescriptionText = document.createElement('p');
  fullDescriptionText.className = 'full-description-text';
  fullDescriptionText.innerHTML = hexElDescription[currentPage][i][0];

  let fullDescriptionTools = document.createElement('div');
  fullDescriptionTools.className = 'full-description-tools';
  fullDescriptionTools.innerHTML = hexElDescription[currentPage][i][1];

  let fullDescriptionLinks = document.createElement('div');
  fullDescriptionLinks.className = 'full-description-links';
  fullDescriptionLinks.innerHTML = hexElDescription[currentPage][i][2];

  sections[2].append(aboutHexLayout);
  aboutHexLayout.append(shadower);
  aboutHexLayout.append(closeSign);
  closeSign.append(p);
  aboutHexLayout.append(fullDescriptionWrapper);
  fullDescriptionWrapper.append(fullDescriptionText);
  fullDescriptionWrapper.append(fullDescriptionTools);
  fullDescriptionWrapper.append(fullDescriptionLinks);

  closeSign.addEventListener('click', () => {
    hex[i].style = `display: flex; z-index: 3`;
    setTimeout(() => hex[i].style = `display: flex`, 500);
    aboutHexLayout.parentNode.removeChild(aboutHexLayout);
  });
});
