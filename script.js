const today = new Date();
console.log(today);
const year = today.getFullYear();
console.log(year);
document.getElementById('jahr1').innerHTML = year;
document.getElementById('jahr2').innerHTML = year;
document.getElementById('jahr3').innerHTML = year;
const monat = today.getMonth() +1;
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