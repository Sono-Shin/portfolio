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

//stamp 이벤트
document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".event-section__inner--4");
    if (!section) return;

    const graphs = section.querySelectorAll(".guage");
    const stamps = section.querySelectorAll(".event-stamp__list");

    let onIndex = -1;
    for (let i = 0; i < graphs.length; i++) {
        if (graphs[i].classList.contains("on")) {
            onIndex = i;
            break;
        }
    }

    graphs.forEach(el => el.classList.remove("on"));

    if (onIndex >= 0) {
        let step = 0;
        const animate = () => {
            if (step <= onIndex) {
                graphs[step].classList.add("on");
                stamps[step].classList.add("on");
                step++;
                setTimeout(animate, 1500); 
            }
        };
        animate(); 
    }
});


//채널 이벤트
function checkcount() {
  const counter = document.getElementById('event-count');
  const stamps = document.querySelectorAll('.stamp-tv'); 

  let count = +counter.innerText.trim() + 1;
  counter.innerText = count;

  if (count === 5 && stamps[0]) {
    stamps[0].classList.add('on');
  }

  if (count === 10 && stamps[1]) {
    stamps[1].classList.add('on');
  }
}