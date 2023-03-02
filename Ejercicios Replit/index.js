
/*
function findSecondWord(text) {
    
    let firstSplit = text.indexOf(" ");
   
  let textFirstSplit = text.slice(firstSplit + 1);
   
  let secondSplit = textFirstSplit.indexOf(" "); 
   
  let Endlength = (textFirstSplit.length -1) -secondSplit
   
  let textSecondSplit = textFirstSplit.slice(textFirstSplit + 1, -Endlength)
   
  return textSecondSplit;
 }

console.log(findSecondWord("Hola, chicos yo me llamo Brenda"));
*/ 

/*
const array = [1, 2, 3, 4];
function sumaValues(array){
let suma = 0;

for (let i = 0; i < array.length; i++) {
    suma += array[i];
}
return suma;
}
console.log(sumaValues(array));
*/

/*
const user = {
    name: "Erik", email: "erik@academlo.com"
   };

function getEmail(user) {
    let email = user.email;
    return email;
  }

  console.log(getEmail(user));
  */

  /*
  let users = [

    {nombre: 'Yandry', email: 'yandryad82@gmil.com', edad: 40},
    {nombre: 'Lianet', email: 'lianetvc2@gmil.com', edad: 31},
    {nombre: 'Miguel', email: 'miguelernesto@gmil.com', edad: 11},
    {nombre: 'Abigail', email: 'abby27@gmil.com', edad: 12},
    {nombre: 'Symeecs', email: 'symeecs@gmil.com', edad: 12}

];

// Recorriendo Arreglo

function getEmails(users) {
    let emails = [];
    for (i=0; i < users.length; i++){
        emails[i] = (users[i].email);
       }
   return emails;    
}
console.log(getEmails(users));


/*
  // Creando Objetos dentro de un Arreglo

let usuarios = [

    {nombre: 'Yandry', email: 'yandryad82@gmil.com', edad: 40},
    {nombre: 'Lianet', email: 'lianetvc2@gmil.com', edad: 31},
    {nombre: 'Miguel', email: 'miguelernesto@gmil.com', edad: 11},
    {nombre: 'Abigail', email: 'abby27@gmil.com', edad: 12},
    {nombre: 'Symeecs', email: 'symeecs@gmil.com', edad: 12}

];

// Recorriendo Arreglo


var correos = [

    usuarios[0].email,
    usuarios[1].email,
    usuarios[2].email,
    usuarios[3].email,
    usuarios[4].email,

];

console.log(correos);

*/

/*
let users = [{ name: 'Erik', email: 'erik@academlo.com' }, { name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' }];

function deleteUser(users, email) {
    let emails = [];
    
    for (i=0; i < users.length; i++){
        emails[i] = (users[i].email);
    }
    
    let findEmail = emails.indexOf(email);
    
    const removed = users.splice(findEmail, 1) 
    
    return users;
    
  }

  console.log(deleteUser(users, 'erik@academlo.com'));
  
  console.log(users[0]);

  */
 /*
  let users = 
  [
    { name: 'Georg', email: 'georg@academlo.com' },
    { name: 'Andrea', email: 'andrea@gmail.com' },
    { name: 'Andrea', email: 'andrea@gmail.com' },
    { name: 'Andrea', email: 'andrea@gmail.com' }
  ];

  let attendances = 
  [
    { email: 'georg@academlo.com', attendance: true },
    { email: 'andrea@gmail.com', attendance: false }
  ];

  function mergeData(users, attendances) {
    //const newUsers = users.concat(attendances);
    Array.prototype.push.apply(users, attendances);

    return users;
  }

  console.log(mergeData(users, attendances));

  
[
    { name: 'Georg', email: 'georg@academlo.com', attendance: true },
    { name: 'Andrea', email: 'andrea@gmail.com', attendance: false }
]
*/

/*
//Replit Ejercicio 7

let students = [
  { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
  { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
  { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
  { name: 'Mónica', email: 'monica@gmail.com', country_id: 3 },
  { name: 'Yandry', email: 'yandryad82@gmail.com', country_id: 3 }
];

let countries = [
  { id: 1, name: 'Mexico', },
  { id: 2, name: 'Colombia' },
  { id: 3, name: 'Cuba' },
  { id: 4, name: 'Uruguay' },
  { id: 5, name: 'Argentina' }
];

function countStudents(students, countries, countryName) {
  
  let numberOfStudents = [];

  let idCountry;

  for (let i=0; i<countries.length; i++){

    if (countries[i].name == countryName){

      idCountry = countries[i].id
    }
  }
  for (let i=0; i<students.length; i++){
    if ( students[i].country_id == idCountry){
      numberOfStudents.push(students[i]);
    }
  }
//return idCountry;
return numberOfStudents.length;
}

console.log(countStudents(students, countries, 'Mexico'));

*/

