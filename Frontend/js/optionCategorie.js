

let datiCategorie = fetch('http://localhost:3000/categoria').then(

    async result => {
        
        if(result.ok == true){
            let risultato = await result.json();

            console.log('hai ottenuto i dati');

            risultato.return.forEach(element => {
                document.getElementById('categ').innerHTML += `<option value="${element.nome}">${element.nome}</option>`;
            });

            risultato.return.forEach(element => {
                document.getElementById('categ2').innerHTML += `<option value="${element.nome}">${element.nome}</option>`;
            });

            risultato.return.forEach(element => {
                document.getElementById('categ3').innerHTML += `<option value="${element.nome}">${element.nome}</option>`;
            });

            risultato.return.forEach(element => {
                document.getElementById('categ4').innerHTML += `<option value="${element.nome}">${element.nome}</option>`;
            });

            risultato.return.forEach(element => {
                document.getElementById('newTableCateg').innerHTML += `<tr>
                                                                            <th scope="row">${element.idCategoria}</th>
                                                                            <td>${element.nome}</td>
                                                                            <td>${element.descrizione}</td>
                                                                        </tr>`;
            });
            
        }

        console.log(result);
    }
).catch(
    error => {
        console.log(error);
    }
);