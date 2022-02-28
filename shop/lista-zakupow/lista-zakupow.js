// function Product(name, price) {
//     return {
//         name,
//         price
//     }
// }

//Przepisac funkcje Product na klasę Product

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;      
        }
}

// Stworzona TABLICA zawierająca 3 obiekty (instancje Person) - dodajemy new, aby tworzyć obiekty przez klasę
// const priceList = [
//     new Product('Milk', 1),
//     new Product('Bread', 2),
//     new Product('Egg', 0.3)
// ];

//Tworzę pustą tablice początkową
let priceList = [];

// "pojemnik" na ordery
let orderList = [];

//Funkcja wypisuje (renderuje) listę cen 

function renderPriceList() {
    const priceListElement = document.getElementById('priceList');
    priceListElement.innerHTML = '';
    for (let i = 0; i < priceList.length; i++) {
        const productElement = document.createElement('li'); // DOCS => https://www.w3schools.com/jsref/met_document_createelement.asp
        productElement.innerText = `${priceList[i].name} cost ${priceList[i].price}`;  // priceList[i].name + " cost " + priceList[i].price
        priceListElement.appendChild(productElement); // DOCS => https://www.w3schools.com/jsref/met_node_appendchild.asp
    }
}

//   Tworzymy klasę: element.classList.add("mystyle");

//Funkcja wypisuje (renderuje) listę zamówień

function renderOrderList() {
    const orderListElement = document.getElementById('productsList');

    orderListElement.innerHTML = '';

    for (let i = 0; i < orderList.length; i++) {
        const productElement = document.createElement('li');

        //Dodanie buttona Delete do i-tego elementu
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Remove';


        productElement.innerText = `${orderList[i].name} x ${orderList[i].amount}`;

        productElement.appendChild(deleteButton);

        deleteButton.addEventListener('click', () => {
            orderList.splice(i, 1);
            renderOrderList();
            localStorage.setItem('orderList', JSON.stringify(orderList))
        });


        orderListElement.appendChild(productElement);



        //Zadanie domowe: jeśli cena * ilośc mieści się w budżecie, to pokoloruj na zielono, jeśli nie, to na czerwono
        if (
            orderList[i].amount * getPriceByName(orderList[i].name) <= orderList[i].budget
        ) {
            productElement.classList.add("green")
        } else {
            productElement.classList.add("red")
        }
    }
}

//Dodanie funkcji pobierającej cenę z priceList

function getPriceByName(name) {
    // dodac petle po calej liscie z cenami i poszukac nazwy produktu, jesli jest to wyciagnac cenei zwrocic
    for (let i = 0; i < priceList.length; i++) {
        if (name === priceList[i].name) {
            return priceList[i].price
        }
    }
}


//Funkcja walidująca pola formularza, zwraca true - jesli poprawnie, false - jesli zawiera błędy

function isValidData() {
    const productNameElement = document.getElementById('productName');
    const productAmountElement = document.getElementById('productAmount');
    const productMaxPriceElement = document.getElementById('productMaxPrice');

    if (productNameDropdown.value === '') {
        console.error('product name can not be empty');
        return false;
    }
    if (productAmountElement.value === ''
        || Number.isNaN(Number(productAmountElement.value))) {
        console.error('product amount can not be empty');
        return false;
    }
    if (productMaxPriceElement.value === '') {
        console.error('product budget can not be empty');
        return false;
    }
    return true;
}

function init() {
    const myBtn = document.getElementById('myBtn');

    //Pobieram local storage po kluczu
    const orderListLocalStorage = localStorage.getItem('orderList');
    if (orderListLocalStorage !== null) {
        const orderListParsed = JSON.parse(orderListLocalStorage);
        orderList = orderListParsed;
    }
    renderOrderList();
    
    //Dodajemy nasłuchiwacza do buttona na click

    myBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Zapobiega domyślnemy zachowaniu przelądarki po kliknięciu w button, który jest w formularzu

        const productNameDropdown = document.getElementById("productNameDropdown"); //zamiast inputa deklaruję dropdown po ID
        const productAmountElement = document.getElementById('productAmount');
        const productMaxPriceElement = document.getElementById('productMaxPrice');

        //if (isValidData() === false)

        if (!isValidData()) {
            return;
        }

        const order = {
            name: productNameDropdown.value, // zmieniam value z inputa na dropdown
            amount: productAmountElement.value,
            budget: productMaxPriceElement.value
        }

        orderList.push(order);

        //Dodajemy produkt do local storage
        localStorage.setItem('orderList', JSON.stringify(orderList));

        renderOrderList();

        //productNameDropdown.value = '';
        productAmountElement.value = '';
        productMaxPriceElement.value = '';
    });

}


//Homework 5

// Funkcja ma przejść przez całą listę priceList, pobrać priceList[i].name i wyrenderować w dropdownie

function renderNameOfProduct() {


    const productNameDropdown = document.getElementById("productNameDropdown"); //deklaruje dropdown po ID 

    for (let i = 0; i < priceList.length; i++) {

        const productOption = document.createElement('option');
        productOption.innerHTML = `${priceList[i].name}`;
        productNameDropdown.appendChild(productOption);
    }

}

function loadProductListFromLocalStorage() {

    const productListLocalStorage = localStorage.getItem('productList'); //Zczytujemy locale storage
    const productListParsed = JSON.parse(productListLocalStorage); // parsujemy locale storage do obiektu
    priceList = productListParsed; //nadpisujemy tablicę na nową z locale storage
    console.log(priceList);
}


init();
loadProductListFromLocalStorage(); //Zczytuje z local storage
renderOrderList();


renderNameOfProduct(); // Renderuje na podstawie productList z local storage
renderPriceList();

