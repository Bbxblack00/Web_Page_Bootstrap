


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
        } else {
            res.status(400);
            res.send({
                messaggio: 'tutto male',
                return: risultato
            });
        }
    });
});

app.get('/prodotto', (request,res)=>{

    let istruzione = `select * from prodotti;`;

    connessione.query(istruzione, (errore, risultato)=>{
        if (risultato.length > 0){
            res.send({
                messaggio: 'tutto ok',
                return: risultato
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

app.get('/utente', (request,res)=>{

    let istruzione = `select * from utenti;`;

    connessione.query(istruzione, (errore, risultato)=>{
        if (risultato.length > 0){
            res.send({
                messaggio: 'tutto ok',
                return: risultato
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

app.delete('/cancellaProdotto/:nCat', (request,res) =>{

    let nomeCat = request.params.nCat;

    console.log(nomeCat);

    let istruzione = `delete from prodotti where categoriaDiAppartenenza = '${nomeCat}';`;

    connessione.query(istruzione, (errore, risisultato)=>{
        res.send({
            messaggio: 'ok dati cancellati correttamente'
        });
    });
});

app.delete('/cancellaILProdotto', (request,res) =>{

    let nomeCat = request.query.nome;
    let idProd = parseInt(request.query.id);

    console.log(nomeCat);

    let istruzione = `delete from prodotti where categoriaDiAppartenenza = '${nomeCat}' and idProdotti = ${idProd};`;

    connessione.query(istruzione, (errore, risisultato)=>{
        res.send({
            messaggio: 'ok dati cancellati correttamente'
        });
    });
});

app.get('/modalProd', (request,res) =>{

    let idProd = parseInt(request.query.id);

    let istruzione = `select * from prodotti where idProdotti = ${idProd};`;

    console.log(istruzione);

    connessione.query(istruzione, (errore, risultato)=>{
        if (risultato.length > 0){
            console.log(risultato);
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

app.post('/nuova/categoria', (request,res)=>{
    let nome = request.body.nome;
    let descrizione = request.body.descrizione;

    let istruzione = `insert into categorie (nome, descrizione) values ('${nome}', '${descrizione}');`;

    connessione.query(istruzione, (errore, risisultato)=>{
        res.send({
            messaggio: 'ok dati inseriti correttamente'
        });
    });
});

app.post('/nuova/prodotto', (request,res)=>{
    let nome = request.body.nome;
    let cat = request.body.categoria;
    let descrizione = request.body.descrizione;

    let istruzione = `insert into prodotti (nome, categoriaDiAppartenenza, descrizione) values ('${nome}', '${cat}', '${descrizione}');`;

    connessione.query(istruzione, (errore, risisultato)=>{
        res.send({
            messaggio: 'ok dati inseriti correttamente'
        });
    });
});

app.post('/modificaCategoria', (request,res)=>{
    
    let oldNome = request.body.oldNome;
    let neoNome = request.body.neoNome;
    let neoDescrizione = request.body.neoDescrizione;

    let istruzione = `update categorie set nome = '${neoNome}' and descrizione = '${neoDescrizione}' where nome = '${oldNome}';`;
    let istruzione2 = `update prodotti set categoriaDiAppartenenza = '${neoNome}' where categoriaDiAppartenenza = '${oldNome}';`;

    connessione.query(istruzione, (errore, risultato)=>{});

    connessione.query(istruzione2, (errore, risultato)=>{
        res.send({
            messaggio: 'ok dati aggiornati correttamente'
        });
    });
});

app.post('/modificaProdotto', (request,res)=>{
    let id = request.body.id;
    let nome = request.body.nome;
    let categoriaDiAppartenenza = request.body.categoriaDiAppartenenza;
    let descrizione = request.body.descrizione;
    let prezzo = parseFloat(request.body.prezzo);

    let istruzione = `update prodotti set nome = '${nome}', categoriaDiAppartenenza = '${categoriaDiAppartenenza}', descrizione = '${descrizione}', prezzo = ${prezzo} where idProdotti = ${id};`;
    console.log(istruzione);

    connessione.query(istruzione, (errore, risultato)=>{
        res.send({
            messaggio: 'ok dati aggiornati correttamente'
        });
    });
});

app.listen(3000, () => {                    // imposto il server in ascolto sulla porta 3000
    console.log('server is running')        // 3000
});