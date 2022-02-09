


const express = require('express');         // import libreria epress
const cors = require('cors');               // import libreria cors
const bodyparser = require('body-parser');  // import libreria body-parser
const db = require('mysql2');               // import libreria mysql
const { request } = require('express');

const app = express();                      // creo l'istanza di un server

app.use(cors());                            // imposto al server la libreria cors
app.use(bodyparser.json());                 // imposto al server la libreria body-parser, nello specifico configuro json per 

const connessione = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root',
    database: 'ecommerce',
    port: 3306
});

app.post('/inserimentoPrivato', (request,res)=>{
    
    let nome = request.body.nome;
    let tipo = request.body.tipologia;
    let cognome = request.body.cognome;
    let codice = request.body.codice;
    let nazione = request.body.nazione;
    let via = request.body.via;
    let cap = request.body.cap;
    let comune = request.body.comune;
    let provincia = request.body.provincia;
    let telefono = request.body.telefonofisso;
    let cellulare = request.body.cellulare;
    let email = request.body.email;
    let username = request.body.username;
    let password = request.body.password;

    let istruzione = `insert into utenti (nome, tipologia, cognome, codicefiscale, nazione, via, cap, comune, provincia, telefonofisso, cellulare, email, username, password) values ('${nome}', '${tipo}', '${cognome}', '${codice}', '${nazione}', '${via}', ${cap}, '${comune}', '${provincia}', ${telefono}, ${cellulare}, '${email}', '${username}', '${password}');`;

    console.log(istruzione);

    connessione.query(istruzione, (errore, risultato)=>{
        res.send({
            messaggio: 'ok dati inseriti correttamente'
        });
    });
});

app.post('/inserimentoAzienda', (request,res)=>{
    
    let ragione = request.body.ragionesociale;
    let tipo = request.body.tipologia;
    let partitaiva = request.body.partitaiva;
    let nazione = request.body.nazione;
    let via = request.body.via;
    let cap = request.body.cap;
    let comune = request.body.comune;
    let provincia = request.body.provincia;
    let telefono = request.body.telefonofisso;
    let cellulare = request.body.cellulare;
    let email = request.body.email;
    let username = request.body.username;
    let password = request.body.password;

    let istruzione = `insert into utenti (ragionesociale, tipologia, partitaiva, nazione, via, cap, comune, provincia, telefonofisso, cellulare, email, username, password) values ('${ragione}', '${tipo}', '${partitaiva}', '${nazione}', '${via}', ${cap}, '${comune}', '${provincia}', ${telefono}, ${cellulare}, '${email}', '${username}', '${password}');`;

    console.log(istruzione);

    connessione.query(istruzione, (errore, risultato)=>{
        // console.log(risultato);
        res.send({
            messaggio: 'ok dati inseriti correttamente'
        });
    });
});

app.get('/categoria', (request,res)=>{

    let istruzione = `select * from categorie;`;

    connessione.query(istruzione, (errore, risultato)=>{
        if (risultato.length > 0){
            res.send({
                messaggio: 'tutto ok',
                return: risultato
            });
            console.log(risultato);
        } else {
            res.status(400);
            res.send({
                messaggio: 'tutto male',
                return: risultato
            });
        }
    });
});

app.get('/accesso', (request,res)=>{
    
    let mail = request.query.email;
    let password = request.query.password;

    let istruzione = `select * from utenti where email = '${mail}' and password = '${password}'`;

    console.log(istruzione);

    connessione.query(istruzione, (errore, risultato)=>{
        if (risultato.length > 0){
            res.send({
                messaggio: 'tutto ok',
                return: risultato,
                
            });
            
        } else {
            res.status(400);
            res.send({
                messaggio: 'tutto male',
                return: risultato
            });
        }
    });
});

app.delete('/cancellaCategoria/:nCat', (request,res) =>{

    let nomeCat = request.params.nCat;

    console.log(nomeCat);

    let istruzione = `delete from categorie where nome = '${nomeCat}';`;
    let istruzione2 = `delete from prodotti where categoriaDiAppartenenza = '${nomeCat}';`;

    connessione.query(istruzione, (errore, risisultato)=>{});
    connessione.query(istruzione2, (errore, risisultato)=>{
        res.send({
            messaggio: 'ok dati cancellati correttamente'
        });
    });
});

app.post('/nuova/categoria', (request,res)=>{
    let nome = request.body.nome;
    let descrizione = request.body.descrizione;

    let istruzione = `insert into categorie (nome, descrizione) values ('${nome}', '${descrizione}')`;

    connessione.query(istruzione, (errore, risisultato)=>{
        res.send({
            messaggio: 'ok dati inseriti correttamente'
        });
    });
});

app.post('/modificaCategoria', (request,res)=>{
    
    let oldNome = request.body.oldNome;
    let neoNome = request.body.neoNome;

    let istruzione = `update categorie set nome = '${neoNome}' where nome = '${oldNome}';`;
    let istruzione2 = `update prodotti set categoriaDiAppartenenza = '${neoNome}' where categoriaDiAppartenenza = '${oldNome}';`;

    connessione.query(istruzione, (errore, risultato)=>{});

    connessione.query(istruzione2, (errore, risultato)=>{
        res.send({
            messaggio: 'ok dati aggiornati correttamente'
        });
    });
});

app.listen(3000, () => {                    // imposto il server in ascolto sulla porta 3000
    console.log('server is running')        // 3000
});