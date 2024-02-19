import Calendar from './calendar.js';

const date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

/** 이전 달, 다음 달로 변경 */
const changeMonth = ($input, direction) => {
    if (direction === 'prev') {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
    } else if (direction === 'next') {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
    }
    Calendar(currentMonth, currentYear, $input);
};

export default changeMonth;