Kurze Schritt-für-Schritt-Beschreibung von Erstellung:

Kurz: Der Kalender hat klare Struktur (HTML) und einfaches Design (CSS). Das Layout ist flexibel und leicht anpassbar (hoffentlich).
Wcihtig ist `meta name viewport` fü adaptives design!

1. Projekt angelegt: Die Dateien `index.html`, `style.css` und `README.md` erstellt.
2. HTML erstellt: Ein Kalender-Container, ein Kopf-div mit Monat und Pfeil-Buttons, und ein Grid mit 7 Spalten.
3. Leere Zellen (`empty`) eingefügt, damit die Tage richtig beginnen.
4. Globales CSS *: Standardwerte zurücksetzen, Inhalt zentrieren, Hintergrundfarbe setzen.
5. Kalender-Container: Ecken abgerundet, Schatten und Innenabstand (Padding) gesetzt.
6. Kopfbereich: Nav-Buttons und Monatsname zentriert, Trennlinie hinzugefügt.
7. Grid genutzt: `grid-template-columns: repeat(7, 1fr)` und Abstand mit `gap`.
8. Datumszellen: Quadratisch durch `aspect-ratio`, Text zentriert mit Flexbox.
9. Hervorhebungen: Wochenenden rot, heutiger Tag mit `.today` grün markiert.
10. Interaktion: Hover-Effekte für Buttons und Tage (Farbe ändert sich).
11. Responsives Verhalten: Flexible Einheiten (z. B. `rem`, `%`, `vw`) und `aspect-ratio` verwendet.
12. Adaptives Disign für mobiles Geräte hinzufügt. `@media`. Das wird sich nach die Große von 400px ändern zur mobiles Aussicht.
13. Ich habe einen neuen Block `header` hinzugefügt und die Richtung von `flex` als Spalte geändert.

