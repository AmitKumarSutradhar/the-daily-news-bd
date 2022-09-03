const loadAllProducts = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    // console.log(data);
    return data;
}


const setAllMenu = async () => {

    const data = await loadAllProducts();
    console.log(data);
    // const menu = document.getElementById("all-menu");

    // const uniqueArray = [];

    for (const news in data) {
        console.log(news.news_category.category_name)
    //     // console.log(uniqueArray.indexOf(product.category))

    //     if (uniqueArray.indexOf(product.category) === -1) {

    //         uniqueArray.push(product.category);

    //         const li = document.createElement("li");
    //         li.innerHTML = `<a>${product.category}</a>`;
    //         menu.appendChild(li);
    //     }
    }

    // console.log(uniqueArray)
}

setAllMenu();
// loadAllProducts();