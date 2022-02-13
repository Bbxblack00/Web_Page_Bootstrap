

function categoria() {
    this.oldNome;
    this.neoNome;
    this.neoDescrizione;
}

function prodotto() {
    this.id;
    this.nome;
    this.categoriaDiAppartenenza;
    this.descrizione;
    this.prezzo;
}

var url = 'http://localhost:3000/';

function cambiaNomeCategorie() {
    let cat = new categoria();
    cat.oldNome = document.getElementById('categ2').value;
    cat.neoNome = document.getElementById('neoNome').value;
    cat.neoDescrizione = document.getElementById('neoDescrizione').value;

    console.log(cat);

    fetch(url + 'modificaCategoria', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cat)
    })
    document.getElementById('neoNome').innerHTML = ' ';
    setTimeout(function() { window. location. reload() }, 750);
}

function cambiaNomeProdotti() {
    let prod = new prodotto();
    prod.id = document.getElementById('idModifica').value;
    prod.categoriaDiAppartenenza = document.getElementById('categ4').value;
    prod.nome = document.getElementById('neoNome').value;
    prod.descrizione = document.getElementById('neoDescrizione').value;
    prod.prezzo = document.getElementById('price').value;

    console.log(prod.id);

    fetch(url + 'modificaProdotto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(prod)
    })
    setTimeout(function() { window. location. reload() }, 1250);
}