const init = () => {
  let scrollPosition = 0;
  let down;
  let isISISon = false;
  let touchStart = 0;
  const sections = document.querySelectorAll('section');
  const shapes = document.querySelector('.model');


  // making scroll smoothely
  const smoothScroll = (down) => {
    if (down && scrollPosition < sections.length - 1) {
      scrollPosition++;
    } else if (!down) {
      scrollPosition--;
    }

    for (let i = 0; i < sections.length; i++) sections[i].style.transform = `translateY(-${scrollPosition * 100}vh)`;
    document.querySelector('.model').style.transform = `translateY(-${scrollPosition * 100 / 2}vh)`;
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
    document.removeEventListener('touchend', getDirectionTouch);
    setTimeout(() => document.addEventListener('touchend', getDirectionTouch), 1200);
    let down = false;
    if (touchStart > ev.changedTouches[0].clientY) down = true;
    if (touchStart === ev.changedTouches[0].clientY) return;
    smoothScroll(down);
  }


  // checks the size to control ISIS
  const resizeControl = () => {
    console.log(window.innerWidth);

    if (isISISon) {
      document.removeEventListener('wheel', isis);
      document.removeEventListener('touchstart', touchStartDefine);
      document.removeEventListener('touchend', getDirectionTouch);
      isISISon = false;
    }
    
    if (window.innerWidth > 991 && !isISISon) {
      document.addEventListener('wheel', isis);
      document.addEventListener('touchstart', touchStartDefine);
      document.addEventListener('touchend', getDirectionTouch);
      isISISon = true;

      scrollPosition = Math.floor(window.pageYOffset / window.innerHeight);
      console.log(scrollPosition);

      // getting rid of previous chages
      scrollTo(0, 0);

      // apply suitable changes
      for (let i = 0; i < sections.length; i++) sections[i].style.transform = `translateY(-${scrollPosition * 100}vh)`;
      shapes.style.transform = `translateY(-${scrollPosition * 100 / 2}vh)`;
    } else {
      // getting rid of previous chages
      for (let i = 0; i < sections.length; i++) sections[i].style.transform = ``;
      shapes.style.transform = ``;

      // apply suitable changes
      scrollTo(0, window.innerHeight * scrollPosition);
    }

  }
  
  if (window.innerWidth > 991) {
    document.addEventListener('wheel', isis);
    document.addEventListener('touchstart', touchStartDefine);
    document.addEventListener('touchend', getDirectionTouch);
    isISISon = true;
  }
  window.addEventListener('resize', resizeControl);
}

document.addEventListener('DOMContentLoaded', init);