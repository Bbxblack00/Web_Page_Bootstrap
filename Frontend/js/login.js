const { redirect } = require("statuses");

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

        result => {

            console.log(result.ok);
            
            if(result.ok == true){
                let risultato = result.json();
                console.log(risultato);
                // document.getElementById('esito').innerHTML = 'Autenticazione Avvenuta con Successo';
                // wondow.redirect("../index.html");
                window.alert('Autenticazione Avvenuta con Successo');
                
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