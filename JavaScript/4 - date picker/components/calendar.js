const Calendar = (date, currentMonth, currentYear, $input) => {
    const $month = document.querySelector(".year-month");
    const $dates = document.querySelector('.dates');
    const $calendar = document.querySelector('.calendar'); 

    // 캘린더 토글을 보이도록 hidden 클래스 삭제
    $calendar.classList.remove('hidden');
    // 클릭된 지점이 .calendar 영역 외부이면 hidden 클래스 추가
    document.addEventListener('click', (e) => {
        if (!$calendar.contains(e.target) && !$input.contains(e.target)) {
            $calendar.classList.add('hidden');
        }
    });

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

    // 날짜 뿌리는 함수
    const generateMonthDates = () => {
        $dates.innerHTML = '';

        // 이전 달의 날짜 표시
        const generatePrevMonthDates = () => {
            for (let i = firstDay; i > 0; i--) {
                const prevDate = new Date(currentYear, currentMonth, 0 - i + 1).getDate();
                createAndAppendDate(prevDate, 'prev-month');
            }
        };
    
        // 현재 달의 날짜 표시
        const generateCurrentMonthDates = () => {
            for (let i = 1; i <= lastDate; i++) {
                createAndAppendDate(i, 'current-month');
            }
        };
    
        // 다음 달의 날짜 표시
        const generateNextMonthDates = () => {
            for (let i = 1; i < 7 - lastDay; i++) {
                createAndAppendDate(i, 'next-month');
            }
        };
    
        // 특정 날짜와 클래스를 받아 Date 객체 생성 및 날짜 추가
        const createAndAppendDate = (date, className) => {
            const $dateDiv = document.createElement('div');
            $dateDiv.classList.add('date', className);
            $dateDiv.textContent = date;
            $dates.appendChild($dateDiv);
        };
    
        // 각 달의 날짜 생성 함수 호출
        generatePrevMonthDates();
        generateCurrentMonthDates();
        generateNextMonthDates();
    };
    
    // 함수 호출
    generateMonthDates();
}

export default Calendar;