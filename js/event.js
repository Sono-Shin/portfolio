//navbar 이벤트
document.getElementById('navbar').onclick = e => {
  const button = e.target.closest('button');  
  const index = +button.dataset.target;
  if (index === 1) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const target = document.querySelector(`.event-section--${index}`);
    target && window.scrollTo({ top: target.offsetTop - 20, behavior: 'smooth' });
  }
};

//게이지 바 이벤트
  const images = document.querySelectorAll(".guage");
  const onImage = document.querySelector(".guage.on");
  let current = 0;

  function animateGauge() {
    if (current > 0) {
      images[current - 1].style.display = "none";
    }
    if (current < images.length) {
      images[current].style.display = "block";
      current++;
      setTimeout(animateGauge, 300);
    } else {
      images.forEach(img => img.style.display = "none");
      if (onImage) {
        onImage.style.display = "block";
      }
      setTimeout(() => {
        current = 0; 
        animateGauge();
      }, 10000); 
    }
  }
  animateGauge();