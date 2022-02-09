
function categoria() {
    this.nome;
    this.descrizione;
}

var url = 'http://localhost:3000/nuova/';

function nuovaCategoria() {
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