/* ukljucujem express modul */
const express = require('express'); 

/* Modul koji omogucava spajanje trenutne direktorijumske putanje sa poddirektorijumom i nekim fajlom koji se nalayi unutar */
const path = require('path');

/* pravim jednu aplikaciju pomocu funkcije express, pozivom ove funkcije dobija se aplikacija */                               
const app = express(); 

/* Ovo je primer jednog route hendlera. Pravimo jednu rutu tako sto nad app objektom pozivam metod GET. 
Kada neko dodje na rute '/', pristize jedan paket 'request & response'  */
// Serve index.html
app.get('/', (request, response) => {

    response.sendFile(path.join(__dirname, 'CV.html'));

    /* Setujemo status 200, to znaci da je sve u redu da odgovaramo pozitivno na upucen zahtev */ 
    response.status(200);

    /* localhost:3000 */

});

/* Kada aplikacije stigne request da treba da se posalje response i ako aplikacija nije uspela da pronadje
nijednu rutu koja odgovara i sadrzaj koji odgovara vratice error */
app.use((request, response) => {
    response.status(404);
    response.send('Page not Found!');

   /* localhost:3000/assets/MediaDeviceInfo.css */
});

/* Port na kom aplikacija slusa saobracaj */
app.listen(3000);
