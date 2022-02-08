

let datiCategorie = fetch('http://localhost:3000/categoria').then(

    async result => {
        
        if(result.ok == true){
            let risultato = await result.json();

            console.log('hai ottenuto i dati');

            risultato.return.forEach(element => {
                document.getElementById('categ').innerHTML += `<div class="col">
                                                                    <div class="card">
                                                                        <div class="card-header">
                                                                        ${element.nome}
                                                                        </div>
                                                                        <div class="card-body">
                                                                        <p class="card-text">${element.descrizione}</p>
                                                                        <a href="#" class="btn btn-primary" style="background-color: rgba(0, 0, 0, .85) !important; color: white; border-color: #333 !important;">Guarda il catalogo</a>
                                                                        </div>
                                                                    </div>
                                                                </div>`;
            });
            
        }else{
            document.getElementById('esito').innerHTML = 'Email o Password errati... riprova';
            throw new Error();
        }

        console.log(result);
    }
).catch(
    error => {
        console.log(error);
    }
);
