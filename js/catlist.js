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
            <button class="text-decoration-none text-secondary py-2" href="" onclick="loadAllNews('${news.category_id}')" >${news.category_name}</button>
        `;
        newsContainer.appendChild(li);
    });
}

const loadAllNews = async id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayAllNews(data.data);
}

const displayAllNews = allNews => {
    console.log(allNews);

    const totalItemContainer = document.getElementById('total-item');
    totalItemContainer.innerText = allNews.length;

    const newsContainer = document.getElementById('newsDetails');
    newsDetails.innerHTML = '';
    allNews.forEach(newsDetails => {
        // console.log(newsDetails.author.name);
        const newsItem = document.createElement("div");

        newsItem.innerHTML = `
        <div class="col-lg-12 col-md-12 col-12">
                        <div class="card mb-3">
                            <div class="row g-0 align-items-center">
                                <div class="col-md-4 col-sm-12 p-3">
                                    <img src="${newsDetails.image_url}" class="img-fluid w-100 rounded-start" alt="">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${newsDetails.title}</h5>
                                        <p class="card-text">${(newsDetails.details).slice(0, 600) + "..."}</p>
                                        <div class="card-meta d-flex justify-content-between">
                                            <div class="author-info d-flex">
                                                <div class="me-3"><img src="${newsDetails.author.img} class="rounded-circle img-fluid w-100" width ="50px" alt=""></div>
                                                

                                                <div class="author-details">
                                                    <h3 class="author-name">${newsDetails.author.name ? newsDetails.author.name : 'No data Available'}</h3>
                                                    <p class="author-blog-date">${newsDetails.author.published_date}</p>
                                                </div>
                                            </div>
                                            <div class="news-total-view">
                                                    <h3 class="author-name fw-bold"><i class="fa-regular fa-eye"></i> ${newsDetails.total_view ? newsDetails.total_view : 'No data Available'}</h3>
                                                    <p class="author-blog-date"></p>
                                            </div>
                                            <div class="">
                                                    <i class="fa-solid fa-arrow-right"></i>
                                            </div>

                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    `;
        newsContainer.appendChild(newsItem);

    });
}

loadAllNews();

loadCatList();
// loadAllNews();