import Calendar from './calendar.js';

/** 현재 달로 초기화하여 표시 */
const initialize = ($input) => {
    const date = new Date();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    Calendar(currentMonth, currentYear, $input);
  };

  export default initialize;