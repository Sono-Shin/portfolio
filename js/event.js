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

    // .on 클래스를 한 번에 제거 (querySelectorAll로 바로 선택)
    section.querySelectorAll('.guage, .event-stamp__list').forEach(el => el.classList.remove("on"));

    // 이미 .on 이 붙은 첫 번째 위치 찾기 (간단한 for문 사용)
    let end = graphs.length;  // 기본적으로 마지막까지
    for (let i = 0; i < graphs.length; i++) {
        if (graphs[i].classList.contains("on")) {
            end = i;  // .on 이 있는 첫 번째 인덱스를 end에 저장
            break;  // 찾으면 더 이상 반복할 필요 없음
        }
    }

    // 순차 실행
    let step = 0;
    const animate = () => {
        if (step < graphs.length) {
            graphs[step].classList.add("on");
            stamps[step].classList.add("on");
            step++;
            setTimeout(animate, 3000);
        } 
    };

    const startAnimation = () => {
        step = 0; // step을 초기화하여 다시 처음부터 시작
        animate();
    };

    startAnimation(); // 최초 실행
});