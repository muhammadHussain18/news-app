let loader = document.getElementById("loader")
let content = document.getElementById("content")
let callNews = (search, page) => {
    fetch(`https://api.worldnewsapi.com/search-news?api-key=682de8d5e3d344f485b5120e2c2ce008&text=${search}&offset=${page ? page : 0}&number=12`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            loader.style.display = "none"
            content.style.display = "block"

            const news = res.news
            for (var i = 0; i < news.length; i++) {
                const { image, title, text, publish_date } = news[i]
                let getNews = document.getElementById("news")
                
                getNews.innerHTML += `
        <div class="card mt-2" style="width: 18rem;">
                <img src="${image}" class="news-img card-img-top" >
                   <div class="card-body card-div">
                    <h5 class="card-title">${title.slice(0, 30)}...</h5>
                    <h6 class="card-title date">Date : ${publish_date.slice(0, 10)}</h6>

                    <p class="card-text text">${text.slice(0, 100)}...</p>
               </div>
            </div>  `


            }

        })
        .catch(err => console.log(err))
}

callNews()
let page = 0;

let searchBtn = () => {
    let search = document.getElementById("search")
    let getNews = document.getElementById("news")
    news.innerHTML = ""
    loader.style.display = "flex"
    content.style.display = "none"
    callNews(search.value)

}


let loadMore = () => {
    let search = document.getElementById("search")
    page++
    callNews(search.value, page)

}


let home = () => {
    let getNews = document.getElementById("news")
    news.innerHTML = ""
    loader.style.display = "flex"
    content.style.display = "none"
    callNews()
}

let pakistan = () => {
    let getNews = document.getElementById("news")
    news.innerHTML = ""
    loader.style.display = "flex"
    content.style.display = "none"
    callNews("pakistan")


}

let currency = () => {
    let getNews = document.getElementById("news")
    news.innerHTML = ""
    loader.style.display = "flex"
    content.style.display = "none"
    callNews("currency")

}

let sports = () => {
    let getNews = document.getElementById("news")
    news.innerHTML = ""
    loader.style.display = "flex"
    content.style.display = "none"
    callNews("sports")

}