const AnalogClock = $container => {
  //div의 class, content를 받아 조건을 설정
  const createDiv = (className1, className2, textContent) => {
  let div = document.createElement("div");
  div.classList.add(className1, className2);
  div.innerText  = textContent;
  return div;
  }

  //analog-clock 가져 오기
  const $analog_clocks = document.querySelectorAll('.analog-clock');

  // 각각의 analog-clock 요소에 대해 시계 추가
  $analog_clocks.forEach(clock => {
  //시침, 분침, 초침 만들기
  const hour = createDiv("hand", "hour", "");
  const minute = createDiv("hand", "minute", "");
  const second = createDiv("hand", "second", "");

  clock.innerHTML = ''; // 기존 내용 초기화

  clock.append(hour, minute, second);

  //시간을 나타내는 선분 만들기
  for (let i = 1; i <= 12; i++) {
    let timeDiv = createDiv("time", `time${i}`, "|");
    clock.appendChild(timeDiv);
  }
});  
};

export default AnalogClock;

