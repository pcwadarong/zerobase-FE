/** 선택한 카테고리 변경 */
const changeCategory = (categoryId) => {
    // 여기에 카테고리 변경 시 수행할 동작 추가
    console.log(`Category changed to: ${categoryId}`);
    const categoryItems = document.querySelectorAll('.category-item');
  
    // active 클래스 삭제
    categoryItems.forEach((element) => {
      element.classList.remove('active');
    });
  
    // 해당 카테고리에 active 클래스 추가
    const selectedLi = document.getElementById(`${categoryId}`);
    if (selectedLi) {
      selectedLi.classList.add('active');
    }
  };

  export default changeCategory;