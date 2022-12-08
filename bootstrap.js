const addCard = document.querySelector("#createModal form");
console.log(addCard); //debugging purposes
console.log("add form added");
addCard.addEventListener("submit", handleAddSubmit);

//submit fx
function handleAddSubmit(event) {
  event.preventDefault(); //refresh is a default behavior
  console.log(addCard.elements);
  console.log("Success! Form submitted."); //debugging purposes

  //accessing values in ea elements using name properties
  const memeUrl = addForm.elements.imageUrl.value;
  const top = addForm.elements.title.value;
  const bottom = addForm.elements.bottom.value;
  //console.log(memeUrl, top, bottom);

  const cardInfo = {imageUrl, title, bottom};
  //call fx passing an obj cardInfo to avoid returning wrong data 
  createDesignCard(cardInfo);

  //clears the form for new entry
  addCard.reset();

  const closeBtn = document.querySelector('[data-bs-dismiss="modal"]') //selects Close btn after form submit
  closeBtn.click();
}

//meme card html template
function createDesignCard (cardInfo) {
  const colCard = document.createElement("div");
    colCard.classList.add("col");
    colCard.innerHTML =
  const colCard = 
   document
      .querySelector("#save").addEventListener("click", (e) =>  {
        const contentCard = `<div class="col-lg-3 col-md-4 col-sm-6 d-flex">
                  <div class="card">
                    <img src = "https://www.yankodesign.com/images/design_news/2022/12/these_headphones_lets_you_feel_the_music_layout.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content 
                      </p>
                      <div>
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#updateModal"
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>`;
  
                document
                  .querySelector(".row")
                  .insertAdjacentHTML("beforeend", contentCard);
    });



// document
//     .querySelector("#save").addEventListener("click", (e) =>  {
//       const contentCard = `<div class="col-lg-3 col-md-4 col-sm-6 d-flex">
//                 <div class="card">
//                   <img src = "https://www.yankodesign.com/images/design_news/2022/12/these_headphones_lets_you_feel_the_music_layout.jpg"
//                     class="card-img-top"
//                     alt="..."
//                   />
//                   <div class="card-body">
//                     <h5 class="card-title">Card title</h5>
//                     <p class="card-text">
//                       Some quick example text to build on the card title and make up
//                       the bulk of the card's content 
//                     </p>
//                     <div>
//                       <button
//                         type="button"
//                         class="btn btn-primary"
//                         data-bs-toggle="modal"
//                         data-bs-target="#updateModal"
//                       >
//                         Update
//                       </button>
//                       <button
//                         type="button"
//                         class="btn btn-primary"
//                         data-bs-toggle="modal"
//                         data-bs-target="#deleteModal"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>`;

//               document
//                 .querySelector(".row")
//                 .insertAdjacentHTML("beforeend", contentCard);
//   });



  //    //Creating an element
  //   const cardColumn = document.createElement("div");
  //   cardColumn.setAttribute("class", "col-md-3");


  //   const card = document.createElement("div")
  //   card.setAttribute("class", "card");

  //   const img = document.createElement("img");
  //   img.setAttribute(
  //     "src",
  //     "https://www.yankodesign.com/images/design_news/2022/12/these_headphones_lets_you_feel_the_music_layout.jpg"
  //     );
  //   img.setAttribute("class", "card-img-top");
    
  //   const cardBody= document.createElement("div")
  //   cardBody.setAttribute("class", "card-body");

  //   card.append(img);
  //   card.append(cardBody);

    

  //   //Append an element
  //   const row = document.querySelector(".row").append(cardColumn);

  // });


//meme card html template
function createCard (cardInfo) {
    const colCard = document.createElement("div");
    colCard.classList.add("col");
    colCard.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" >
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">S</p>
      <button type = "button" class="btn btn-danger">Delete</button>
    </div>
  </div>
</div>`;
            
//populating card using cardInfo; selecting img element inside col and setting attributes
colCard.querySelector(".card-img-top")
.setAttribute("src", cardInfo.memeUrl); 

colCard.querySelector(".card-img-top")
.setAttribute("alt", cardInfo.top);

colCard.querySelector(".card-title").textContent = cardInfo.top;
colCard.querySelector(".card-text").textContent = cardInfo.bottom; 

//delete btn 
const deleteBtn = colCard.querySelector(".btn-danger");
deleteBtn.addEventListener("click", deleteCard);

//displaying meme card 
const cardContainer = document.getElementById("cardContainer")
cardContainer.append(colCard);
}             