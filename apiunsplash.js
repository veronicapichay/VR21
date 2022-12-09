// const client_id = "qTvoYhj5lwBIculuHLXUAFLgm2X6DaZfPJB6Yxxkn0A"; // Create an account unsplash tp hey client ID;
// const searchBtn = document.getElementById("input").valuel
// let searchVal;

// fetch(
//   `https://api.unsplash.com/search/photos?query=${searchStr}&per_page=20&client_id=${client_id}`
// )
//   .then((response) => response.json())
//   .then((data) => {
//     const container = document.querySelector(".container");

//     for (let i = 0; i < data.results.length - 1; i++) {
//       const img = document.createElement("img");

//       img.setAttribute("src", data.results[i].urls.thumb);

//       container.append(img);
//     }
//   });

  const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
  }
  
  const clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", clearInput);
  
  