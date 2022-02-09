function Product(name, price) {
    return {
        name,
        price
    }
}


// Stworzona TABLICA zawierająca 3 obiekty (instancje Person)
const priceList = [
    Product('Milk', 1),
    Product('Bread', 2),
    Product('Egg', 0.3)
];

// "pojemnik" na ordery
const orderList = [];

//Funkcja wypisuje (renderuje) listę cen 

function renderPriceList() {
    const priceListElement = document.getElementById('priceList');
    priceListElement.innerHTML = '';
    for(let i =0; i< priceList.length; i++) {
        const productElement = document.createElement('li'); // DOCS => https://www.w3schools.com/jsref/met_document_createelement.asp
        productElement.innerText = `${priceList[i].name} cost ${priceList[i].price}`;  // priceList[i].name + " cost " + priceList[i].price
        priceListElement.appendChild(productElement); // DOCS => https://www.w3schools.com/jsref/met_node_appendchild.asp
    }
}

//   Tworzymy klasę: element.classList.add("mystyle");

//Funkcja wypisuje (renderuje) listę zamówień

function renderOrderList() {
    const orderListElement =  document.getElementById('productsList');

    orderListElement.innerHTML = '';

    for(let i = 0; i< orderList.length; i++) {
        const productElement = document.createElement('li');
        productElement.innerText = `${orderList[i].name} x ${orderList[i].amount}`;
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

    if (productNameElement.value === '') {
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

//Dodajemy nasłuchiwacza do buttona na click

    myBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Zapobiega domyślnemy zachowaniu przelądarki po kliknięciu w button, który jest w formularzu
        
        const productNameElement = document.getElementById('productName');
        const productAmountElement = document.getElementById('productAmount');
        const productMaxPriceElement = document.getElementById('productMaxPrice');

        //if (isValidData() === false)

        if (!isValidData()) {
            return;
        }

        const order = {
            name: productNameElement.value, 
            amount: productAmountElement.value, 
            budget: productMaxPriceElement.value
        }

        orderList.push(order);
        renderOrderList();

        productNameElement.value = '';
        productAmountElement.value = '';
        productMaxPriceElement.value = '';
    });
}

init();
renderPriceList();
renderOrderList();