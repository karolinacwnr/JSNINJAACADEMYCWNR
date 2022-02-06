//zad.Homework3

//Stworzyć mini aplikacje. Mamy formularz na stronie: name, last name, age, city. Są 3 buttony na stronie: 
//add- dodaje do listy persone z wpisanymi w inputy wartościami
//old man - do dodatkowego pola wpisuje imie i nazwisko najstarszej osoby
//Kraków people - do dodatkowego pola wpisuje po przecinku wszystkich mieszkanców Krakowa <div id="additionalField"></div>
//globalna consta listOfPersons 

const listOfPersons = [];

const firstName = document.getElementById('name');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const city = document.getElementById('city');

const addButton = document.getElementById('add');
const oldestPersonButton = document.getElementById("oldestPerson");
const krakowPeopleButton = document.getElementById("krakowPeople");

const additionalField = document.getElementById("additionalField");

// Add person

addButton.addEventListener("click", addPersonFunction);


function addPersonFunction(event) {
    const errors = [];

    if (firstName.value === "") {
        errors.push('first name');
    }

    if (lastName.value === "") {
        errors.push('last name');
    }

    if (age.value === "") {
        errors.push('age');
    }

    if (city.value === "") {
        errors.push('city');

    }

    if (errors.length > 0) {
        throw new Error("Form is invalid. Please fill " + errors.join(', ') + " fields.")

    }

    if (age.value <= 0) {
        throw new Error("Please provide correct age.");
    }

    //Stwórz nową osobę (obiekt)

    let person = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: Number(age.value),
        city: city.value
    };

    //Wypchaj te dane do tablicy 

    listOfPersons.push(person);
    console.log(event);
    console.log(listOfPersons);

    //Wyczyść pola formularza

    firstName.value = "";
    lastName.value = "";
    age.value = "";
    city.value = "";
}

//Oldest person

// Dodaj nasłuchiwanie zdarzenia do buttona

oldestPersonButton.addEventListener("click", getOldestPerson);

// Zadeklaruj funkcję, która wyświetli name i lastname najstaszej osoby w dodatkowym polu

function getOldestPerson(event) {

    let oldestAge = listOfPersons[0].age;
    let oldestAgeInObject = listOfPersons[0];

    for (let i = 1; i < listOfPersons.length; i++) {
        if (oldestAge < listOfPersons[i].age) {
            oldestAge = listOfPersons[i].age;
            oldestAgeInObject = listOfPersons[i];
        }
    }

    const fullName = oldestAgeInObject.firstName + " " + oldestAgeInObject.lastName;

    //console.dir(additionalField);

    // Zmień zawartość tekstową elementu HTML
    additionalField.textContent = fullName;
}

//Kraków people

krakowPeopleButton.addEventListener("click", getKrakowPeople);

function getKrakowPeople(event) {
    //Kraków people - do dodatkowego pola wpisuje po przecinku wszystkich mieszkanców Krakowa

    let peopleInKrakow = "";

    for (let i = 0; i < listOfPersons.length; i++) {
        if (listOfPersons[i].city === "Kraków") {
            peopleInKrakow = peopleInKrakow + listOfPersons[i].firstName + " " + listOfPersons[i].lastName + ", ";
        }
    }
    console.log(peopleInKrakow);
    additionalField.textContent = peopleInKrakow;
}
