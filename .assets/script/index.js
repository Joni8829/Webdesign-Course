// Denne arrayene treffer ID'ene til de forskjellige sidene, og gjør det lettere å navigere mellom dem
const sider = ['hjem', 'innhold', 'del1', 'del2', 'del3', 'del4', 'konklusjon']; // Laget på en enkel måte slik at det er lett å legge til flere deler, må bare legge til i arrayen.

// Gjeldene side blir satt til 0, som er hjemsiden, og oppdateres når man navigerer mellom sidene
let gjeldendeSide = 0;

function oppdaterSide(index) {
    /* Går gjennom alle klassene */
    document.querySelectorAll('.side').forEach(s => s.classList.remove('vis'));
    /* Legger til vis klassen på den valgte siden, knytter side ID'ene til en index */
    document.getElementById(sider[index]).classList.add('vis');
    // Skrur av og på knappene basert på hvilken side man er på
    document.getElementById('hjem-knapp').disabled = index === 0;
    document.getElementById('forrige-knapp').disabled = index === 0;
    // Skrur av og på neste knappen hvis det ikke er en neste side
    document.getElementById('neste-knapp').disabled = index === sider.length - 1;
    // Skrur av og på scrollen på hjemsiden
    document.body.classList.toggle("ingen-scroll", index === 0);
}

// -- 🔽 PRØVE-EKSAMEN 🔽 --
function hjem() {
    gjeldendeSide = 0;
    oppdaterSide(gjeldendeSide);
}

function neste() {
    if (gjeldendeSide < sider.length - 1) oppdaterSide(++gjeldendeSide);
}

function forrige() {
    if (gjeldendeSide > 0) oppdaterSide(--gjeldendeSide);
}

// Hjem, Neste og forrige fungerer ikke, hint hint, lag funksjon for det

// -- 🔼 PRØVE-EKSAMEN 🔼  --

// Legger til event listeners for knappene for å navigere mellom sidene ved hjelp av piltastene
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') neste(); // For å gå til neste side
    else if (e.key === 'ArrowLeft') forrige(); // For å gå til forrige side
    else if (e.key === 'h' || e.key === 'H') hjem(); // For å gå til hjemsiden ved å trykke 'h'
    else if (e.key === 'ArrowUp') hjem(); // For å gå til hjemsiden ved å trykke pil opp
    else if (e.key === 'ArrowDown') window.location.href = '../index.html'; // For å gå til hovedsiden for kurs ved å trykke pil ned
    else if (e.key === 'k' || e.key === 'K') window.location.href = '../index.html'; // For å gå til hovedsiden for kurs ved å trykke 'k'
});

// Setter hjemsiden som standard når nettsiden lastes
oppdaterSide(0);

// Legger til event listener for menyknappen for å åpne og lukke innholdet
const menuButton = document.getElementById('menu-button');
const innhold = document.getElementById('innholdfortegnelse');

if (menuButton && innhold) {
  menuButton.addEventListener('click', () => {
    innhold.classList.toggle('open');
  });
}

// Legger til event listeners for alle lenkene i innholdsfortegnelsen
document.getElementById('innhold-hjem').addEventListener('click', () => oppdaterSide(0));
document.getElementById('innhold-kursinnhold').addEventListener('click', () => oppdaterSide(1));
document.getElementById('innhold-del1').addEventListener('click', () => oppdaterSide(2));
document.getElementById('innhold-del2').addEventListener('click', () => oppdaterSide(3));
document.getElementById('innhold-del3').addEventListener('click', () => oppdaterSide(4));
document.getElementById('innhold-del4').addEventListener('click', () => oppdaterSide(5));
document.getElementById('innhold-konklusjon').addEventListener('click', () => oppdaterSide(6));