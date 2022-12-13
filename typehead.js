const arrayOfObjects = [
  { name: "Fox", link: "foxnews.com" },
  { name: "Fandango", link: "fandango.com" },
  { name: "CNN", link: "cnn.com" },
  { name: "Google", link: "google.com" },
  { name: "YouTube", link: "youtube.com" },
  { name: "Instagram", link: "instagram.com" },
  { name: "Amazon", link: "amazon.com" },
  { name: "RideFox", link: "ridefox.com" },
  { name: "Udemy", link: "udemy.com" },
  { name: "Telegram", link: "telegram.org" },
  { name: "Discord", link: "discord.com" },
  { name: "Slack", link: "slack.com" },
];
//global variables
const SUGGESTIONS = "suggestions";

//serach input event listener
const inputSearch = document.getElementById("search");
inputSearch.addEventListener("keyup", debounce(fxUp));
// const processChange = debounce(fxUp); 
//inputSearch.addEventListener("keyup", (event) => debounce(fxUp)(event));

function fxUp(event) {
  const userInput = inputSearch.value.toLowerCase();
  clearSuggestions(); //always clears

  //if there is a string then suggest something
  if (userInput) {
    //creates a new arr that matches the criteria
    //words users type so far
    const suggestions = arrayOfObjects.filter((result) =>
      result.name.toLowerCase().startsWith(userInput)
    );
    displaySuggestion(suggestions);
  }
}

function displaySuggestion(suggestions) {
  const ul = document.getElementById(SUGGESTIONS);
  if (suggestions.length === 0) {
    ul.innerHTML = `<li> No match found</>`;
  } else {
    //new suggestions
    suggestions.forEach((result) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href=" =${result.link}">${result.name}</a>`;
      ul.append(li);
    });
  }
}

function clearSuggestions() {
  const ul = document.getElementById(SUGGESTIONS);
  //continues when there are children
  while (ul.firstElementChild) {
    ul.firstElementChild.remove();
  }
}

function debounce(func, timeout = 2000) {
  let timer;
  return (...args) => {
    if (!timer) {
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
}
