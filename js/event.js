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

