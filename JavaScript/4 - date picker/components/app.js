import initialize from './initialize.js';
import changeMonth from './changeMonth.js';

const $input = document.querySelector('.datePicker');
const $prevBtn = document.querySelector(".go-prev");
const $nextBtn = document.querySelector(".go-next");

const changeMonthHandler = () => changeMonth($input, 'prev');
const nextMonthHandler = () => changeMonth($input, 'next');

$input.addEventListener("click", () => initialize($input));
$prevBtn.addEventListener("click", changeMonthHandler);
$nextBtn.addEventListener("click", nextMonthHandler);