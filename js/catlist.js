const loadCatList = (id) => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => loadCatListItem(data.data.news_category));
}


const loadCatListItem = catlist => {
    // console.log(catlist);
    // const modalTitle = document.getElementById('phoneDetailModalLabel');
    // modalTitle.innerText = phone.name;
    // const phoneDetails = document.getElementById('phone-details');
    // console.log(phone.mainFeatures.sensors[0]);
    // phoneDetails.innerHTML = `
    //     <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found'}</p>
    //     <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No Storage Information '}</p>
    //     <p>Others: ${phone.others ? phone.others.Bluetooth : 'No Bluetooth Information'}</p>
    //     <p>Sensor: ${phone.mainFeatures.sensors ? phone.mainFeatures.sensors[0] : 'no sensor'}</p>
    // `



    const newsContainer = document.getElementById('all-menu-item');
    catlist.forEach(news => {
        // console.log(news);
        const li = document.createElement('li');
        // li.classList.add('d-flex');
        // li.classList.add('flex-column');
        li.innerHTML = `
            <a class="text-decoration-none text-secondary py-5" href="" onclick="loadAllNews();">${news.category_name}</a>
        `;
        newsContainer.appendChild(li);
    });
}

// console.log("Hello from Catlist");
loadCatList();