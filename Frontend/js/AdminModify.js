

function categoria() {
    this.oldNome;
    this.neoNome;
    this.neoDescrizione;
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