const loadCatList = (id) => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => loadCatListItem(data.data.news_category));
}


const loadCatListItem = catlist => {
    const newsContainer = document.getElementById('all-menu-item');
    catlist.forEach(news => {
        // console.log(news);
        const li = document.createElement('li');
        li.innerHTML = `
            <a class="text-decoration-none text-secondary py-5" href="" onclick="loadAllNews();">${news.category_name}</a>
        `;
        newsContainer.appendChild(li);
    });
}

loadCatList();