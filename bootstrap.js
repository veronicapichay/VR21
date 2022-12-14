const addButton = document.querySelector("#newCardBtn");
const addForm = document.querySelector("#addcard form");
//const updateForm = document.querySelector("#updatecard form");

addForm.addEventListener("submit", handleAddSubmit);
addButton.addEventListener("click", handleNewButton);

//submit fx
function handleAddSubmit(event) {
  //accessing values in ea elements using name properties
  //call fx passing an obj cardInfo to avoid returning wrong data
  const prodUrl = addForm.elements.prodUrl.value;
  const top = addForm.elements.top.value;
  const bottom = addForm.elements.bottom.value;
  const cardInfo = { prodUrl, top, bottom };
  const cardID = addForm.getAttribute("data-cardid"); //grab the id from the update button
  event.preventDefault(); //refresh is a default behavior

  if (cardID) {
    //update card
    const card = document.querySelector(`.card[data-cardid="${cardID}"]`); //selects the card with the data attribute that has val of card id
    //populating card using cardInfo; selecting img element inside col and setting attributes
    card.querySelector(".card-img-top").setAttribute("src", cardInfo.prodUrl);
    card.querySelector(".card-img-top").setAttribute("alt", cardInfo.top);
    card.querySelector(".card-title").textContent = cardInfo.top;
    card.querySelector(".card-text").textContent = cardInfo.bottom;
    } 
    else {

    //data in local storage
    const currentItems = JSON.parse(localStorage.getItem("items")) || [];
    const newItem = {top, prodUrl, bottom};
    const newItems = [...currentItems, newItem];
    debugger;

    //set new set of items in local storage
    localStorage.setItem("items", JSON.stringify(newItems));

    //add new card
    createCard(cardInfo);
    }

  //clears the form for new entry
  addForm.reset();

  const closeBtn = document.querySelector('[data-bs-dismiss="modal"]'); //selects Close btn after form submit
  closeBtn.click();
}


//fx to reset the form and clear the id when add button is click after update
function handleNewButton(event) {
  addForm.reset();
  addForm.removeAttribute("data-cardid");
}

function createCard(cardInfo) {
  //creating a unique identifier
  const cardID = Date.now();
  const colCard = document.createElement("div");
  colCard.classList.add("col-md-3");
  colCard.innerHTML = `
    <div class="card" style="width: 18rem;" data-cardid='${cardID}' >
    <img class="card-img-top" >
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text"></p>
      <button type = "button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#addcard">Update</button>
      <button type = "button" class="btn btn-danger">Delete</button>
    </div>
  </div>
</div>`;

  //populating card using cardInfo; selecting img element inside col and setting attributes
  colCard.querySelector(".card-img-top").setAttribute("src", cardInfo.prodUrl);

  colCard.querySelector(".card-img-top").setAttribute("alt", cardInfo.top);

  colCard.querySelector(".card-title").textContent = cardInfo.top;
  colCard.querySelector(".card-text").textContent = cardInfo.bottom;

  //delete btn
  const deleteBtn = colCard.querySelector(".btn-danger");
  deleteBtn.addEventListener("click", deleteCard);

  //update btn
  const updateBtn = colCard.querySelector(".btn-info");
  updateBtn.addEventListener("click", updateCard);

  //displaying meme card
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.append(colCard);
}

function deleteCard(event) {
  const buttonDelete = event.target;
  const colCard = buttonDelete.closest(".col-md-3");
  colCard.remove();
}

function updateCard(event) {
  console.log(event.target);
  const card = event.target.closest(".card");
  const cardID = card.getAttribute("data-cardid");
  console.log(cardID);

  const url = card.querySelector(".card-img-top").getAttribute("src");
  const title = card.querySelector(".card-title").textContent;
  const text = card.querySelector(".card-text").textContent;

  //accessing values in ea elements using name properties
  addForm.elements.prodUrl.value = url;
  addForm.elements.top.value = title;
  addForm.elements.bottom.value = text;
  addForm.setAttribute("data-cardid", cardID);
}

