const client_id = "qTvoYhj5lwBIculuHLXUAFLgm2X6DaZfPJB6Yxxkn0A"; // Create an account unsplash tp hey client ID;
const searchBtn = "electric fan";
const resource = `https://api.unsplash.com/search/photos?query=${searchBtn}&per_page=22&client_id=${client_id}`

fetch(resource)
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector("#container");

    for (let i = 0; i < data.results.length - 1; i++) {
      const url = data.results[i].urls.thumb;
      const img = document.createElement("img");

      img.setAttribute("src", url);
      container.append(img);
    }
  });

  