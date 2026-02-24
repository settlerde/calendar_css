const today = new Date();
console.log(today);

const year = today.getFullYear();
document.getElementById('jahr1').innerHTML = year;
document.getElementById('jahr2').innerHTML = year;
document.getElementById('jahr3').innerHTML = year;

const monat = today.getMonth() + 1;
console.log(monat);

let monatString = monat;
if (monat < 10) {
    monatString = '0' + monat;
}
document.getElementById('monat1').innerHTML = monatString;
document.getElementById('monat2').innerHTML = monatString;

const tag = today.getDate();
console.log(tag);
document.getElementById('tag1').innerHTML = tag;

const tagDe = ['Sontag', 'Montag', 'Dienstag', 'Mitwoch', 'Donnerstag', 'Freitag', 'Samstag'];
const tagNummer = today.getDay();
document.getElementById('tagDe').innerHTML = tagDe[tagNummer];
document.getElementById('tagDe1').innerHTML = tagDe[tagNummer];
console.log(tagDe[tagNummer]);

let date = today.toDateString();
document.getElementById('month-year').innerHTML = date;
console.log(date);

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const jahr = day * 365;
let daysCount = Math.floor(new Date() / jahr);
document.getElementById("days").innerHTML = daysCount;
console.log(daysCount);
