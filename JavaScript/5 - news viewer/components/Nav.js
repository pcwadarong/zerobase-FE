import { state } from './index.js'

class Nav {
  constructor ($container){
    this.$container = $container;

    this.categories = [
      {id: "all", innerText: "전체보기"},
      {id: "business", innerText: "비즈니스"},
      {id: "entertainment", innerText: "엔터테인먼트"},
      {id: "health", innerText: "건강"},
      {id: "science", innerText: "과학"},
      {id: "sports", innerText: "스포츠"},
      {id: "technology", innerText: "기술"},
    ];

    this.render();
    this.bindEvents();
  }

  render() {
    this.$container.innerHTML = `
    <ul>${this.categories.map(({ id, innerText }) => `<li id = "${id}" class = "category-item ${state.category === id ? 'active' : ''}">${innerText}</li>`).join('')}</ul>`;
  }

  bindEvents (){
    this.$container.addEventListener('click', (event) => {
        const target = event.target;

        if (!target.matches('.category-item:not(.active)')) return;

        this.$container.querySelector('.active').classList.remove('active');
        target.classList.add('active');

        state.category = target.id;
    });
  }
}

export default Nav;