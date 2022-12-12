const addForm = document.querySelector("#addcard form");
const updateForm = document.querySelector("#updatecard form");  

addForm.addEventListener("submit", handleAddSubmit);
updateForm.addEventListener("click", handleAddSubmit);


//submit fx
function handleAddSubmit(event) {
    event.preventDefault(); //refresh is a default behavior
   
    //accessing values in ea elements using name properties
    const prodUrl = addForm.elements.prodUrl.value;
    const top = addForm.elements.top.value;
    const bottom = addForm.elements.bottom.value;
  
    const cardInfo = {prodUrl, top, bottom};
    //call fx passing an obj cardInfo to avoid returning wrong data 
    
    createCard(cardInfo);

    //clears the form for new entry
    addForm.reset();

    const closeBtn = document.querySelector('[data-bs-dismiss="modal"]') //selects Close btn after form submit
    closeBtn.click();
}

function createCard (cardInfo) {
    const colCard = document.createElement("div");
    colCard.classList.add("col-md-3");
    colCard.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" >
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text"></p>
      <button type = "button" class="btn btn-info">Update</button>
      <button type = "button" class="btn btn-danger">Delete</button>
    </div>
  </div>
</div>`;

//populating card using cardInfo; selecting img element inside col and setting attributes
colCard.querySelector(".card-img-top")
    .setAttribute("src", cardInfo.prodUrl); 
    
colCard.querySelector(".card-img-top")
    .setAttribute("alt", cardInfo.top);

colCard.querySelector(".card-title").textContent = cardInfo.top;
colCard.querySelector(".card-text").textContent = cardInfo.bottom; 

//delete btn 
const deleteBtn = colCard.querySelector(".btn-danger");
deleteBtn.addEventListener("click", deleteCard);

//update btn
// const updateBtn = colCard.querySelector(".btn-info");
// updateBtn.addEventListener("click", updateCard);

//displaying meme card 
const cardContainer = document.getElementById("cardContainer")
cardContainer.append(colCard);
}

function deleteCard(event) {
    const buttonDelete = event.target;
    const colCard = buttonDelete.closest(".col-md-3"); 
    colCard.remove();
  }


function updateCard(event) {
    const cardInfo = {prodUrl, top, bottom};

colCard.querySelector(".card-img-top")
    .setAttribute("src", cardInfo.prodUrl); 
    
colCard.querySelector(".card-img-top")
    .setAttribute("alt", cardInfo.top);

colCard.querySelector(".card-title").textContent = cardInfo.top;
colCard.querySelector(".card-text").textContent = cardInfo.bottom; 
  
}

