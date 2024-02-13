const tickTock = $container => {

//시침, 분침, 초침 각도 설정하기
  const hourHands = document.querySelectorAll('.hour');
  const minuteHands = document.querySelectorAll('.minute');
  const secondHands = document.querySelectorAll('.second');

  // 시침, 분침, 초침 각도 설정하기
  const setDate = () => {
    const now  = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hoursDeg = hours / 12 * 360;
    const minutesDeg = (minutes / 60) * 360;
    const secondsDeg = seconds / 60 * 360;

    // CSS에 --deg 변수 적용
    hourHands.forEach(hourHand => hourHand.style.setProperty('--deg', hoursDeg));
    minuteHands.forEach(minuteHand => minuteHand.style.setProperty('--deg', minutesDeg));
    secondHands.forEach(secondHand => secondHand.style.setProperty('--deg', secondsDeg));
  };

setDate();
setInterval (setDate, 1000);

}

export default tickTock;