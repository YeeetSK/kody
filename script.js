// Zoznam kódov a ich možné významy
const codes = {
    "10-0": [
        "VIZUÁLNÍ KONTAKT ZTRACEN", 
        "VIZUALNI KONTAKT ZTRACEN", 
        "ZTRACENÝ KONTAKT", 
        "KONTAKT VIZUÁLNĚ ZTRACEN"
    ],
    "10-1": [
        "ZMĚNTE FREKVENCI", 
        "ZMENTE FREKVENCI", 
        "FREKVENCE ZMĚNĚNA", 
        "ZMĚNA RÁDIOVÉ FREKVENCE"
    ],
    "10-3": [
        "TICHO NA VYSÍLAČCE", 
        "TICHO NA VYSILACCE", 
        "VYSÍLAČKA TICHO", 
        "BEZ HLASU NA VYSÍLAČCE"
    ],
    "10-4": [
        "ANO, ROZUMÍM", 
        "ANO, ROZUMIM", 
        "ROZUMÍM", 
        "POTVRZUJI PŘÍJEM"
    ],
    "10-5": [
        "PŘESTÁVKA", 
        "PRESTAVKA", 
        "PAUZA", 
        "ODDYCH"
    ],
    "10-6": [
        "ZANEPRÁZDNĚN", 
        "ZANEPRÁZDNEN", 
        "MÁM PRÁCI", 
        "ZANEPRÁZDNĚNÝ"
    ],
    "10-7": [
        "MIMO SLUŽBU", 
        "MIMO SLUZBU", 
        "MIMO SLUZBY",
        "NENÍ VE SLUŽBĚ", 
        "SLUŽBA UKONČENA"
    ],
    "10-8": [
        "VE SLUŽBĚ", 
        "VE SLUZBE", 
        "V AKCI", 
        "SLUŽBA AKTIVNÍ"
    ],
    "10-9": [
        "OPAKUJTE HLÁŠENÍ", 
        "OPAKUJTE HLASENI", 
        "ZOPAKUJTE HLÁŠENÍ", 
        "PROSÍM O OPAKOVÁNÍ"
    ],
    "10-10": [
        "NAPADENÍ", 
        "NAPADENI", 
        "ÚTOK", 
        "ÚTOK NA OSOBU"
    ],
    "10-11": [
        "TRAFFIC STOP", 
        "ZASTAVENÍ VOZIDLA", 
        "KONTROLA VOZIDLA", 
        "DOPRAVNÍ KONTROLA"
    ],
    "10-12": [
        "SAMOSTATNÁ HLÍDKA", 
        "SAMOSTATNA HLIDKA", 
        "HLÍDKA JEDNOTLIVCE", 
        "HLÍDKA SOLO"
    ],
    "10-13": [
        "HLÁŠENÍ STŘELBY", 
        "HLASENI STRELBY", 
        "STŘELBA", 
        "STŘELBA NA MÍSTĚ"
    ],
    "10-14": [
        "PRODEJ DROG", 
        "PRODEJ DROG BEZ DIÁKRITIKY", 
        "DROGOVÝ OBCHOD", 
        "OBCHOD S DROGAMI"
    ],
    "10-15": [
        "PŘEVOZ OSOBY", 
        "PREVOZ OSOBY", 
        "TRANSPORT OSOBY", 
        "OSOBA PŘEVÁŽENA"
    ],
    "10-16": [
        "KRÁDEŽ VOZIDLA", 
        "KRADEZ VOZIDLA", 
        "ODCIZENÍ VOZIDLA", 
        "UKRADENÉ AUTO"
    ],
    "10-17": [
        "PODEZŘELÁ OSOBA", 
        "PODEZRELA OSOBA", 
        "OSOBA PODEZŘELÁ", 
        "MOŽNÉ PODEZŘENÍ NA OSOBU"
    ],
    "10-20": [
        "MOJE LOKACE", 
        "MOJE POLOHA", 
        "LOKACE", 
        "JSEM ZDE"
    ],
    "10-22": [
        "IGNORUJTE PŘÍKAZ", 
        "IGNORUJTE PRIKAZ", 
        "ZRUŠIT PŘÍKAZ", 
        "NEŘIĎTE SE PŘÍKAZEM"
    ],
    "10-23": [
        "DORAZIL NA MÍSTO", 
        "DORAZIL NA MISTO", 
        "JSEM NA MÍSTĚ", 
        "PŘÍTOMNÝ NA MÍSTĚ"
    ],
    "10-27": [
        "KONTROLA ŘIDIČÁKU", 
        "KONTROLA RIDICAKU", 
        "ZKONTROLUJTE ŘIDIČÁK", 
        "OVĚŘENÍ ŘIDIČSKÉHO OPRÁVNĚNÍ"
    ],
    "10-28": [
        "KONTROLA SPZ", 
        "KONTROLA REGISTRAČNÍ ZNAČKY", 
        "ZKONTROLUJTE SPZ", 
        "REGISTRAČNÍ ZNAČKA KONTROLA"
    ],
    "10-29": [
        "ZKONTROLUJTE OSOBU", 
        "OSOBA KONTROLA", 
        "KONTROLA OSOBY", 
        "OSOBA PROVĚŘENÍ"
    ],
    "10-30": [
        "OSOBA JE HLEDANÁ", 
        "OSOBA HLEDANA", 
        "HLEDANÁ OSOBA", 
        "OSOBA NA SEZNAMU HLEDANÝCH"
    ],
    "10-32": [
        "JE POTŘEBA ASISTENCE", 
        "JE POTREBA ASISTENCE", 
        "POTŘEBUJEME POMOC", 
        "VYŽADUJE SE POMOC"
    ],
    "10-41": [
        "ZAHÁJENÍ PATROLY", 
        "ZAHAJENI PATROLY", 
        "PATROLA ZAČALA", 
        "START HLÍDKY"
    ],
    "10-42": [
        "UKONČENÍ PATROLY", 
        "UKONCENI PATROLY", 
        "PATROLA UKONČENA", 
        "KONEC HLÍDKY"
    ],
    "10-43": [
        "PODEJTE INFORMACE", 
        "PODAJTE INFORMACE", 
        "POSKYTNOUT INFORMACE", 
        "DEJTE MI INFORMACE"
    ],
    "10-44": [
        "ÚMRTÍ OSOBY", 
        "UMRTI OSOBY", 
        "SMRT OSOBY", 
        "OSOBA ZEMŘELA"
    ],
    "10-50": [
        "DOPRAVNÍ NEHODA", 
        "DOPRAVNI NEHODA", 
        "AUTONEHODA", 
        "NEHODA NA SILNICI"
    ],
    "10-52": [
        "JE POTŘEBA EMS", 
        "JE POTREBA EMS", 
        "POTŘEBUJEME ZÁCHRANÁŘE", 
        "VYŽADUJEME ZÁCHRANNOU SLUŽBU"
    ],
    "10-60": [
        "OZBROJEN STŘELNOU ZBRANÍ", 
        "OZBROJEN STRELNOU ZBRANI", 
        "OSOBA MÁ ZBRAŇ", 
        "STŘELNÁ ZBRAŇ PŘÍTOMNÁ"
    ],
    "10-62": [
        "ÚNOS OSOBY", 
        "UNOS OSOBY", 
        "OSOBA BYLA UNESENA", 
        "OSOBA V OHROŽENÍ"
    ],
    "10-66": [
        "NEBEZPEČNÝ ŘIDIČ", 
        "NEBEZPECNY RIDIC", 
        "ŘIDIČ OHROŽUJE", 
        "AGRESIVNÍ ŘIDIČ"
    ],
    "10-68": [
        "OZBROJENÁ LOUPEŽ", 
        "OZBROJENA LOUPEZ", 
        "LOUPEŽ SE ZBRANÍ", 
        "OSOBA SLOUPENÁ"
    ],
    "10-69": [
        "LOUPEŽ NEMOVITOSTI", 
        "LOUPEZ NEMOVITOSTI", 
        "NEMOVITOST OKRADENA", 
        "NEMOVITOST VYKRADENA"
    ],
    "10-70": [
        "PĚŠÍ ÚTĚK", 
        "PESI UTEK", 
        "ÚTĚK PĚŠKY", 
        "OSOBA PRCHÁ PĚŠKY"
    ],
    "10-71": [
        "DOZOR V OBLASTI", 
        "DOZOR NA MÍSTĚ", 
        "DOZOROVAT OBLAST", 
        "MONITOROVÁNÍ OBLASTI"
    ],
    "10-80": [
        "UJÍŽDĚNÍ VE VOZIDLE", 
        "UJIZDENI VE VOZIDLE", 
        "VOZIDLO PRCHÁ", 
        "PRONÁSLEDOVÁNÍ VOZIDLA"
    ],
    "10-90": [
        "NAPOMENUTÍ OSOBY", 
        "NAPOMENUTI OSOBY", 
        "POZOR NA OSOBU", 
        "OSOBA NAPOMENUTA"
    ],
    "10-95": [
        "OSOBA ZAJIŠTĚNA", 
        "OSOBA ZAJISTENA", 
        "OSOBA ZADRŽENÁ", 
        "ZADRŽENÁ OSOBA"
    ],
    "10-97": [
        "NA CESTĚ...", 
        "NA CESTE...", 
        "JSEM NA CESTĚ", 
        "SMĚŘUJI NA MÍSTO"
    ],
    "10-98": [
        "POKRAČUJI V PATROLE", 
        "POKRACUJI V PATROLE", 
        "HLÍDKA POKRAČUJE", 
        "JSEM NA PATROLE"
    ],
    "10-99": [
        "POLICISTA V NOUZI", 
        "POLICISTA V NOUZI", 
        "POMOC PRO POLICISTU", 
        "POLICISTA POTŘEBUJE POMOC"
    ],
    "Kód 1": [
        "BEZ MAJÁKU BEZ SIRÉN", 
        "BEZ MAJAKU BEZ SIREN", 
        "DISKRÉTNÍ REŽIM", 
        "BEZ MAJÁKŮ"
    ],
    "Kód 2": [
        "MAJÁKY BEZ SIRÉNY", 
        "MAJAKY BEZ SIRENY", 
        "BEZ SIRÉNY", 
        "SVĚTELNÁ SIGNALIZACE BEZ ZVUKU"
    ],
    "Kód 3": [
        "MAJÁKY A HLASITÉ SIRÉNY", 
        "MAJAKY A HLASITE SIRENY", 
        "PLNÉ SVĚTLA A ZVUK", 
        "PLNÁ SIGNALIZACE"
    ],
    "Kód 4": [
        "SITUACE POD KONTROLOU", 
        "SITUACE KONTROLOVÁNA", 
        "STAV KONTROLOVÁN", 
        "BEZPEČNÁ SITUACE"
    ],
    "Kód 5": [
        "FELONY STOP", 
        "ZASTAVENÍ PŘI PODEZŘENÍ Z TĚŽKÉHO ZLOČINU", 
        "ZASTAVENÍ PODEZŘELÉHO", 
        "KONTROLA PODEZŘELÉHO Z TĚŽKÉHO TRESTNÉHO ČINU"
    ],
    "Kód 6": [
        "ZAHÁJENÍ VYŠETŘOVÁNÍ", 
        "ZACATEK VYSETROVANI", 
        "VYŠETŘOVÁNÍ ZAHÁJENO", 
        "START VYŠETŘOVÁNÍ"
    ],
    "Kód 11": [
        "JE POTŘEBA SWAT", 
        "JE POTREBA SWAT", 
        "POTŘEBUJEME SWAT", 
        "VOLÁNÍ PRO SWAT"
    ],
    "Kód 12": [
        "FALEŠNÝ POPLACH", 
        "FALESNY POPLACH", 
        "POPISOVANÁ SITUACE NENASTALA", 
        "NEOPRÁVNĚNÝ POPLACH"
    ]
};


