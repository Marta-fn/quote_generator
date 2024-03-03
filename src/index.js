function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "The quote will go here",
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-generator");
quoteFormElement.addEventListener("submit", generateQuote);
