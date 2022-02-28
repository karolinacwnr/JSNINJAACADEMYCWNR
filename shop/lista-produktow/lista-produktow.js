//homework 6
/*Rozbudowac program w nastepujacy sposob:

Przedewszystkim zrobmy sobie nazywnictwo. Obecna strone aplikacji bedziemy nazywac "strona z lista zakupow" (LZ).

tworzyc nowa strone (bedzie sie nazywac "strona lista produktow" - LP ) na ktorej bedzie formularz = 
input - nazwa produktu
input - cena produktu
button - dodaj do listy.

W LZ dla kazdego elementa zrobic mozliwosc usuwania jego (to co robilismy na zajeciu).
*/

//dodac komunikacje przed dwoma stronkami. Na LP tworzymy nasza liste produktow i zapisujemy w localstorage
//na LZ wczytujemy ta liste i zapisujemy sobie do local storage zakupy do osobnego pola. 
//(nie zapominamy robic update dla local storage jak usuwamy produkt)


//LISTA PRODUKTÓW

//Dodać addListener'a na button Add to list, który doda wartości z inputów
//wartości te doda do listy Product list

const addToList = document.getElementById('addToList');

let productList = [];
const productNameElement = document.getElementById('productName');
const productPriceElement = document.getElementById('productPrice');


addToList.addEventListener('click', (event) => {
    event.preventDefault();

    const product = {
        name: productNameElement.value,
        price: productPriceElement.value
    }

    productList.push(product);
    console.log(productList);

    localStorage.setItem('productList', JSON.stringify(productList));

    renderProductList();
    productNameElement.value = '';
    productPriceElement.value = '';
}
);

function renderProductList() {
    const productListElement = document.getElementById('productList');

    productListElement.innerHTML = '';

    for (let i = 0; i < productList.length; i++) {

        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Remove';

        listItem.textContent = `${productList[i].name} costs ${productList[i].price}`;

        productListElement.appendChild(listItem);
        listItem.appendChild(deleteButton);

        deleteButton.addEventListener('click', () => {
            //Usuwamy produkt z listy na podstawie indeksu
            productList.splice(i, 1);
            renderProductList();
            //Ustawiamy local storage jeszcze raz po usunięciu elementu produktu
            localStorage.setItem('productList', JSON.stringify(productList))
        });
    }
}

function init() {
    //Pobiera z local storage wartość, która jest pod kluczem productList
    const productListLocalStorage = localStorage.getItem('productList');
    if (localStorage.getItem('productList') !== null) {
        const productListParsed =JSON.parse(productListLocalStorage);
        console.log(productListParsed);
        productList = productListParsed; 
    }
    renderProductList()
};

init();