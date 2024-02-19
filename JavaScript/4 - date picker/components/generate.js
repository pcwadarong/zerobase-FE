import pickDate from './pickDate.js'

// 날짜 뿌리는 함수
const generate = (currentYear, currentMonth, firstDay, lastDate, lastDay, $input, $calendar) => {
    const $dates = document.querySelector('.dates');
    $dates.innerHTML = '';

    // 이전 달의 날짜 표시
    const prevMonth = () => {
        for (let i = firstDay; i > 0; i--) {
            const prevDate = new Date(currentYear, currentMonth, 0 - i + 1).getDate();
            createAndAppendDate(prevDate, 'prev-month');
        }
    };

    // 현재 달의 날짜 표시
    const currMonth = () => {
        for (let i = 1; i <= lastDate; i++) {
            createAndAppendDate(i, 'current-month');
        }
    };

    // 다음 달의 날짜 표시
    const nextMonth = () => {
        for (let i = 1; i < 7 - lastDay; i++) {
            createAndAppendDate(i, 'next-month');
        }
    };

    // 특정 날짜와 클래스를 받아 Date 객체 생성 및 날짜 추가
    const createAndAppendDate = (date, className) => {
        const $dateDiv = document.createElement('div');
        $dateDiv.classList.add('date', className);

        // 일요일일 경우 클래스 추가
        if (className === 'current-month' && (date + firstDay - 1) % 7 === 0){
            $dateDiv.classList.add('sunday');
            
        }

        // 오늘 날짜일 경우 클래스 추가
        const today = new Date();

        if (
            className === 'current-month' &&
            date === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
            ){
            $dateDiv.classList.add('today');
        }
        
        $dateDiv.addEventListener('click', () => {
            const selectedDate = new Date(currentYear, currentMonth, date);
            pickDate(selectedDate, $input, $calendar);
        });

        $dateDiv.textContent = date;
        $dates.appendChild($dateDiv);
    };

    // 각 달의 날짜 생성 함수 호출
    prevMonth();
    currMonth();
    nextMonth();
};

export default generate;