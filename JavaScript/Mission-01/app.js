const $body = document.querySelector('body');
const $toggle = document.querySelector(".toggle.bx.bx-right-arrow-circle");
const $nav = document.querySelector("nav");

// 초기 로드 시 로컬 스토리지에 저장된 상태 확인
const isOpened = window.localStorage.getItem('toggle') === 'opened';

// 초기 로드 시 클래스 설정
$nav.classList.toggle('active', isOpened);

const onClickButton = () => {
    // 클래스를 추가/제거하고 상태를 로컬 스토리지에 저장
    $nav.classList.toggle('active');
    const active = $nav.classList.contains('active');
    window.localStorage.setItem('toggle', active ? 'opened' : '');
}


const afterLoad = () => {
    // 로딩 후 보이게 전환
    $body.classList.add("visible");
    //console.log("DOM fully loaded and parsed");

    // 로딩 후 트랜지션 막는 클래스 삭제
    $body.classList.remove("preload");
}

$toggle.addEventListener("click", onClickButton);
//document.addEventListener("DOMContentLoaded", afterLoad); 가끔 새로고침보다 늦는 경우가 발생함.
window.addEventListener("load", afterLoad);