/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/
const myName = 'Maria Florencia Jorrat';
console.log(myName);

const myAge = 30;
console.log(myAge);

let isDeveloper = true;
console.log(isDeveloper);

const myBirthDate = new Date(1992, 5, 21);
console.log(myBirthDate);

const myFavoriteBook = {
    title: 'Rosaura a las diez',
    autor: 'Marco Denevi',
    date: 1955,
    url: 'https://es.wikipedia.org/wiki/Rosaura_a_las_diez'
}
console.log(myFavoriteBook);