/*

// Ejercicio #9 

Instrucciones
Encuentra la cantidad de números individuales que componen a un número

La función countNumbers() recibe como parámetro un número

Tu labor es encontrar y retornar el total de números individuales que lo componen.

Ejemplo:
Si la función recibe el número 128 debemos retornar un 3 porque el número 128 está compuesto por 3 números.

Ejemplo 2:
Si la función recibe el número 84 debemos retornar un 2 porque el número 84 está compuesto por 2 números.

*Recuerda utilizar return para devolver tu solución.
*El número que recibe la función puede ser cualquiera.

*/
/*
function countNumbers(number) {
  let cunter = 0;
  while(number >=1){
    cunter = cunter + 1;
    number = number / 10;
  }
  
  return cunter;
}
console.log(countNumbers(120));

// NOTA BUSCAR EXPLICACION PARA ENTENDERLA

*/

//EJERCICIO #10

/*

Instrucciones
Cuenta las veces que se repite una letra

La función countLetter() recibe como parámetros dos strings:

El primer string es una frase cualquiera.

El segundo string es una letra cualquiera.

Tu labor es encontrar cuántas veces se repite la letra en el string.

Ejemplo:
Si tu función recibe como frase "Hola, me llamo Erik" y como letra "a" debes retornar 2, ya que la letra "a" se encuentra 2 veces en la frase.

*Recuerda utilizar return para devolver tu solución.
*Tu solución debe de funcionar para cualquier frase y cualquier letra.



function countLetter(phrase, letter) {

  let cunter = [];

  for (let i=0; i<phrase.length; i++){
    if (phrase[i] == letter){
      cunter.push(phrase[i]);
    }
  }
  return cunter.length;
}
console.log(countLetter('Hola Mundo que feliz estoy de programar', 'o'))

*/

//EJERCICIO 11

/*
La función getMultiples() recibe como parámetros dos números:

Tu labor es encontrar todos los múltiplos del primer número (sin incluir este número) recibido siempre y cuando sean menores al segundo número recibido.

Ejemplo:
Si la función recibe 20 y 100 deberías retornar un arreglo como el siguiente [40, 60, 80], ya que esos son todos los múltiplos del 20 menores a 100.



function getMultiples(number, limit) {
 
  let multiples = [];

  for (let i=number; i<limit; i++){
    if ( (i % number ) == 0){
      if (i != number){

      multiples.push(i);
    }
    }
  }
return multiples;
}
console.log(getMultiples(20,1200))



// EJERCICIO 12

const users = [
  {
      name: 'Erik',
      gender: 'male',
      age: 22,
  },
  {
      name: 'Daniela',
      gender: 'female',
      age: 22,
  },
  {
      name: 'Gustavo',
      gender: 'male',
      age: 49,
  },
  {
      name: 'María',
      gender: 'female',
      age: 35,
  },
];

function findUser(users, name) {
  
  let user;

  for (let i=0; i<users.length; i++){
    if ( users[i].name == name){
      user = users[i];
    }
  }
  return user;
}
console.log(findUser(users, 'María'));



// EJERCICIO 13

const users = [
  { name: 'Erik', email: 'erik@academlo.com', channel: 'youtube', application: null },
  { name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' }},
  { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' }}
];

function getApplications(users) {
  
  let apply = [];

  for (i=0; i<users.length; i++){
    if (users[i].application != null){
      apply.push(users[i]);
    }
  }
return apply;

}
console.log(getApplications(users));

*/

// EJERCICIO 14

/*
Instrucciones
Sumando números pares en un rango

La función sumEvens() recibe como parámetros dos números:

Tu labor es sumar todos los números pares que se encuentren en el rango de los números recibidos, sin incluir a los dos números recibidos.

Ejemplo:
Si tu función recibe 20 y 30 deberías retornar 100, ya que los números pares entre 20 y 30 son 22, 24, 26, 28 y la suma de todos estos números es 100.

*Recuerda utilizar return para devolver tu solución.
*El segundo número recibido siempre será mayor al primero.
*/
/*
function sumEvens(start, end) {
  
  const numbers = [];
  let suma = 0;

  for (i=start; i<end; i++){
    if (i % 2 == 0 && i>start){
      
      numbers.push(i);
      
    }
  }
    for (i=0; i<numbers.length; i++){
      suma += numbers[i];
    }
 
return suma;
}
console.log(sumEvens(20,60));

*/

