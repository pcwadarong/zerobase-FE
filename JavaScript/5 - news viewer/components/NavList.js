import changeCategory from './changeCategory.js';

/** JSON 에서 nav 요소들을 불러오고 저장 */
const NavList = () => {
    const ul = document.createElement("ul");
  
    const categories = new XMLHttpRequest();
    categories.onreadystatechange = function () {
      if (categories.readyState === 4 && categories.status === 200) {
        const data = JSON.parse(categories.responseText);
  
        data.categories.forEach((category, i) => {
          const li = document.createElement("li");
  
          li.textContent = category.innerHTML;
          li.id = category.id;
          li.classList.add('category-item');
  
          if (i === 0) {
            li.classList.add('active');
          }

          ul.appendChild(li);

          li.addEventListener('click', () => {
            changeCategory(category.id);
          });
  
          
        });
      }
    };
    categories.open('GET', './components/NavList.JSON', true);
    categories.send();
  
    return ul; // return the created ul element
  };
  
  export default NavList;