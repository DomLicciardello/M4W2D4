let homePage = document.getElementById("divBooks")

fetch ("https://striveschool-api.herokuapp.com/books")
.then (res => res.json())
.then (json => cardBook(json))
.catch (err => console.log ("Errore: " + err));

function cardBook (json){
    json.forEach(book => {
        let createDivCard = document.createElement("div");
        createDivCard.classList.add("cardBook");
        homePage.appendChild(createDivCard);

        let  createImg = document.createElement("img");
        const imageUrl = book.img;
        createImg.setAttribute("src", imageUrl);
        createImg.classList.add("card-img-top");
        createDivCard.appendChild(createImg);

        let createDivInfo = document.createElement("div");
        createDivInfo.classList.add("card-body");
        createDivCard.appendChild(createDivInfo);

        let createTitle = document.createElement("h5");
        createTitle.innerText = `${book.title}`;
        createTitle.classList.add("style_title");
        createDivInfo.appendChild(createTitle);

        let createCategory = document.createElement("p");
        createCategory.innerText = `Category: ${book.category}`;
        createCategory.classList.add("style_info");
        createDivInfo.appendChild(createCategory);

        let createPrice = document.createElement("p");
        createPrice.innerText = `Price: ${book.price}€`;
        createPrice.classList.add("style_info");
        createDivInfo.appendChild(createPrice);

        let createShopButton = document.createElement("a");
        createShopButton.innerText = `Shop`;
        createShopButton.classList.add("btn", "btn-light");
        // createShopButton.addEventListener("click", shopBook)
        createDivInfo.appendChild(createShopButton);

        let createSkipButton = document.createElement("a");
        createSkipButton.innerText = `Skip`;
        createSkipButton.classList.add("btn", "btn-light", "button_card_style");
        createDivInfo.appendChild(createSkipButton);
    });

    /* ESERCIZIO DA TERMINARE
    function shopBook() {
        let cart = document.getElementById("cart");
        let book = document.createElement("li");
        book.innerText = `ciao ${json.title}`;
        cart.appendChild(book);
        console.log(json)
    };
    */
};