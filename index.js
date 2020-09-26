const api = "https://type.fit/api/quotes";
const quoteId = document.getElementById("quote");
const authorId = document.getElementById("author");
const button = document.getElementById("btn");
const tweetMe = document.getElementById("tweetMe");
let quote = "";
let auth = "";

const randomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

const quoteGenerator = async () => {
  const data = await fetch(api);
  const quotes = await data.json();
  const num = randomNumber(quotes.length);
  quote = quotes[num].text;
  quoteId.innerText = quote;
  auth = quotes[num].author !== null ? quotes[num].author : "Anonymous";
  authorId.innerText = `By- ${auth}`;
};

const tweet = () => {
  const tweetPost = `https://twitter.com/intent/tweet?text=${quote}, BY. ${auth}`;
  window.open(tweetPost);
};

button.addEventListener("click", quoteGenerator);
tweetMe.addEventListener("click", tweet);
quoteGenerator();
