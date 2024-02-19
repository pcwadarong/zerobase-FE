import Calendar from './calendar.js';

const pickMonth = () => {
  let date = new Date();
  let currentMonth = date.getMonth();
  let currentYear = date.getFullYear();
  const $input = document.querySelector('.datePicker');

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
    Calendar(currentMonth, currentYear, $input);
  };

  const initialize = () => {
    date = new Date();
    currentMonth = date.getMonth();
    currentYear = date.getFullYear();
    Calendar(currentMonth, currentYear, $input);
  };

  $input.addEventListener("click", () => initialize());
  const $prevBtn = document.querySelector(".go-prev");
  const $nextBtn = document.querySelector(".go-next");

  $prevBtn.addEventListener("click", () => changeMonth('prev'));
  $nextBtn.addEventListener("click", () => changeMonth('next'));
};

export default pickMonth;