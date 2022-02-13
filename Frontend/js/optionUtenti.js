

let datiProdotti = fetch('http://localhost:3000/utente').then(

    async result => {
        
        if(result.ok == true){
            let risultato = await result.json();

            console.log('hai ottenuto i dati');

            risultato.return.forEach(element => {
                document.getElementById('newTableUtente').innerHTML += `<tr>
                                                                            <th scope="row">${element.idUtenti}</th>
                                                                            <td>${element.nome}</td>
                                                                            <td>${element.password}</td>
                                                                            <td><button style="background-color: rgba(0, 0, 0, .85) !important; color: white; border-color: #333 !important;" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                                            </svg>
                                                                          </button>
                                                                          <button style="background-color: rgba(0, 0, 0, .85) !important; color: white; border-color: #333 !important;" type="button" class="mx-2 btn btn-primary" onclick="inaffidablitàUtente(${element.idUtenti})">
                                                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                                                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                                                                        </svg>
                                                                          </button>
                                                                          </td>
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