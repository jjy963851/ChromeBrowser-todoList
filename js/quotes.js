const quotes = [
{quote : "Never give up"},

{quote: "Today is the day Yesterday what you dreamed of"

},
{quote: "If you dont move, nothing will change"

},
{quote: "Doing one thing is better than doing nothing"

},
{quote: "if you only dreaming, it will be just dreaming"

},
{quote: "Slow is fine. just keep move on"

},
{quote: "If you worry alot, it tells you are doing well"


}
]

const quotesBring = document.querySelector("#quotes span:first-child");
const quotesSpan = document.querySelector("#span");
const length = quotes.length;
const todayQuotes = quotes[Math.floor(Math.random() * length)];

quotesBring.innerText = todayQuotes.quote;