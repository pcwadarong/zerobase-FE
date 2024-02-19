import generate from './generate.js'
import Visibility from './visibility.js';

/** calendar의 nav 부분을 구현하는 함수 */
const Calendar = (currentMonth, currentYear, $input) => {
    const $month = document.querySelector(".year-month");
    const $calendar = document.querySelector('.calendar');
    
    Visibility($calendar, $input);

    // 월을 문자열로 변환 후 이번 달 설정
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = months[currentMonth];

    // 년도와 월 문서에 삽입
    $month.innerHTML = `${month}<p>${currentYear}</p>`;

    // 달력 날짜부분을 구현하는 함수 호출
    generate(currentYear, currentMonth, $input, $calendar);
}

export default Calendar;