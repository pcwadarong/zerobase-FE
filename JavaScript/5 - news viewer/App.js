import Nav from "./components/Nav.js";
import NewsList from "./components/NewsList.js";
import { createDom } from "./components/functions.js";
import { createState } from './components/index.js';

const App = $container => {
    const category_list = createDom($container, 'nav', 'category-list');
    const container = createDom($container, 'div', 'news-list-container');
    const newsListContainer = createDom(container, 'article', 'news-list');
    const scroll_observer = createDom(container, 'div', 'scroll-observer')
    createDom(scroll_observer, 'img', '', {src : 'img/ball-triangle.svg', alt: 'Loading...'});

    createState({category : 'all'});

    new Nav(category_list);
    new NewsList(container);
}

App(document.getElementById('root'));