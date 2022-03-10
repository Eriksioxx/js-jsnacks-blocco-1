console.log('JS OK!');

// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli
// se può partecipare o no alla festa.

const nameRequest = prompt('Inserire nome invitato').trim().toLowerCase();

const namesParty = ['lucio', 'giovanni', 'aldo', 'giacomo', 'fantozzi', 'erik'];

console.log('Invitato: ' + nameRequest);

let namesInvito = false;

for (let i = 0; i < namesParty.length; i++) {

    if (nameRequest === namesParty[i]) {
        console.log('sei dentro il Fight Club!');
        namesInvito = true;
    }
}
if (namesInvito === false) {
    console.log('Maria io esco!');
}