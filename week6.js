document.addEventListener("DOMContentLoaded", () => {
    
    // declare DOM elements
    const quote = document.querySelector("blockquote p");
    const cite = document.querySelector("blockquote cite");
    const button = document.querySelector("button");

// reference API
async function generateQuote() {
    // fetch quotes
    const text = await fetch("https://api.quotable.io/random");
    const data = await text.json();
    if (text.ok) {
        // update DOM elements
        quote.textContent = data.content;
        cite.textContent = data.author;
    }
    else {
        quote.textContent = "ERROR: Unable to generate quote.";
        console.log(data);
    }
};

// activate button
button.addEventListener("click", generateQuote);

// display image & call generateQuote function at startup
document.querySelector('img').setAttribute('src', '/tasks/week06/aurelius.png');
generateQuote();

});