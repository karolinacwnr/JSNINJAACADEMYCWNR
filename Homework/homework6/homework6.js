//homework 6
/*Rozbudowac program w nastepujacy sposob:

Przedewszystkim zrobmy sobie nazywnictwo. Obecna strone aplikacji bedziemy nazywac "strona z lista zakupow" (LZ).

Ztworzyc nowa strone (bedzie sie nazywac "strona lista produktow" - LP ) na ktorej bedzie formularz = 
input - nazwa produktu
input - cena produktu
button - dodaj do listy.

W LZ dla kazdego elementa zrobic mozliwosc usuwania jego (to co robilismy na zajeciu).
*/



//LISTA PRODUKTÓW

//Dodać addListener'a na button Add to list, który doda wartości z inputów
//wartości te doda do listy Product list

const addToList = document.getElementById('addToList');

const productList = [];
const productNameElement = document.getElementById('productName');
const productPriceElement = document.getElementById('productPrice');

// function isValidData () {

//     if (productNameElement.value === '') {
//         console.error('product name can not be empty');
//         return false;
//     }
//     if (productPriceElement.value === '') {
//         console.error('product price can not be empty');
//         return false;
//     }
//     return true;
// };


addToList.addEventListener('click', (event) => {
    event.preventDefault();

    // if (!isValidData()) {
    //     return;
    // };

    const product = {
        name: productNameElement.value,
        price: productPriceElement.value
    }

    productList.push(product);
    console.log(productList);

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

            productList.splice(i, 1);
            renderProductList();

        });
    }
}

