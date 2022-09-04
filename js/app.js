// Display Catagory News Details 
const loadAllNews = async id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayAllNews(data.data);
}

const displayAllNews = allNews => {
    // console.log(allNews);

    const totalItemContainer = document.getElementById('total-item');
    totalItemContainer.innerText = allNews.length ? allNews.length : 'No';


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
                                                    <p class="author-blog-date">${newsDetails.author.published_date ? newsDetails.author.published_date : 'No date Found'}</p>
                                                </div>
                                            </div>
                                            <div class="news-total-view">
                                                    <h3 class="author-name fw-bold"><i class="fa-regular fa-eye"></i> ${newsDetails.total_view ? newsDetails.total_view : 'No data Available'}</h3>
                                                    <p class="author-blog-date"></p>
                                            </div>
                                            <div class="">
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa-solid fa-arrow-right"></i></button>
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

    // stop spinner or loader
    toggleSpinner(false);
}

// Loader JS 
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none');
    }
}



