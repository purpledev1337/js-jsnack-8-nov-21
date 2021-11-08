// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

const carsCatalog = [
    {
        "marca": "fiat",
        "modello": "punto",
        "alimentazione": "benzina"
    },
    {
        "marca": "fiat",
        "modello": "punto",
        "alimentazione": "gpl"
    },
    {
        "marca": "fiat",
        "modello": "punto",
        "alimentazione": "elettrico"
    },
    {
        "marca": "fiat",
        "modello": "cinquecento",
        "alimentazione": "benzina"
    },
    {
        "marca": "fiat",
        "modello": "cinquecento",
        "alimentazione": "metano"
    },
    {
        "marca": "renault",
        "modello": "clio",
        "alimentazione": "diesel"
    },
    {
        "marca": "renault",
        "modello": "clio",
        "alimentazione": "benzina"
    },
    {
        "marca": "renault",
        "modello": "clio",
        "alimentazione": "gpl"
    },
    {
        "marca": "renault",
        "modello": "modus",
        "alimentazione": "diesel"
    },
    {
        "marca": "renault",
        "modello": "modus",
        "alimentazione": "metano"
    }
];
console.log(carsCatalog);
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

const carsGasoline = carsCatalog.filter((auto) => {
    return auto.alimentazione == "benzina";
})

const carsDiesel = carsCatalog.filter((auto) => {
    return auto.alimentazione == "diesel";
})

const carsOthers = carsCatalog.filter((auto) => {
    return auto.alimentazione !== "benzina" && auto.alimentazione !== "diesel";
})

// Infine stampa separatamente i 3 array.
console.log(carsGasoline);
console.log(carsDiesel);
console.log(carsOthers);
