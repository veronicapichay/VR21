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


              
                     