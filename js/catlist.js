// Display Catagories Name Item 

const loadCatList = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => loadCatListItem(data.data.news_category));
        
}


const loadCatListItem = catlist => {
    const newsContainer = document.getElementById('all-menu-item');
    catlist.forEach(news => {
        // console.log(news.category_id);
        const li = document.createElement('li');
        li.innerHTML = `
            <button class="border-0 text-secondary py-2 my-2" href="" onclick="loadAllNews('${news.category_id}')" >${news.category_name}</button>
        `;
        newsContainer.appendChild(li);
    });
    
}



loadAllNews();

loadCatList();