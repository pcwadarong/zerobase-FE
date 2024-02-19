/** class의 visibility를 조절하는 함수 */
const Visibility = ($calendar, $input) => {
    // 캘린더 토글을 보이도록 hidden 클래스 삭제
    $calendar.classList.remove('hidden');
    // 클릭된 지점이 .calendar 영역 외부이면 hidden 클래스 추가
    document.addEventListener('click', (e) => {
        if (!$calendar.contains(e.target) && !$input.contains(e.target)) {
            $calendar.classList.add('hidden');
        }
    });
}

export default Visibility;