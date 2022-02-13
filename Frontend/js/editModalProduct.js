

function modificaIlProdotto(id, nome, catAppartenenza, descrizione, prezzo) {


    console.log(nome);
    document.getElementById('idModifica').value = `${id}`;
    document.getElementById('neoNome').value = `${nome}`;
    document.getElementById('categ4').value = `${catAppartenenza}`;
    document.getElementById('price').value = `${prezzo}`;
    document.getElementById('neoDescrizione').value = `${descrizione}`;
}