import Calendar from './calendar.js';
// import DatePicker from './date-picker.js';

const $input = document.querySelector('.datePicker');
const $prevBtn = document.querySelector(".go-prev");
const $nextBtn = document.querySelector(".go-next");

let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

const changeMonth = (direction) => {
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
    date = new Date(currentYear, currentMonth, 1);
    Calendar(date, currentMonth, currentYear, $input);
}

const initializeCalendar = () => {
    date = new Date();
    currentMonth = date.getMonth();
    currentYear = date.getFullYear();
    Calendar(date, currentMonth, currentYear, $input);
};

$input.addEventListener("click", () => initializeCalendar());
//window.addEventListener('DOMContentLoaded', () => Calendar(date, currentMonth, currentYear, $input));
$prevBtn.addEventListener("click", () => changeMonth('prev'));
$nextBtn.addEventListener("click", () => changeMonth('next'));
