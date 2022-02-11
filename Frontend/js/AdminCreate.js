
function categoria() {
    this.nome;
    this.descrizione;
}

function prodotto() {
    this.nome;
    this.categoria;
    this.descrizione;
}

function nuovaCategoria() {

    let url = 'http://localhost:3000/nuova/';
    let cate = new categoria();
    cate.nome = document.getElementById('nome').value;
    cate.descrizione = document.getElementById('descrizione').value;

    console.log(cate);

    fetch(url + 'categoria', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cate)
    })

    setTimeout(function() { window. location. reload() }, 750);
}

function nuovoProdotto() {

    let url = 'http://localhost:3000/nuova/';
    let prod = new prodotto();
    prod.nome = document.getElementById('nome').value;
    prod.descrizione = document.getElementById('descrizione').value;
    prod.categoria = document.getElementById('categ').value;

    console.log(prod);

    fetch(url + 'prodotto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(prod)
    })

    setTimeout(function() { window. location. reload() }, 750);
}