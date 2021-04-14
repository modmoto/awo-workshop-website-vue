# Beispielprojekt Vue Webseite

## Installation
- Lade das Projekt herunter und öffne es mit VS
- öffne ein Terminal über Terminal -> New Terminal
![VSCode](readme-images\newterminal.png)
- führe folgenden Befehl aus:

```
npm install
```

warte einen Moment ;)

## Webseite starten
Nachdem du alles installiert hast, tippe im Terminal folgenden Befehl
```
npm run serve
```

sobald du grüne Schrift siehst, kannst du deinen Browser öffnen und auf http://localhost:8080/ deine webseite sehen. Du kannst auch einfach den Link hinter "Local:" mit strg + click öffnen. 

![VSCode](readme-images\terminalok.JPG)


Sobald du den Code in VS änderst und dateien speicherst, sollte sich die Webseite automatisch neuladen und du kannst deine Änderungen sofort sehen.

## Webseite bauen für einen Webserver/ftp

Um die Webseite komplett zu bauen und wie unsere webseite.html in den Übungen zu öffnen, tippe wieder das in die Console:

```
npm run build
```

Es sollte wieder ein grünes OK erscheinen und nun hast du zudem noch einen `dist` ordner in der Ordnerstruktur links

![VSCode](readme-images\build.JPG)

Wenn du nun den Ordner im explorer öffnest und die `index.html` doppel klickst, sollte der Browser aufgehen und deine Webseite anzeigen. Diesen Ordner kannst du nun auf deinen FTP/Webserver schieben und dann sollte die Webseite von außen öffnen können. Heroku übernimmt das alles für uns (siehe die Basics hier: https://github.com/modmoto/awo-workshop/tree/main/00_basics#heroku)
