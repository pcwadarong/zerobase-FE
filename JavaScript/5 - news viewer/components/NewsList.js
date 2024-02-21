import { API_KEY } from '../config/api.js'
import { state, active } from "./index.js" 

class NewsList {
    constructor($container){
        this.$newsList  = $container.querySelector(".news-list");
        this.$scrollObserver = $container.querySelector(".scroll-observer")
        this.page = 1;

        this.currentCategory = null;
        this.totalNewsCount = 0;
        this.currentNewsCount = 0;

        this.intersectionObserver = this.createIntersectionObserver();

        this.render().then(() => {
            this.intersectionObserver.observe(this.$scrollObserver);
            active(this);
        })
    }

    createIntersectionObserver() {
        return new IntersectionObserver((entries) => {
            entries.forEach(({ target, isIntersecting }) => {
                if(!isIntersecting || target !== this.$scrollObserver) return;

                if (this.currentNewsCount !== 0 && this.totalNewsCount === this.currentNewsCount){
                    this.$scrollObserver.style.visibility = 'hidden';
                    return;
                }

                this.$scrollObserver.style.visibility = "visible";
                this.page += 1;
                this.render();
            })
        })
    }

    async render () {
        const isChangedCategory = this.currentCategory !== state.category;

        if ( isChangedCategory ) {
            this.page = 1;
            this.currentCategory = state.category;
        }

        const { totalResults, articles } = await this.fetchArticles(state.category, this.page);
        console.log("[fetch-articles]", { totalResults, articles });

        this.totalNewsCount = totalResults;
        const $articles = this.createArticleElements(articles);

        if (isChangedCategory) {
            this.$newsList.replaceChildren($articles);
            this.currentNewsCount = articles.length;
        } else {
            this.$newsList.appendChild($articles);
            this.currentNewsCount += articles.length;
        }

        console.log("[render]", { tatalnewsCount: this.totalNewsCount, currentNewsCount: this.currentNewsCount});
    }

    async fetchArticles (category, page) {
        const pageSize = 5;
        const apiKey = API_KEY[Math.floor(Math.random() * API_KEY.length)]; // 랜덤하게 apiKey 선택

        const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${category === 'all' ? '' : category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
        try {
          const { data } = await axios.get(url);
          return data;
        } catch (e) {
            console.error('Error fetching news data:', e);
            
        }
    }

    createArticleElements(articles) {
        const $template = document.createElement("template");
        $template.innerHTML = articles.map(
            ({ title, description, urlToImage, url}) => `
            <section class = 'news-item'>
              <div class = "thumbnail">
                <a href = "${url}" target="_blank" rel= "noopener noreferrer">
                  <img src="${urlToImage || 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='}" alt="thumbnail" />
               </a>
              </div>
              <div class= "contents">
                <h2>
                  <a href= "${url}" target="_blank" rel= "noopener noreferrer">${title}</a>
                </h2>
                <p>${description || ""}</p>
              </div>
            </section>`
        ).join("");

        return $template.content;
    }
} 

export default NewsList;