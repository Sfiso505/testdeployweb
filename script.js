const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

async function getQuote() {
    quoteText.textContent = "Loading...";
    authorText.textContent = "";

    try {
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();
        quoteText.textContent = `"${data.content}"`;
        authorText.textContent = `— ${data.author}`;
    } catch (err) {
        quoteText.textContent = "Oops, couldn't load a quote.";
        authorText.textContent = "";
    }
}

// Event listeners
newQuoteBtn.addEventListener("click", getQuote);

// Bonus: Spacebar for new quote
document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        getQuote();
    }
});

// Initial load
getQuote();
