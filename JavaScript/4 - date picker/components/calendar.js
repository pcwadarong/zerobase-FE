import generate from './generate.js'
import Visibility from './visibility.js';

const Calendar = (currentMonth, currentYear, $input) => {
    const $month = document.querySelector(".year-month");
    const $calendar = document.querySelector('.calendar');

    Visibility($calendar, $input);

    // 월을 문자열로 변환
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = months[currentMonth];

    // 년도와 월 문서에 삽입
    $month.innerHTML = `${month}<p>${currentYear}</p>`;

    //현재 달의 첫 번재 요일 / 마지막 요일, 날짜
    let firstDay = new Date(currentYear, currentMonth, 1).getDay();
    let lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    let lastDay = new Date(currentYear, currentMonth + 1, 0).getDay();

    // 함수 호출
    generate(currentYear, currentMonth, firstDay, lastDate, lastDay, $input, $calendar);
}

export default Calendar;