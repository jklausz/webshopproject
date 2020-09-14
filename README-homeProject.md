# Home project megvalósítása

## Kezdés

### Skeleton projekt
A feladathoz használhatjátok a Githubon található, előrekonfigurált skeleton projektemet (https://github.com/karolyp/express-hbs-knex-skeleton).
Ha ebből a projektből szeretnétek kiindulni, többféle megoldás is létezik a munka elkezdéséhez:

1. Legegyszerűbb elforkolni a projektet: ilyenkor a saját Github profilotok alá lemásolódik a repository, VAGY
2. Klónozzátok le a repository-t, nevezzétek át, töröljétek a .git mappát és inicializáljátok új repository-ként:

- `git clone https://github.com/karolyp/express-hbs-knex-skeleton.git <projekt neve>`
- `cd <projekt neve>`
- `rm -rf .git`
- `git init`

### Verziókezelés Githubbal
Hogyha létrehoztok egy új repository-t Githubon a projektnek, hozzá kell adni egy új remote-ot:
- `git remote add origin <Github repository URL-je>`
- `git push -u origin master`

### MySQL
A MySQL szerverhez érdemes egy port-forwardolt Docker konténert indítani.
Ha ez nem kivitelezhető/bonyolult, akkor simán is telepíthetünk a gépre MySQL-t (https://dev.mysql.com/downloads/mysql/).

### Adatbáziskapcsolat beállítása
Másoljátok le a .env.template fájlt és nevezzétek át .env-re:

`cp .env.template .env`

A fájlban találhattok egy key-value felsorolást, amiket az adatbázis eléréshez ki kell tölteni.
A dotenv lib ezeket fogja beparse-olni, és envvarként beállítani a process számára.

### Függőségek telepítése
`npm install`

### Indítás
`npm start`

### KnexJS
A Knex [referenciáját](http://knexjs.org/) referenciája könnyen használható, kereshető. Használjátok, tényleg jó!

### Handlebars
A fontosabb helperekről (mint pl. with, each) találtok doksit a Handlebars [guide oldalán](https://handlebarsjs.com/guide/).

### Tippek
- Érdemes előbb a funkciókat, és az ezekhez tartozó entitásokat meghatározni. Készítsetek diagramokat (pl. ERD), jól fog jönni!
- Az egyedek közti kapcsolatokat próbáljátok pontosan meghatározni
- A diagramok alapján hozzátok létre a migrációkat (táblákat)
- Nem feltétlenül kell kompozit kulcs (esetleg ha nem valami nagyon triviális), használhattok nyugodtan auto_increment id-kat
- Ezután definiáljátok (lehetőleg entitásonként) a route-okat
    - app.js-ben importoljuk be, és rendeljük össze a route-ot a handler-rel:
    `app.use('/myRoute', myRouteRouter);`
- Az adatbázisműveletek **aszinkronok**, és mindig egy **Promise**-t adnak vissza! 
Mindig **await**eljük a Promise-t (ilyenkor a function **async** lesz!), vagy használjuk a **.then()** metódust. 
- Last but not least: keep it simple! Ne bonyolítsátok túl!
