const today = new Date();
console.log(today);

const year = today.getFullYear();
document.getElementById('jahr1').innerHTML = year;
document.getElementById('jahr2').innerHTML = year;
document.getElementById('jahr3').innerHTML = year;

console.log(year);

const monat = today.getMonth() + 1;
console.log(monat);

let monatString = monat;
if (monat < 10) {
    monatString = '0' + monat;
}
document.getElementById('monat1').innerHTML = monatString;
document.getElementById('monat2').innerHTML = monatString;

const tag = today.getDate();
document.getElementById('tag1').innerHTML = tag;
document.getElementById('tag2').innerHTML = tag;

const tagDe = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
const tagNummer = today.getDay();
document.getElementById('tagDe').innerHTML = tagDe[tagNummer];
document.getElementById('tagDe1').innerHTML = tagDe[tagNummer];
console.log(tagDe[tagNummer]);

const monatListeDe = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'October', 'November', 'Dezember'];
const month = today.getMonth();
document.getElementById('monthNow').innerHTML = monatListeDe[month];

function getDayOfYear() {
    const startYear = new Date(today.getFullYear(), 0, 1);
    const diffMs = today - startYear;
    const oneDayMs = 1000 * 60 * 60 * 24;
    const dayNumber = Math.floor(diffMs / oneDayMs) + 1;

    return dayNumber;
}
const dayCount = getDayOfYear();
document.getElementById('dayNumber').innerHTML = dayCount;
console.log(dayCount);



