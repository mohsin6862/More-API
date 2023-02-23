const getQuote = ()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = (quote)=>{

    const quotes = document.getElementById('quote');
    console.log(quote)

    quotes.innerHTML = quote.quote;

}

getQuote();