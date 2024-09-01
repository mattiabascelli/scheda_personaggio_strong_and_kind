// JavaScript source code

function creaPdf() {
    var doc = new jsPDF();
    doc.setFont("Verdana");
    doc.setFontType("normal");
    //Presa dati dal form e impostazione variabili
    var nomePersonaggio = document.getElementById("NomePersonaggio").value;
    var origine = document.getElementById("Origine").value;
    var forza = document.getElementById("Forza").value;
    var agilita = document.getElementById("Agilita").value;
    var istinto = document.getElementById("Istinto").value;
    var cotenna = document.getElementById("Cotenna").value;
    var specie = document.getElementById("Specie").value;
    var indole = document.getElementById("Indole").value;
    var bonusForza = '';
    var bonusIstinto = '';
    var bonusCotenna = '';
    var bonusAgilita = '';
    var bonusSpecie = '';
    var bonusIndole = '';
    var PF = 0;
    var bc = 0;
    var bi = 0;
    var rDanno = '';
    var segni = 0;
    var listaSegni = '';
    var extraS = '';
    var extraI = '';

    //Bonus della Specie
    if (specie == 'Volpe') {
        bonusSpecie = 'Evasione: Una volta per combattimento la volpe puo scomparire dalla vista degli avversari e rimanere nascosto.';
        extraS = 'Al prossimo tiro per eseguire la sua Mossa la Volpe aggiungera 1d6 al tiro del dado.';
    } else if (specie == 'Orso Bruno Marsicano') {
        bonusSpecie = 'Zanne e Artigli: durante il combattimento, se colpisce, l Orso Bruno Marsicano puo effettuare un attacco extra';
        extraS = 'corpo a corpo che infligge 1d6 con il morso.';
    } else if (specie == 'Lupo Appenninico') {
        bonusSpecie = 'Richiamo del Branco: Una volta per combattimento il Lupo ulula per motivare i suoi compagni donando loro 1d4 ';
        extraS = 'da aggiungere ai tiri per combattere.';
    } else if (specie == 'Cinghiale') {
        bonusSpecie = 'Carica Selvaggia: L avversario deve effettuare una prova di Agilita con Difficolta 14. Se fallisce subisce 1d6 di danno ';
        extraS = 'e salta il suo prossimo turno. La carica puo essere effettuata solo ad un bersaglio non adiacente.';
    } else if (specie == 'Cervo Mascio') {
        bonusSpecie = 'Incornata Feroce: Attacco che infligge 1d8 di danno e l’avversario viene spinto dietro di 1, 5 mt.';
    } else if (specie == 'Cervo Femmina') {
        bonusSpecie = 'Istinto di Protezione: Guadagni un bonus di +4 alla prossima prova di Agilita o Istinto.';
    } else {
        bonusSpecie = 'Volonta Assoluta: Se la creatura sta per subire un danno fatale, prima di incassare i danni effettua un attacco bonus.';
        extraS = 'Se colpisce si considera il danno massimo dell arma, segno o pergamena.'

    }

 
    //Oggetto Random nell'inventario
        num_evento = Math.trunc(7 * Math.random()) + 1;
        switch (num_evento) {
            case 1:
                oggetto = '[  1 ] Parrozzo______________________________________________________________';
                break;
            case 2:
                oggetto = '[  6 ] Bocconotti____________________________________________________________';
                break;
            case 3:
                oggetto = '[  1 ] Salame bello duro (1d4 danno)_________________________________________';
                break;
            case 4:
                oggetto = '[  1 ] Pentolino con Sagne e Fagioli_________________________________________';
                break;
            case 5:
                oggetto = '[  4 ] Marrocche da Arrostire________________________________________________';
                break;
            case 6:
                oggetto = '[  1 ] Torrone Spaccadenti (1d4 danno)_______________________________________';
                break;
            default:
                oggetto = '[  1 ] Bottiglia di Ratafia__________________________________________________';
                break;
        }

  


    if (forza == 8) {
        bonusForza = '- 1';
    } else if (forza == 10) {
        bonusForza = '+ 0';
    } else if (forza == 12) {
        bonusForza = '+ 1';
    } else if (forza == 14) {
        bonusForza = '+ 2';
    } else {
        bonusForza = '+ 3';
    }

    if (agilita == 8) {
        bonusAgilita = '- 1';
    } else if (agilita == 10) {
        bonusAgilita = '+ 0';
    } else if (agilita == 12) {
        bonusAgilita = '+ 1';
    } else if (agilita == 14) {
        bonusAgilita = '+ 2';
    } else {
        bonusAgilita = '+ 3';
    }

    if (istinto == 8) {
        bonusIstinto = '- 1';
        bi = 5;
    } else if (istinto == 10) {
        bonusIstinto = '+ 0';
        bi = 0;
    } else if (istinto == 12) {
        bonusIstinto = '+ 1';
        bi = 1;
    } else if (istinto == 14) {
        bonusIstinto = '+ 2';
        bi = 2;
    } else {
        bonusIstinto = '+ 3';
        bi = 3;
    }

    if (cotenna == 8) {
        bonusCotenna = '- 1';
        bc = 5;
    } else if (cotenna == 10) {
        bonusCotenna = '+ 0';
        bc = 0;
    } else if (cotenna == 12) {
        bonusCotenna = '+ 1';
        bc = 1;
    } else if (cotenna == 14) {
        bonusCotenna = '+ 2';
        bc = 2;
    } else {
        bonusCotenna = '+ 3';
        bc = 3;
    }

    //Bonus dell'indole
    if (indole == 'Bruto') {
        bonusIndole = 'La difficolta delle prove di Forza e Cotenna che non sono prove di combattimento sono ridotte di 2.';
        if (bc == 5) {
            PF = 6
        } else { PF = 7 + bc; }
        rDanno = '1d4';
    } else if (indole == 'Scaltro') {

        if (bc == 5) {
            PF = 7
        } else { PF = 8 + bc; }
        bonusIndole = 'La difficolta nelle prove di Agilita e Istinto che non sono prove di combattimento sono ridotte di 2. ';
        extraI = 'Inoltre, lo scaltro aggiunge il suo modificatore di  Agilita al danno con le armi, invece che il modificatore di forza.';
        rDanno = '1d4'
    } else {
        if (bi == 5) {
            segni = 2;
        } else { segni = 3 + bi }
        listaSegni = 'Luce [illumina entro 8 mt] - Cura [1d6 + Bonus Istinto] - Fulmine [1d8 + Bonus Istinto | Distanza 18 mt]'
        if (bc == 5) {
            PF = 4
        } else { PF = 5 + bc; }
        rDanno = '1d4-1';
        bonusIndole = 'La difficolta nelle prove di Istinto che non so di combattimento sono ridotte di 2.';
        extraI = 'Le prove di Istinto sull utilizzo di pergamene sono ridotte di 2.';
    } 

    var doc = new jsPDF();
    doc.setFont("Arial");
    doc.setFontType("normal");
    doc.setFontSize(10);
    doc.text(70, 20, 'STRONG & KIND - www.hellfireabruzzo.it');
    doc.setFontSize(16);
    doc.text(20, 30, 'Nome Personaggio: ' + nomePersonaggio);
    doc.setFontType("normal");
    doc.setFontSize(14);
    doc.text(20, 40, 'Specie: ' + specie + ' - Indole: ' + indole + ' - Comune di Origine: ' + origine);
    doc.text(70, 50, 'Forza: ' + forza + ' [' + bonusForza + ']  - Agilita: ' + agilita + ' [' + bonusAgilita + ']');
    doc.text(70, 60, 'Istinto: ' + istinto + ' [' + bonusIstinto + '] - Cotenna: ' + cotenna + ' [' + bonusCotenna + ']');
    doc.setFontSize(12);
    doc.text(20, 70, 'Mossa Speciale');
    doc.setFontSize(10);
    doc.text(20, 80, '#' + bonusSpecie);
    doc.text(20, 90, ' ' + extraS);
    doc.setFontSize(12);
    doc.text(20, 100, 'Bonus Indole');
    doc.setFontSize(10);
    doc.text(20, 110, '#'+ bonusIndole);
    doc.text(20, 120, ' '+ extraI);
    doc.setFontSize(14);
    doc.text(40, 130, 'Vita Iniziale: ' + PF + ' [    ] - Riduzione Danno: ' + rDanno + ' + [Armatura:       ]');
    doc.setFontSize(12);
    doc.text(20, 140, 'Arma Primaria:______________________________________________ Danno [    ]');
    doc.text(20, 150, 'Arma Secondaria:____________________________________________ Danno [    ]');
    doc.text(20, 160, 'SEGNI GIORNALIERI [' + segni + ']');
    doc.setFontSize(10);
    doc.text(20, 170, listaSegni);
    doc.setFontSize(14);
    doc.text(20, 180, 'EQUIPAGGIAMENTO:');
    doc.setFontSize(10);
    doc.text(20, 190, '[  1 ] Sacco a Pelo__________________________________________________________');
    doc.text(20, 200, '[  1 ] Torcia e Pietra Focaia________________________________________________');
    doc.text(20, 210, oggetto);
    doc.text(20, 220, '[    ] ________________________________[    ]______________________________________');
    doc.text(20, 230, '[    ] ________________________________[    ]______________________________________');
    doc.text(20, 240, '[    ] ________________________________[    ]______________________________________');
    doc.text(20, 250, '[       ] SOLDI [      ] COMPLIMENDI');
    
    // Save the PDF
    doc.save('Scheda_' + nomePersonaggio + '_' + specie + '_' + indole + '.pdf');

}

