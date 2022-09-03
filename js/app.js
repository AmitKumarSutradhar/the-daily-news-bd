// Display Catagory News Details 
const loadAllNews = (newsId) =>{
    fetch('https://openapi.programming-hero.com/api/news/category/01')
    .then(res => res.json())
    .then(data => displayAllNews(data.data));

}

const displayAllNews = allNews => {
    console.log(allNews.length);

    const totalItemContainer = document.getElementById('total-item');
    totalItemContainer.innerText  = allNews.length;

    const newsContainer = document.getElementById('newsDetails');
    allNews.forEach(newsDetails => {
        // console.log(newsDetails.author.name);
        const newsItem = document.createElement("div");

        newsItem.innerHTML = `
        <div class="col-lg-12 col-md-12 col-12">
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-4 col-sm-12">
                                    <img src="${newsDetails.image_url}" class="img-fluid w-100 rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${newsDetails.title}</h5>
                                        <p class="card-text">${newsDetails.details}</p>
                                        <div class="card-meta d-flex">
                                            <div class="author-info">
                                                <div><img src="${newsDetails.author.img} class="img-fluid w-100 rounded-start" width ="50px" alt=""></div>
                                                
                                                <div class="author-details">
                                                    <h3 class="author-name">${newsDetails.author.name}</h3>
                                                    <p class="author-blog-date"></p>
                                                </div>
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



// Display Catagories Name Item 



