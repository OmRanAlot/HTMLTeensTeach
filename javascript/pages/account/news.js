let interestsArray = [
  "Tesla",
  "Microsoft",
  "Politics",
  "Sports",
  "shoes",
  "television",
  "watches",
  "space",
  "google",
  "hair",
  "twitch",
  "technology",
  "cars"
];
let mainDiv = document.querySelector(".mainContainer");

function createElement(photoUrl, url, title, source, author) {
  let newsTile = document.createElement("div");
  newsTile.id = "newsTile";
  let news_article = document.createElement("div");
  news_article.className = "news_article";

  let infoContainer = document.createElement("div");
  infoContainer.id = "infoContainer";
  let news_title = document.createElement("div");
  news_title.id = "news_title";
  let news_title_text = document.createElement("p");
  news_title_text.class = "news_title_text";
  news_title_text.innerHTML = title;
  news_title.appendChild(news_title_text);

  infoContainer.appendChild(news_title);

  let news_image = document.createElement("div");
  news_image.id = "news_image";
  let news_href = document.createElement("a");
  news_href.id = "news_href";
  news_href.href = url;
  let news_img = document.createElement("img");
  news_img.id = "news_img";
  news_img.src = photoUrl;
  news_href.appendChild(news_img);
  news_image.appendChild(news_href);

  let bottomContainer = document.createElement("div");
  bottomContainer.id = "bottomContainer";
  let news_author = document.createElement("div");
  news_author.id = "news_author";
  let authorP = document.createElement("p");
  authorP.innerHTML = "author: " + author;

  news_author.appendChild(authorP);
  bottomContainer.appendChild(news_author);

  let news_source = document.createElement("div");
  news_source.id = "news_source";
  let newsP = document.createElement("p");
  newsP.innerHTML = "source: " + source;

  news_source.appendChild(newsP);
  bottomContainer.appendChild(news_source);

  news_article.appendChild(infoContainer);
  news_article.appendChild(news_image);
  news_article.appendChild(bottomContainer);

  newsTile.appendChild(news_article);

  if (!news_img.src.includes("null")) {
    mainDiv.appendChild(newsTile);
  }
}

//Add function to loop through API gets and access all of the user's interests and put that into the interests array

let options = {
  method: "GET",
};
let getNews = (interest) => {
  let url =
    "https://newsapi.org/v2/top-headlines?q=" +
    interest +
    "&sortBy=publishedAt&language=en&apiKey=" +
    config.api_key_news;
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => loopNews(data));
};
function loopNews(jsonData) {
  for (let i = 0; i < jsonData.articles.length; i++) {
    generateNews(jsonData.articles[i]);
  }
}
function generateNews(article) {
  createElement(
    article.urlToImage,
    article.url,
    article.title,
    article.source.name,
    article.author
  );
}
function itInterests() {
  for (let i = 0; i < interestsArray.length; i++) {
    getNews(interestsArray[i]);
  }
}

itInterests();