// Ukladá aktuálny a posledný kód pre porovnanie
let currentCode = '';
let lastCode = ''; // Ukladá predchádzajúci kód

document.getElementById('startBtn').addEventListener('click', startPractice);
document.getElementById('checkAnswerBtn').addEventListener('click', checkAnswer);
document.getElementById('nextBtn').addEventListener('click', loadNewCode);

// Spustenie cvičenia
function startPractice() {
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('practiceArea').style.display = 'block';
    loadNewCode();
}

// Načítanie náhodného kódu zo zoznamu
function loadNewCode() {
    document.getElementById('result').innerText = '';
    document.getElementById('correctAnswer').innerText = '';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('userInput').value = '';

    const keys = Object.keys(codes);
    let newCode = '';

    // Zabezpečí, že nový kód nebude rovnaký ako predchádzajúci
    do {
        newCode = keys[Math.floor(Math.random() * keys.length)];
    } while (newCode === lastCode);

    currentCode = newCode; // Aktualizuje aktuálny kód
    lastCode = currentCode; // Nastaví posledný kód pre ďalšie porovnanie

    document.getElementById('codeDisplay').innerText = `Aký je význam kódu ${currentCode}?`;
}

// Kontrola odpovede hráča
function checkAnswer() {
    const userInput = document.getElementById('userInput').value.trim().toUpperCase();
    
    if (codes[currentCode].includes(userInput)) {
        document.getElementById('result').innerText = '✅ Správne!';
        document.getElementById('correctAnswer').innerText = '';
    } else {
        document.getElementById('result').innerText = '❌ Nesprávne.';
        document.getElementById('correctAnswer').innerText = `Správna odpoveď: ${codes[currentCode].join(' / ')}`;
    }

    document.getElementById('nextBtn').style.display = 'block';
}