function Pigrizia() {

    var personaggio = {
        nomi: ["Fabrizio", "Gianfranco", "Alfio", "Carmelina","Picozzo", "Genoveffa", "Sandrino", "Santino", "Peppino", "Tonino", "Zopito", "Francucio", "Gregoriuccio", "Peppiniella", "Nino", "Sabatino", "Sundina", "Bettarella", "Luisona", "Sterzino", "Gian Giacomo", "Guerino", "Ginuccia", "Marinella", "Mariano", "Michelina", "Saretta", "Catia", "Cassandra", "Guastaldo"],
        cognomi: ["Quattrodita", "Tajacitrun", "Dumarrocche", "Treddenti", "Cocciasturta", "Billcapill", "Cocciambrella", "u Fregnon", "Du de Copp", "Malaffare", "Malinquella", "Roscie", "Frishtalla", "Magna Pallotte", "Turdarell", "Spaccasegge", "Pepe ngul","Mezzavocch","Asse a Bastun","Fregnarill","Rattacacie"],
        origine: ["Cerratina", "Gessopalena", "Castilenti", "Ortona", "Manoppello Paese", "Giulianova", "Roccaraso", "Rosciano", "Penne", "Farindola", "Pratola Peligna", "Casoli", "Celano", "Tagliacozzo", "Avezzano", "Sulmona", "Lanciano", "Fossacesia", "Notaresco", "Cellino Attanasio", "Pineto", "Tortoreto Lido", "Francavilla al Mare", "Pescara Vecchia", "Chieti Alta", "Silvi Marina", "Spoltore", "Ripa Teatina", "Tollo", "Villamagna",
            "Mozzagrogna", "Castle Frentano", "Pretoro", "Guardiagrele", "Paglieta", "Pollutri", "San Salvo", "Scanno", "Villetta Barrea", "Scafa", "Alanno", "Serramonacesca", "Nocciano", "Ticchione", "Casalincontrada"],
        specie: ["Volpe", "Lupo Appenninico", "Cinghiale", "Orso Bruno Marsicano", "Pecora Nera"],
        indole: ["Bruto","Scaltro","Mistico"]
    }

    var nomePersonaggio = personaggio.nomi[Math.floor(Math.random() * personaggio.nomi.length)] + " " + personaggio.cognomi[Math.floor(Math.random() * personaggio.cognomi.length)];
    var origine = personaggio.origine[Math.floor(Math.random() * personaggio.origine.length)];
    var specie = personaggio.specie[Math.floor(Math.random() * personaggio.specie.length)];
    var indole = personaggio.indole[Math.floor(Math.random() * personaggio.indole.length)];
    var forza = 0;
    var agilita = 0;
    var istinto = 0;
    var cotenna = 0;
    var bonusForza = '';
    var bonusIstinto = '';
    var bonusCotenna = '';
    var bonusAgilita = '';
    var bonusSpecie = '';
    var bonusIndole = '';
    var PF = 0;
    var bc = 0;
    var bi = 0;
    var rDanno = '';
    var segni = 0;
    var listaSegni = '';
    var extraS = '';
    var extraI = '';

    if (indole == "Bruto") {
        forza = 16;
        agilita = 12;
        istinto = 8;
        cotenna = 12;
    } else if (indole == "Scaltro") {
        forza = 10;
        agilita = 16;
        istinto = 14;
        cotenna = 10;
    } else {
        forza = 8;
        agilita = 12;
        istinto = 16;
        cotenna = 12; 
    }

    var doc = new jsPDF();
    doc.setFont("Verdana");
    doc.setFontType("normal");

    //Bonus della Specie
    if (specie == 'Volpe') {
        bonusSpecie = 'Evasione: Una volta per combattimento la volpe puo scomparire dalla vista degli avversari e rimanere nascosto.';
        extraS = 'Al prossimo tiro per eseguire la sua Mossa la Volpe aggiungera 1d6 al tiro del dado.';
    } else if (specie == 'Orso Bruno Marsicano') {
        bonusSpecie = 'Zanne e Artigli: durante il combattimento, se colpisce, l Orso Bruno Marsicano puo effettuare un attacco extra';
        extraS = 'corpo a corpo che infligge 1d6 con il morso.';
    } else if (specie == 'Lupo Appenninico') {
        bonusSpecie = 'Richiamo del Branco: Una volta per combattimento il Lupo ulula per motivare i suoi compagni donando loro 1d4 ';
        extraS = 'da aggiungere ai tiri per combattere.';
    } else if (specie == 'Cinghiale') {
        bonusSpecie = 'Carica Selvaggia: L avversario deve effettuare una prova di Agilita con Difficolta 14. Se fallisce subisce 1d6 di danno ';
        extraS = 'e salta il suo prossimo turno. La carica puo essere effettuata solo ad un bersaglio non adiacente.';
    } else if (specie == 'Cervo Mascio') {
        bonusSpecie = 'Incornata Feroce: Attacco che infligge 1d8 di danno e l’avversario viene spinto dietro di 1, 5 mt.';
    } else if (specie == 'Cervo Femmina') {
        bonusSpecie = 'Istinto di Protezione: Guadagni un bonus di +4 alla prossima prova di Agilita o Istinto.';
    } else {
        bonusSpecie = 'Volonta Assoluta: Se la creatura sta per subire un danno fatale, prima di incassare i danni effettua un attacco bonus.';
        extraS = 'Se colpisce si considera il danno massimo dell arma, segno o pergamena.'

    }


    //Oggetto Random nell'inventario
    num_evento = Math.trunc(7 * Math.random()) + 1;
    switch (num_evento) {
        case 1:
            oggetto = '[  1 ] Parrozzo______________________________________________________________';
            break;
        case 2:
            oggetto = '[  6 ] Bocconotti____________________________________________________________';
            break;
        case 3:
            oggetto = '[  1 ] Salame bello duro (1d4 danno)_________________________________________';
            break;
        case 4:
            oggetto = '[  1 ] Pentolino con Sagne e Fagioli_________________________________________';
            break;
        case 5:
            oggetto = '[  4 ] Marrocche da Arrostire________________________________________________';
            break;
        case 6:
            oggetto = '[  1 ] Torrone Spaccadenti (1d4 danno)_______________________________________';
            break;
        default:
            oggetto = '[  1 ] Bottiglia di Ratafia__________________________________________________';
            break;
    }




    if (forza == 8) {
        bonusForza = '- 1';
    } else if (forza == 10) {
        bonusForza = '+ 0';
    } else if (forza == 12) {
        bonusForza = '+ 1';
    } else if (forza == 14) {
        bonusForza = '+ 2';
    } else {
        bonusForza = '+ 3';
    }

    if (agilita == 8) {
        bonusAgilita = '- 1';
    } else if (agilita == 10) {
        bonusAgilita = '+ 0';
    } else if (agilita == 12) {
        bonusAgilita = '+ 1';
    } else if (agilita == 14) {
        bonusAgilita = '+ 2';
    } else {
        bonusAgilita = '+ 3';
    }

    if (istinto == 8) {
        bonusIstinto = '- 1';
        bi = 5;
    } else if (istinto == 10) {
        bonusIstinto = '+ 0';
        bi = 0;
    } else if (istinto == 12) {
        bonusIstinto = '+ 1';
        bi = 1;
    } else if (istinto == 14) {
        bonusIstinto = '+ 2';
        bi = 2;
    } else {
        bonusIstinto = '+ 3';
        bi = 3;
    }

    if (cotenna == 8) {
        bonusCotenna = '- 1';
        bc = 5;
    } else if (cotenna == 10) {
        bonusCotenna = '+ 0';
        bc = 0;
    } else if (cotenna == 12) {
        bonusCotenna = '+ 1';
        bc = 1;
    } else if (cotenna == 14) {
        bonusCotenna = '+ 2';
        bc = 2;
    } else {
        bonusCotenna = '+ 3';
        bc = 3;
    }

    //Bonus dell'indole
    if (indole == 'Bruto') {
        bonusIndole = 'La difficolta delle prove di Forza e Cotenna che non sono prove di combattimento sono ridotte di 2.';
        if (bc == 5) {
            PF = 6
        } else { PF = 7 + bc; }
        rDanno = '1d4';
    } else if (indole == 'Scaltro') {

        if (bc == 5) {
            PF = 7
        } else { PF = 8 + bc; }
        bonusIndole = 'La difficolta nelle prove di Agilita e Istinto che non sono prove di combattimento sono ridotte di 2. ';
        extraI = 'Inoltre, lo scaltro aggiunge il suo modificatore di  Agilita al danno con le armi, invece che il modificatore di forza.';
        rDanno = '1d4'
    } else {
        if (bi == 5) {
            segni = 2;
        } else { segni = 3 + bi }
        listaSegni = 'Luce [illumina entro 8 mt] - Cura [1d6 + Bonus Istinto] - Fulmine [1d8 + Bonus Istinto | Distanza 18 mt]'
        if (bc == 5) {
            PF = 4
        } else { PF = 5 + bc; }
        rDanno = '1d4-1';
        bonusIndole = 'La difficolta nelle prove di Istinto che non so di combattimento sono ridotte di 2.';
        extraI = 'Le prove di Istinto sull utilizzo di pergamene sono ridotte di 2.';
    }

    var doc = new jsPDF();
    doc.setFont("Arial");
    doc.setFontType("normal");
    doc.setFontSize(10);
    doc.text(70, 20, 'STRONG & KIND - www.hellfireabruzzo.it');
    doc.setFontSize(16);
    doc.text(20, 30, 'Nome Personaggio: ' + nomePersonaggio);
    doc.setFontType("normal");
    doc.setFontSize(14);
    doc.text(20, 40, 'Specie: ' + specie + ' - Indole: ' + indole + ' - Comune di Origine: ' + origine);
    doc.text(70, 50, 'Forza: ' + forza + ' [' + bonusForza + ']  - Agilita: ' + agilita + ' [' + bonusAgilita + ']');
    doc.text(70, 60, 'Istinto: ' + istinto + ' [' + bonusIstinto + '] - Cotenna: ' + cotenna + ' [' + bonusCotenna + ']');
    doc.setFontSize(12);
    doc.text(20, 70, 'Mossa Speciale');
    doc.setFontSize(10);
    doc.text(20, 80, '#' + bonusSpecie);
    doc.text(20, 90, ' ' + extraS);
    doc.setFontSize(12);
    doc.text(20, 100, 'Bonus Indole');
    doc.setFontSize(10);
    doc.text(20, 110, '#' + bonusIndole);
    doc.text(20, 120, ' ' + extraI);
    doc.setFontSize(14);
    doc.text(40, 130, 'Vita Iniziale: ' + PF + ' [    ] - Riduzione Danno: ' + rDanno + ' + [Armatura:       ]');
    doc.setFontSize(12);
    doc.text(20, 140, 'Arma Primaria:______________________________________________ Danno [    ]');
    doc.text(20, 150, 'Arma Secondaria:____________________________________________ Danno [    ]');
    doc.text(20, 160, 'SEGNI GIORNALIERI [' + segni + ']');
    doc.setFontSize(10);
    doc.text(20, 170, listaSegni);
    doc.setFontSize(14);
    doc.text(20, 180, 'EQUIPAGGIAMENTO:');
    doc.setFontSize(10);
    doc.text(20, 190, '[  1 ] Sacco a Pelo__________________________________________________________');
    doc.text(20, 200, '[  1 ] Torcia e Pietra Focaia________________________________________________');
    doc.text(20, 210, oggetto);
    doc.text(20, 220, '[    ] ________________________________[    ]______________________________________');
    doc.text(20, 230, '[    ] ________________________________[    ]______________________________________');
    doc.text(20, 240, '[    ] ________________________________[    ]______________________________________');
    doc.text(20, 250, '[       ] SOLDI [      ] COMPLIMENDI');

    // Save the PDF
    doc.save('Scheda_' + nomePersonaggio + '_' + specie + '_' + indole + '.pdf');
}