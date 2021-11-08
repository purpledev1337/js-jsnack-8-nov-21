// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.

const allPeople = [
    {
        "nome": "Andrea",
        "cognome": "Bianchi",
        "eta": 14
    },
    {
        "nome": "Antonio",
        "cognome": "Rossi",
        "eta": 18
    },
    {
        "nome": "Claudio",
        "cognome": "Neri",
        "eta": 51
    },
    {
        "nome": "Filippo",
        "cognome": "Verdi",
        "eta": 38
    },
    {
        "nome": "Giacomo",
        "cognome": "Rossi",
        "eta": 17
    },
    {
        "nome": "Nicola",
        "cognome": "Verdi",
        "eta": 24
    },
    {
        "nome": "Leonardo",
        "cognome": "Bianchi",
        "eta": 64
    },
    {
        "nome": "Alessandro",
        "cognome": "Neri",
        "eta": 48
    },
    {
        "nome": "Francesco",
        "cognome": "Tappi",
        "eta": 31
    },
    {
        "nome": "Riccardo",
        "cognome": "Rossi",
        "eta": 12
    }
];
console.log(allPeople);
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const driversPeople = allPeople.map((license) => {
    if (license.eta < 18) {
        return `${license.nome} ${license.cognome} non può guidare`;
    } else {
        return `${license.nome} ${license.cognome} può guidare`;
    }
})

console.log(driversPeople);
