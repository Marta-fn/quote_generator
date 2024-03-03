function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();
  let userPrompt = document.querySelector("#user-prompt");
  let apiKey = "8066f7209f55a447d5b43ta1a1a01obb";
  let prompt = `Form a quote with or about the word ${userPrompt.value}`;
  let context =
    "You are an Assistant AI with a vast knowledge of positive quotes. Match the user prompt language to the quote";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator");
quoteFormElement.addEventListener("submit", generateQuote);
