/* ukljucujem express modul */
const express = require('express'); 

/* pravim jednu aplikaciju pomocu funkcije express, pozivom ove funkcije dobija se aplikacija */                               
const app = express(); 

/* Ovo je primer jednog route hendlera. Pravimo jednu rutu tako sto nad app objektom pozivam metod GET. 
Kada neko dodje na rute '/', pristize jedan paket 'request & response'  */
app.get('/', (request, response) => {

    /* Ovde su informacije kako je neko dosao do nas. Inace ovo je objekat u js  */
    let podaci = {

        /* Pomocu ovog dolazimo do IP adrese */
        ip: request.ip,

        /* Ovde su sadrzani parametri koje nas rute sadrzi */ 
        parametri: request.params,

        /* Ovde dolazimo do delova naseg url-a */
        query: request.query
    };

    /* Setujemo status 200, to znaci da je sve u redu da odgovaramo pozitivno na upucen zahtev */ 
    response.status(200);

    /* Saljemo oderedjeni tekst na primer ovaj objekat 'podaci' kodiran kao JSON. Samim tim smo 
    poslali odgovor na zahtev nekom ko je uputio zahtev na rute '/' */
    response.send(JSON.stringify(podaci));

    /* localhost:3000 */

});

/* Drugi route hendler samo sto je drugaciji koren. Na primer uputice zahtev localhost:3000/user/goran */
app.get('/user/:username', (request, response) => {

    /* Definisemo jednu promenjivu username koja iz requesta pristupa parametrima i iy parametara uzmi username */
    let username = request.params.username;

    /* Setujemo status 200, to znaci da je sve u redu da odgovaramo pozitivno na upucen zahtev */ 
    response.status(200);

    /* Response salje jedan string koji ce nam se ispisati */
    response.send('Dostavljam podatke za korisnika a imenom: ' + username);

     /* localhost:3000/user/goran */
});

/* PRIMER STATICKOG RUTIRANJA */

/* App pored get rute imace i da koristi staticki resurs koji se nalazi na putanji
 /assets */
app.use('/assets', express.static('assets/'));

/* localhost:3000/assets/main.css */

/* Kada aplikacije stigne request da treba da se posalje response i ako aplikacija nije uspela da pronadje
nijednu rutu koja odgovara i sadrzaj koji odgovara vratice error */
app.use((request, response) => {
    response.status(404);
    response.send('Page not Found!');

   /* localhost:3000/assets/MediaDeviceInfo.css */
});

/* Port na kom aplikacija slusa saobracaj */
app.listen(3000);
