// JavaScript source code
function creaPdf() {
    var doc = new jsPDF();
    doc.setFont("Verdana");
    doc.setFontType("normal");

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
        extraS = 'Al prossimo tiro per eseguire la sua Mossa la Volpe aggiungerà 1d6 al tiro del dado.';
    } else if (specie == 'Orso Bruno Marsicano') {
        bonusSpecie = 'Zanne e Artigli: durante il combattimento, se colpisce, l Orso Bruno Marsicano puo effettuare un attacco extra';
        extraS = 'corpo a corpo che infligge 1d6 con il morso.';
    } else if (specie == 'Lupo Appenninico') {
        bonusSpecie = 'Richiamo del Branco: Una volta per combattimento il Lupo ulula per motivare i suoi compagni donando loro 1d4 ';
        extraS = 'da aggiungere ai tiri per combattere.';
    } else if (specie == 'Cinghiale') {
        bonusSpecie = 'Carica Selvaggia: L’avversario deve effettuare una prova di Agilità con Difficolta 14. Se fallisce subisce 1d6 di danno ';
        extraS = 'e salta il suo prossimo turno. La carica può essere effettuata solo ad un bersaglio non adiacente.';
    } else if (specie == 'Cervo Mascio') {
        bonusSpecie = 'Incornata Feroce: Attacco che infligge 1d8 di danno e l’avversario viene spinto dietro di 1, 5 mt.';
    } else {
        bonusSpecie = 'Istinto di Protezione: Guadagni un bonus di +4 alla prossima prova di Agilita o Istinto.';
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
        extraI = 'Le prove di Istinto sull’utilizzo di pergamene sono ridotte di 2.';
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
    doc.text(20, 190, '[   ] __________________________________________________________________________');
    doc.text(20, 200, '[   ] __________________________________________________________________________');
    doc.text(20, 210, '[   ] __________________________________________________________________________');
    doc.text(20, 220, '[   ] __________________________________________________________________________');
    doc.text(20, 230, '[   ] __________________________________________________________________________');
    doc.text(20, 240, '[   ] __________________________________________________________________________');
    doc.text(20, 250, '[   ] __________________________________________________________________________');
    doc.text(20, 260, '[   ] __________________________________________________________________________');
    doc.text(20, 270, '[   ] __________________________________________________________________________');
    // Save the PDF
    doc.save('Scheda_' + nomePersonaggio + '_' + specie + '_' + indole + '.pdf');

}