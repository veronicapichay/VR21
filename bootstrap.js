const addForm = document.querySelector("#addmeme form");
console.log(addForm); //debugging purposes
console.log("form added");

addForm.addEventListener("submit", handleAddSubmit);

//submit fx
function handleAddSubmit(event) {
    event.preventDefault(); //refresh is a default behavior
    console.log(addForm.elements);
    console.log("Success! Form submitted."); //debugging purposes

    //accessing values in ea elements using name properties
    const memeUrl = addForm.elements.imageUrl.value;
    const top = addForm.elements.top.value;
    const bottom = addForm.elements.bottom.value;
    //console.log(memeUrl, top, bottom);

    const cardInfo = {imageUrl, top, bottom};
    //call fx passing an obj cardInfo to avoid returning wrong data 
    createMemeCard(cardInfo);

    //clears the form for new entry
    addForm.reset();

    const closeBtn = document.querySelector('[data-bs-dismiss="modal"]') //selects Close btn after form submit
    closeBtn.click();
}

//meme card html template
function createMemeCard (cardInfo) {
    // const colCard = document.createElement("div");
    // colCard.classList.add("col");
    colCard.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" >
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">S</p>
      <button type = "button" class="btn btn-info">Update</button>
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

function deleteCard(event) {
    const buttonDelete = event.target;
    const colCard = buttonDelete.closest(".col"); 
    console.log(colCard);
    colCard.remove();
  }

  function updateCard(event) {
    const colCard = document.createElement("div");
    colCard.classList.add("col");
    colCard.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" >
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">S</p>
      <button type = "button" class="btn btn-info">Update</button>
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
const UpdateBtn = colCard.querySelector(".btn-info");
deleteBtn.addEventListener("click", deleteCard);

//displaying meme card 
const cardContainer = document.getElementById("cardContainer")
cardContainer.append(colCard);
}
  

