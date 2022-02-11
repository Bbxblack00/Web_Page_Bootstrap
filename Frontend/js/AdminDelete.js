

function cancellaCategorie() {
  let nomeCat = document.getElementById('categ').value;
  fetch('http://localhost:3000/cancellaCategoria/' + nomeCat, {
    method: 'DELETE',
  }).then(res => res.json())

  setTimeout(function() {window.location.reload()}, 750);
}

function cancellaProdotti() {
  let nomeCat = document.getElementById('categ2').value;
  fetch('http://localhost:3000/cancellaProdotto/' + nomeCat, {
    method: 'DELETE',
  }).then(res => res.json())

  setTimeout(function() {window.location.reload()}, 750);
}

function cancellaIlProdotto() {
  let nomeCat = document.getElementById('categ3').value;
  let idCat = document.getElementById('idProdotto').value;
  fetch('http://localhost:3000/cancellaProdotto?nome=' + nomeCat + '&id=' + idCat, {
    method: 'DELETE',
  }).then(res => res.json())

  setTimeout(function() {window.location.reload()}, 750);
}