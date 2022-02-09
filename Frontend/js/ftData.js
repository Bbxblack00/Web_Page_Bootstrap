

function utente() {
    this.nome;
    this.tipologia;
    this.cognome;
    this.codice;
    this.nazione;
    this.via;
    this.cap;
    this.comune;
    this.provincia;
    this.telefonofisso;
    this.cellulare;
    this.email;
    this.username;
    this.password;
}

function azienda() {
    this.ragionesociale;
    this.tipologia;
    this.partitaiva;
    this.nazione;
    this.via;
    this.cap;
    this.comune;
    this.provincia;
    this.telefonofisso;
    this.cellulare;
    this.email;
    this.username;
    this.password;
}

var url = 'http://localhost:3000/';

function inviaUtente() {
    let ut = new utente();
    ut.nome = document.getElementById('nome').value;
    ut.tipologia = document.getElementById('tipologia').value;
    ut.cognome = document.getElementById('cognome').value;
    ut.codice = document.getElementById('codice').value;
    ut.nazione = document.getElementById('nazione').value;
    ut.via = document.getElementById('via').value;
    ut.cap = document.getElementById('cap').value;
    ut.comune = document.getElementById('comune').value;
    ut.provincia = document.getElementById('provincia').value;
    ut.telefonofisso = document.getElementById('telefonofisso').value;
    ut.cellulare = document.getElementById('cellulare').value;
    ut.email = document.getElementById('email').value;
    ut.username = document.getElementById('username').value;
    ut.password = document.getElementById('password').value;

    console.log(ut);

    fetch(url + 'inserimentoPrivato', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ut)
    })
}

function inviaAzienda() {
    let az = new azienda();
    az.ragionesociale = document.getElementById('ragionesoc').value;
    az.tipologia = document.getElementById('tipologia').value;
    az.partitaiva = document.getElementById('partitaiva').value;
    az.nazione = document.getElementById('nazione').value;
    az.via = document.getElementById('via').value;
    az.cap = document.getElementById('cap').value;
    az.comune = document.getElementById('comune').value;
    az.provincia = document.getElementById('provincia').value;
    az.telefonofisso = document.getElementById('telefonofisso').value;
    az.cellulare = document.getElementById('cellulare').value;
    az.email = document.getElementById('email').value;
    az.username = document.getElementById('username').value;
    az.password = document.getElementById('password').value;

    console.log(az);

    fetch(url + 'inserimentoAzienda', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(az)
    })
}