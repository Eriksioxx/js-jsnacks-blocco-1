console.log('JS OK!');

// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire 
// un numero, se è dispari inseriscilo nell’array.

let numbers = [];

for (let i = 0; i < 6; i++) {
    console.log(i);

    const numero = parseInt(prompt('Inserisci numero?'));

    if (numero % 2 !== 0) {
        numbers.push(numero);
    }

    console.log(numbers);
}
