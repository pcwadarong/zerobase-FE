import NavList from "./NavList.js";

/** navigation에 리스트를 추가하고, root에 추가 */
const Nav = ($root) => {
  const nav = document.createElement('nav');
  nav.className = 'category-list';
  nav.appendChild(NavList());
  $root.appendChild(nav);
};

export default Nav;