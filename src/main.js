const init = () => {
  let scrollPosition = 0;
  let down;
  let isISISon = false;
  let touchStart = 0;
  const sections = document.querySelectorAll('section');
  const shapes = document.querySelector('.model');
  const isisNavToSelf = document.querySelector('.isisNavToSelf');
  const isisNavToPortfol = document.querySelector('.isisNavToPortfol');
  const scrollerToOffer = document.querySelector('.scroller-to-offer');
  const scrollerToAbout = document.querySelector('.scroller-to-about');
  const scrollerToPortfolio = document.querySelector('.scroller-to-portfolio');
  const bluePositionNotifier = document.querySelectorAll('.bl-scroll-pointer');
  const redPositionNotifier = document.querySelectorAll('.rd-scroll-pointer');

  // making scroll smoothely
  const smoothScroll = (down) => {
    scrollTo(0, 0);
    if (down && scrollPosition < sections.length - 1) {
      scrollPosition++;
    } else if (!down && scrollPosition > 0) {
      scrollPosition--;
    }

    for (let i = 0; i < sections.length; i++) sections[i].style.transform = `translateY(-${scrollPosition * 100}vh)`;
    shapes.style.transform = `translateY(-${scrollPosition * 100 / 2}vh)`;

    for (let i = 0; i < bluePositionNotifier.length; i++) {
      bluePositionNotifier[i].style.transform = ``;
      redPositionNotifier[i].style.transform = ``;
    }

    bluePositionNotifier[scrollPosition].style.transform = `translateX(50%)`;
    redPositionNotifier[scrollPosition].style.transform = `translateX(-50%)`;
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
    let scrolled = window.pageYOffset;
    console.log(scrolled);

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
    
    if (window.innerWidth > 991 && !isISISon) {
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
      shapes.style.transform = ``;

      // apply suitable changes
      scrollTo(0, window.innerHeight * scrollPosition);
    }
  }
  
  if (window.innerWidth > 991) {
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
}

document.addEventListener('DOMContentLoaded', init);