// EJERCICIO 6
/*
const users = [
  { name: 'Georg', email: 'georg@academlo.com' },
  { name: 'Andrea', email: 'andrea@gmail.com' }
];

const  attendances = [
  { email: 'georg@academlo.com', attendance: true },
  { email: 'andrea@gmail.com', attendance: false }
];

function mergeData(users, attendances) {
  
  let list = [];

  for (let i=0; i < users.length; i++){
    if ()
  }
   
  return list;
}
console.log(mergeData(users, attendances));



[
  { name: 'Georg', email: 'georg@academlo.com', attendance: true },
  { name: 'Andrea', email: 'andrea@gmail.com', attendance: false }
]

*/

/*
// EJERCICIO 2 
function findSecondWord(text) {
  
  let firstSplit = text.indexOf(" ");
   
  let textFirstSplit = text.slice(firstSplit + 1);
   
  let secondSplit = textFirstSplit.indexOf(" "); 
   
  let Endlength = (textFirstSplit.length -1) -secondSplit
   
  let textSecondSplit = textFirstSplit.slice(textFirstSplit + 1, -Endlength)
   
  return textSecondSplit;
}
console.log(findSecondWord('Hola llamo Brenda'));

*/

/*
function findSecondWord(text) {
  
  let index = text.indexOf(" ");

  let corte = text.slice(index+1);

  let index2 = corte.indexOf(" ");
  
  let log = corte.length - index2+1;

  let final = corte.slice(index2+1, -log);
   
  return final;
}

console.log(findSecondWord("Hola, me llamo Brenda"));
*/


/*
function findMostCommonAge(students) {
  let repitAge = [];
      
  for (let i=0; i < students.length; i++){
    let x = i+1;
     let tempAge = students[i].age;

    if (tempAge === students[x].age){
      repitAge.push(tempAge)
    }
  }
return repitAge;
}
console.log(findMostCommonAge(students));
//console.log(students[1+1].age)
*/



/*
function findMostCommonAge(students) {
  let obj = {}
    let countRep = 0
    let countAge = 0
    for (i = 0; i< students.length; i++){
      if (obj[students[i].age]){
          obj[students[i].age]++
            } else{ obj[students[i].age] = 1
              }  for(const key in obj){
                if (countRep < obj[key]) {
                  countRep = obj[key]
                  countAge = key
            }
          }
      } return Number(countAge)
  }

  console.log(findMostCommonAge(students));
  */
 /*
 Tu labor es contar cuántas aplicaciones hay por cada canal, para esto debes apoyarte en la propiedad channel.

Algo muy importante es que solo tomaremos en cuenta a los usuarios que hayan enviado su aplicación, si no tienen aplicación no es de nuestro interés saber mediante que canal nos conocieron.

Ejemplo:
Si la función recibe el arreglo anterior devolveríamos un objeto como el siguiente, ya que 2 aplicaciones provienen de twittter y una de youtube (No contamos a Andrea porque no ha enviado su aplicación):
*/
 
/*
  let array = [20,100];

  let array2 =  [5];

  let array3 = [30,10];

  
  
  function sumArray (array,array2,array3){
    
  sumArr1 = 0;
  sumArr2 = 0;
  sumArr3 = 0;

  for (i=0; i<array.length; i++){
    sumArr1 += array[i];
  }

  for (j=0; j<array2.length; j++){
    sumArr2 += array2[j];
  }

  for (x=0; x<array3.length; x++){
    sumArr3 += array3[x];
  }
return sumArr1+sumArr2+sumArr3;
}
console.log(sumArray(array,array2,array3));

*/

/*
let text = "Hola a todos";

function reverseText(text) {
  
  let newString = "";
  
  for (let i = text.length - 1; i >= 0; i--) { 
      newString += text[i]; 
  }
  
  return newString; 
}

console.log(reverseText(text));

*/

/*
let date = '28/04/2022'

function formatDate (date) {

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];

let arrayDate = [];

let day = '';

arrayDate = date.split("/");

day = parseInt(arrayDate[1]);

return months[day-1]+ ' '+arrayDate[0]+ ','+' '+arrayDate[2];
  
}
console.log(formatDate(date));

*/

let phrase = "El viejo lobo, es el lobo mas solitario";

let word = "lobo";

function countWordInPhrase (phrase, word) {
  
  let counter = 0;

  let arrayPhrase = [];

  let phraseJoin = '';

  arrayPhrase = phrase.split(' ');

  phraseJoin = arrayPhrase.join();

  arrayPhrase = phraseJoin.split(',');

  for (let i=0; i<arrayPhrase.length; i++){
    if(arrayPhrase[i] === word){
      counter++;
    }
  }
return counter;
}

console.log(countWordInPhrase(phrase,word));