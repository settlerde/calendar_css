//diese variable wird in ganzem code verwendet
const today = new Date();
console.log(today);
//hier habe ich erst variable today genutzt um jahreszahl zu erhalten
const year = today.getFullYear();
document.getElementById('jahr1').innerHTML = year;
document.getElementById('jahr2').innerHTML = year;
document.getElementById('jahr3').innerHTML = year;
//mit funktion wird es geprüft
console.log(year);
//hier ziehe ich monat vom today mit eine methode '+1' bedeutet dass monate sollen von index 1 beginnen
const monat = today.getMonth() + 1;
console.log(monat);
// Andreas hat das geschrieben um ein 0 als string vor monatszahl im text zu stellen
let monatString = monat;
if (monat < 10) {
    monatString = '0' + monat;
}
//mit diesem code werden die zahlen der monate im text täglich ändern
document.getElementById('monat1').innerHTML = monatString;
document.getElementById('monat2').innerHTML = monatString;
//mit diesem code werden die zahlen der tage im text täglich ändern
const tag = today.getDate();
document.getElementById('tag1').innerHTML = tag;
document.getElementById('tag2').innerHTML = tag;
//ein array von tage der woche wurde erstellt die werden innerhalb text sich mit hilfe von .getDay methode ändern
const tagDe = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
const tagNummer = today.getDay();
document.getElementById('tagDe').innerHTML = tagDe[tagNummer];
document.getElementById('tagDe1').innerHTML = tagDe[tagNummer];
console.log(tagDe[tagNummer]);
//hier habe ich ein array erstellt damit die monate im h2-kalender sich ändern zur deutsche sprache könnten
const monatListeDe = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'October', 'November', 'Dezember'];
let month = today.getMonth();
document.getElementById('monthNow').innerHTML = monatListeDe[month];
const monthDisplay = document.getElementById('monthNow');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
function updateCalendar() {
    monthDisplay.innerText = monatListeDe[month];
//die zwei unten sind buttons methode die monate umschalten
}
prevBtn.addEventListener(
    'click', () => {
        month --;
        if (month < 0) {
            month = 11;
        }
        updateCalendar();
    }
);
nextBtn.addEventListener(
    'click', () => {
        month ++;
        if (month > 11) {
            month = 0;
        }
        updateCalendar();
    }
);
//dies wird tage berechnen seit jahresbeginn
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
//neu kalender wurde gestaltet
/*const numbersGrid = document.getElementById('numbers-grid');
function updaterCalendar() {
    monthDisplay.innerText = monatListeDe[month];
    numbersGrid.innerHTML = '';
    let daysInMonth = new Date(2024, month + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('date');
        dayDiv.innerText = day;
        numbersGrid.appendChild(dayDiv);
    }
    updateCalendar();
}*/