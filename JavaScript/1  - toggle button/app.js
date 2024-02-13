const $body = document.querySelector('body');
const $toggle = document.querySelector(".toggle.bx.bx-right-arrow-circle");
const $nav = document.querySelector("nav");

// 초기 로드 시 로컬 스토리지에 저장된 상태 확인
const isOpened = window.localStorage.getItem('toggle') === 'true';

// 초기 로드 시 클래스 설정
$nav.classList.toggle('active', isOpened);

// 버튼을 누르면 클래스를 추가/제거
const onClickButton = () => {
    $nav.classList.toggle('active');
}

//새로고침할 때 로컬 스토리지에 버튼 상태 저장
const saveState = () => {
    const active = $nav.classList.contains('active');
    window.localStorage.setItem('toggle', active);
}

const afterLoad = () => {
    // 로딩 후 보이게 전환
    $body.classList.add("visible");
    //console.log("DOM fully loaded and parsed");

    // 로딩 후 트랜지션 막는 클래스 삭제
    $body.classList.remove("preload");
}

$toggle.addEventListener("click", onClickButton);
window.addEventListener("beforeunload", saveState);
//document.addEventListener("DOMContentLoaded", afterLoad); 가끔 새로고침보다 늦어 트렌지션이 발생함. 왜지?
window.addEventListener("load", afterLoad);