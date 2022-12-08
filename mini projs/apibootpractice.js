fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response => response.json())
  .then((json) => {
    const container = document.querySelector(".container");

for (let i = 0; i < json.length - 1; i++) {
    const img = document.createElement("img");
    img.setAttribute("src", json[i].url);

    container.append(img);
    }   
}));




