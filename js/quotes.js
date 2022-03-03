const quotes = [
    {
        quote: "Speed is irrelevant if you are going in the wrong direction.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Desney",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "The world is a book and those who do not travel read only a page.",
        author: "Saint Augustine",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "To Travel is to Live.",
        author: "Hans Christian Andersen",
    },
];

const quote = document.querySelector("div#quote span:first-child");
const author = document.querySelector("div#quote span:last-child");

const todaysQuoteIndex = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[todaysQuoteIndex];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
