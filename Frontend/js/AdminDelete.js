

function cancellaCategorie() {
    let nomeCat = document.getElementById('categ').value;
    fetch('http://localhost:3000/cancellaCategoria/' + nomeCat, {
  method: 'DELETE',
}).then(res => res.json())
setTimeout(function() { window. location. reload() }, 750);
}