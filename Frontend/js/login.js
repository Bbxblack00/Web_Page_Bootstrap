

function utente() {
    this.email;
    this.password;
}

function invia(){

    let url = 'http://localhost:3000/accesso';

    let messaggio = '';

    let ut = new utente();
    ut.email    = document.getElementById('email').value;
    ut.password = document.getElementById('password').value;

    url += '?';

    for(let i in ut){
        url += i + '=' + ut[i] + '&';
    }

    url = url.slice(0,-1);

    fetch(url).then(

        async result => {

            console.log(result.ok);
            
            if(result.ok == true){
                let risultato = await result.json();
                console.log(risultato);
                let idLogUser = risultato.return[0].idUtenti;
                window.alert('Autenticazione Avvenuta con Successo');
                if (idLogUser == 1) {
                    window.location.assign(`http://localhost:5500/Web_Page_Bootstrap/Frontend/pagineSecondarie/accesso/paginacontrollo/paginaAmministrazione.html`);
                }else{
                    window.location.assign('http://localhost/Web_Page_Bootstrap/Frontend/pagineSecondarie/dashboard.html');
                }
            }else{
                document.getElementById('esito').innerHTML = 'Email o Password errati... riprova';
                throw new Error();
            }
        }
    ).catch(
        error => {
            console.log(error);
        }
    );
    
}

