const arrayOfObjects = [
  { name: "Fox", link: "https://foxnews.com" },
  { name: "Fandango", link: "https://fandango.com" },
  { name: "CNN", link: "https://cnn.com" },
  { name: "Google", link: "https://google.com" },
  { name: "YouTube", link: "https://youtube.com" },
  { name: "Instagram", link: "https://instagram.com" },
  { name: "Amazon", link: "https://amazon.com" },
  { name: "RideFox", link: "https://ridefox.com" },
  { name: "Udemy", link: "https://udemy.com" },
  { name: "Telegram", link: "https://telegram.org" },
  { name: "Discord", link: "https://discord.com" },
  { name: "Slack", link: "https://slack.com" },

];

//global variables
const SUGGESTIONS = "suggestions";
const MAX_RESULT = 5;

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
    ).slice(0,MAX_RESULT); //shows 5 top suggestion
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
      li.innerHTML = `<a href="${result.link}">${result.value}</a>`;
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
