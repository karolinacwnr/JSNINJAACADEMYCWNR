//HOMEWORK

//zad.1.

function isSubstring(mainString, subString) {
    if (mainString.includes(subString)){
        return true;
    } else {
        return false;
    }
   
}

const test1 = isSubstring("Lorem ipsum", "Hello"); // zwroci false poniewaz "Lorem ipsum" nie zawiera "Hello"

const test2 = isSubstring("chce kupic nowa koszulke", "pic") // zwroci true poniewaz "pic" sie znajduje "..ku*pic* nowa ...."

console.log(test1);
console.log(test2);


