

function categoria() {
    this.oldNome;
    this.neoNome
}

var url = 'http://localhost:3000/';

function cambiaNomeCategorie() {
    let cat = new categoria();
    cat.oldNome = document.getElementById('categ2').value;
    cat.neoNome = document.getElementById('neoNome').value;

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