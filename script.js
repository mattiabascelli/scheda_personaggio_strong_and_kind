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
    doc.text(20, 190, '[    ] ______________________________[    ]______________________________________');
    doc.text(20, 200, '[    ] ______________________________[    ]______________________________________');
    doc.text(20, 210, '[    ] ______________________________[    ]______________________________________');
    doc.text(20, 220, '[    ] ______________________________[    ]______________________________________');
    doc.text(20, 230, '[    ] ______________________________[    ]______________________________________');
    doc.text(20, 240, '[    ] ______________________________[    ]______________________________________');
    doc.text(20, 250, '[       ] SOLDI [      ] COMPLIMENDI');
    var imgData = 'data:image/jpg;base64,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cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOjFlMzE0NmY5LWE3ZmItNDNmYS05ZGY0LTk2Nzg0YmYzMzg3OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphYjQzMWVmNi0wOTVlLTQ5MzctYTgxOS01OGJjNjk5MTNlMjciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1N2NhNGNiMy0xNzczLTRmM2YtOWFkNi02OGM5ZTlkYjBmMmMiIGRjOkZvcm1hdD0iaW1hZ2UvanBlZyIgR0lNUDpBUEk9IjIuMCIgR0lNUDpQbGF0Zm9ybT0iV2luZG93cyIgR0lNUDpUaW1lU3RhbXA9IjE3MjQ3NjQzNzQ4OTk2MzciIEdJTVA6VmVyc2lvbj0iMi4xMC4zNCIgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQ6MDg6MjdUMTU6MTI6NTIrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0OjA4OjI3VDE1OjEyOjUyKzAyOjAwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0OmNoYW5nZWQ9Ii8iIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Y2RkZjYwNTAtYzdiMy00YmJlLWE5OTQtZDdlOTM3NzNjMDM0IiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIiBzdEV2dDp3aGVuPSIyMDIzLTA2LTE3VDA5OjQxOjQ2Ii8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6Y2hhbmdlZD0iLyIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NWM2MmE3Mi1iYmRkLTQxMTgtOGJmOC03MDJjY2Y0Y2NjMzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiIHN0RXZ0OndoZW49IjIwMjQtMDgtMjdUMTU6MTI6NTQiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/4gKwSUNDX1BST0ZJTEUAAQEAAAKgbGNtcwRAAABtbnRyUkdCIFhZWiAH6AAIABsADQAMABVhY3NwTVNGVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1kZXNjAAABIAAAAEBjcHJ0AAABYAAAADZ3dHB0AAABmAAAABRjaGFkAAABrAAAACxyWFlaAAAB2AAAABRiWFlaAAAB7AAAABRnWFlaAAACAAAAABRyVFJDAAACFAAAACBnVFJDAAACFAAAACBiVFJDAAACFAAAACBjaHJtAAACNAAAACRkbW5kAAACWAAAACRkbWRkAAACfAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACQAAAAcAEcASQBNAFAAIABiAHUAaQBsAHQALQBpAG4AIABzAFIARwBCbWx1YwAAAAAAAAABAAAADGVuVVMAAAAaAAAAHABQAHUAYgBsAGkAYwAgAEQAbwBtAGEAaQBuAABYWVogAAAAAAAA9tYAAQAAAADTLXNmMzIAAAAAAAEMQgAABd7///MlAAAHkwAA/ZD///uh///9ogAAA9wAAMBuWFlaIAAAAAAAAG+gAAA49QAAA5BYWVogAAAAAAAAJJ8AAA+EAAC2xFhZWiAAAAAAAABilwAAt4cAABjZcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltjaHJtAAAAAAADAAAAAKPXAABUfAAATM0AAJmaAAAmZwAAD1xtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAEcASQBNAFBtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEL/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCABLAIUDAREAAhEBAxEB/8QAHQAAAgMBAAMBAAAAAAAAAAAABQcABggEAQIJA//EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAdUkAYuQ4Aw2BCylaD57As5TvGgQhAaYENLmYDQJnUZwvhniEG6VgchqE9iEKOZ8NKGSTQZigcwELGVo6CuHEfRAhwH6CzMyD0BRfxTnuK8bJzAIXZtkNhY4AQZ1HOWsoBWSgDdKKGA6L07wMPEYpBCC8K0ahAAixSm0xCh4zaPQLlBLsbHKofOs2UHQMchi8u5s8TALK8dgYOc8GxwCfNEfA0g6cgkxVm1BBljAxzhcWIyTYhCnFVKiUwe5wCqHgU06zpKsdoEHSWUhCEIQhCEIQhCEIf/EACgQAAICAwACAQMEAwEAAAAAAAUGBAcBAgMANhcQFjUREhU3ICU0QP/aAAgBAQABBQL6GTEYDA+WVzyE/hiMH5ZXPPv8RkR8srng93FExvyyueDXwUX4A3sQxTYj1wKNW9rL3LcbZAMtO/wJQORUeDWo/Vuh1ngUPOLvEY4sqzhUreEJg9VZMxnlXi2ucDIenM/pqNkTOHanPbtBXM5YUNUWlw3jP7sfU2d1BFrgD5HlVozowA3CPtpa9qejwgMmcKUe282u0P1indcbaVJrjZnpz27gT4hrEDbdDz19J0znAi7S+OmLEEYY17asGLfytBxFZ4Na3KKvVgRpBsEFTiMdMW1UsIXMVmex4gLhNb4V2klARamhEnJjZelszmsK0JWgSyHKN38n6Y6wukkfNhE7Zgc91Q4Ma4+YMXp0diXZVGpThhxKRLW7SZbZPlLANVdOrYWcnKUnFF53h7ptbHuhxxLsWaynfOMjxWY4DnD+jH1gHOmVkfXvOntZGW2dAI7M1q4/ajU735xiyz7Javo9La5y03hvrmbmT12j0t7Rd/5XVSi5r+kvznjSSkhwMgpKkkV/t3mgh00SlC/u4mb72Lt2i15y36Y8RimwplsLhxkqVWGechiuyJx4kxo6PpVNLe0Xf+U0/pWkvznh8f8AyoTvH6RtyduSpoNeK/fkceZAYO2b2jk6/p6DwlMK17Havo9L+13j/wBUD+maW9pu/P8AtdW/9Eqktc/zP0OqIti4LtaCQHV+QZpsrokEDIhhTOR8ap19EUpZisMhTjUr4aooCsOC2SZa54tU/SvY3JTTq6lqDCZq7mxT/hIb4vr8RaHf+L//xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAEDAQE/ASr/xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAECAQE/ASr/xABFEAABAwIDBAUFDAgHAAAAAAABAgMEABEFEiETIjFBFDJRdLEQYXGRsgYjNEJScoGTocHC0RUgMzVic4LxJEBDU6LD8P/aAAgBAQAGPwLyLmSypLCCApSU5rV8Jd+pVU2Ww8tTMMJU8dmRa/Dwr4S79Sqv0mFvGFtNkXQydFeevhLv1KqmTo7q1Rogu6otkWr4S79SqpbsNTz6Yqc7uVo3A9HOjFhPLW8EldlNlOlLwuENuywytbjqdcyhbRNKQt95C0mxSWFXFMw4z7in3TlSC0R+rIhvC7TyChVHBcVcdY31NBbVhv8ALjyP3isagxZRUziCGkhTvWRYm/jSsIbcWtkOtt51dbeA/OsWhJd2zRkIcQo8bFSONT8QfkqbmNupbYZBFl9te6hxYyIWmyVHgTasdluuOIXAZDjYRaxO9x9VY8T/ALCfxUpEFTgefQWiGusoHlSu7L8RUiC8pSG3prqSpHHrKqLJj+6BvpEV/wB8ZkPI9BHpoEcD+ph3SDlhy7sKWfiL4p++oeNxtwuEJWpPJxPVPq8KiTk8XUbwHJXMeukX4OSY6h/xqf6W/bTU7EUgCLEtnUeZJtYV7pG5Ci82wj3pK9QjQ8Oyvdf3RP46x8HUFhP4qeuL2iOEfZSu7L8RT81++yZmvKOXjxVTMluOtQdndIW2gZsqdpc+Vb7q0oQniVG1JJdSArgb8aXFYUgy0OJW2FKtr/Y0EqQ0dM1jIHDtqVExHZJjL99aIcBsefh9hrD8Ti7NcZrYqXvi+ir+FPYXBQh191Sc2ZwJyWIVWNYUsM9LlLQWkh0G9iL+FY7hz8dq8xGRtxD6TZduqaICWBxB/wAQOXGsX2jDbz0hsNtNoeTqoZqdmym2xHVGWgKQ4Fa6U7iJRlihpTQWfjK04ViMSInUynStZ4IGc6mhHious/tHj1lmozBcSHX3MiU38xPgD5HkqbLySggoHE0MQW4OjsoK86tMg4m4opgwXpAzDM48vJnA4UZMVS9u2Nm424d9I7PRSo9rBKAS2OGtx+dNy2ISJUVGVC8zlij5PI341MSqCIi0t7UuIcvfl2eemGmMJTtlLytDpHAqPo50iYILTybgyAl4jIs6X4a8bUILWFNNjedW4XuoLi54a8qbbVhyHGl3cZeD1s2pvcW/ip3EpjYhsNLUyGkm5VoNBw11p7cEeIzDUiPGR1W05k/+vSmGsPbkuTyqW48pyxuVHd+iv3S39cfypmWhITKYO+ydS2q3h5ZGE4bPbckzUqADDg3VDUhX8J9Y17amO4xH/SyH2sjBDfVX8b0cRvemrtEhkMq23Zbl9tqZcandHjPMFK9m0L7p3Rrf5StfNUsXJ3m9T84ViTjqw22mIVKUo6AZhWFd7a9sVO+c37YqSbaCIrX+pNYUm4zBC7j6RSWCtRZQorCOQJ51I7or2k1hv8lXjSse2rvSg7k2dxk61uyp/d/xDyTJkVttx1lBV76bAUuet09LUvabROhvTTnukY2qpSN0OCwWOV+Q07beu9KTIbaw9sf6iE/tezz5rdtA4XALbOuzXLY48s2i721+SaLOIPtLnLUi+TQKVmubUpttSvfN0pT8bzVBUhhl1brqGszqScgJsSnz1MbkSBFYJQVOkXsAsHQdtOwYTPRcObjKUEnVbisyd9Z7fCsPfQ2EuvIVnUPjWtasWm7MdJXIS2XOeUKRpUjuivaTWGfyVeNL7x/2VP7v+IeSdDHWeZUgem2lZHW1Nq7FC1NwmoaGJFkhT98w05pFdExlvosmNkfydXadi7H+2tbNqO1+lW8+3kIbyZUgarKjyOnbxpUxsBxC9k40sjUXI+41IcdbDimY5W3m+KbjWsK7017Yqd85v2xUjuivaRWE/Mc8U1iXeh7SKkd0V7Saw0c9irxpWAdF4uZ9vn/ivwtWIKscuwtf+ryhuZGBIuUuI3VJvx1pTpb6a7mu2uQLlH3fZT2IQnLHomXIDbMoHq/Skn1VEONNKivsqQhEhNlLca+Qodo5eqo+H9LeiQWQAGWQN63C9PSGJLz5db2ZDlu2sPxHC8zkJEltTjJ1U2Mw184pMV2a9Gjg3Uhq2+fPSJsPEpIcToQoJsodhrpUzEZOgshpFsqB5qkYCiU7sXXNptSBmBuD91dLElqXGW0po6ZFDgeH0U5NxDEn1Pr5NJASgcgK/eEr1J/KkQ4aLJGqlnrLPaf8n//EACcQAQACAQMDBAMBAQEAAAAAAAERIQAxQVEQYXGBkaHwILHB4UDR/9oACAEBAAE/IeihqBWMFHeM+9fzHG3BxaQEvVpn3r+YQE6QSIoampemfev5ku2SARNDbpn3r+YXUgS7NmrQ6Y2dKCDEsvkzdig9B3i293TGIwN0NRI1yPitkvlPx9MUaSJy1okJDtOhWB0evFJ9gBqRhLosNErRG/ENdkLrZMjplkaSBhkRNEuuO60W5Ugd2U98TEVUkUkaV0jAeAEq5O4BUwSiLuNumGPr+sSSpHjPHQ4k0gQP6jDVSEj+CKL2FUq8DV9OMSOmVNjyozG+AnadekHIEx3FEP7Hp+C0sxowDm5wcq+fary4xfc2wDYCR3y0ApgaM3+emGt/mJW0euEuwwT2o2B1624nhkYEqZixo09z3wAuPNgSdrfcxRSrb9CdMbGDqbsYnRJYDQ+2JzqDenw8ZOhYDjeGVQ2x6IvdMW7SxCBQAFEE/Yy1xgQz6lxjFuYpQLtF+zki4ggpFHjJ6rhiRUc4i/JkvXki59LwFAhL5S8cG2DiIq2prooZohwxYTvheiCSoSFjAU3lSzRhpoBdiNO5kNTQRCYUU6oTjkwCOixEGx4DiS90h1FCAuc6eSX80bZBIaUvfIf4n7EJ3nfE6NgAalUWxjhji6wEbWKCqYRO8aY9HHdWCjhF+5HY1kQWEFEl/wCnHA7eDecrvuxRIDH480I93oNsS6IsiuULD/eiwS4oO63xJoV3KTLAZBlYgYW9j2aHUdpjbLa83ejiIZSkxosUs1PDJQSDuOUL74gJFepCOMUkMKJj/ThFZcWwYZ9n2yb6Q9IGHNHRmLcvgIiEdNtO+fB9A2xUUQW1r4qeTAY5Su5kaYMpwA3fvLNoahJY7UaTPfqdGgm0qYhgwmiSQlhoOb7VFItoHwYMFiLtZEQa2FYZLK5LgECDqzj6oV6YjVRAcuVGx3DfJgtFSgwxHZrlMvE4Rp5O4gcEr1Zg/W7M+D6CNYVeEv2jE5nIuVKPyJ6ZKRsojFElMg2sYQxVOFAswhJ1GYaLktZTTlm5AoTobXiiqpEvHGhiK5ATSQ7wv46I85oMvWJgyiDJn/GR0fSjXHkiFRoUQfD7dWazZUpQOW4aw/ESKriP2g4v5YJ8Ql29Ytrk2+gHpQZ5j5XE0DryQRIlxGmaPohggyQdslRDeCmD/qd9o3BLoaSTQ4wZHLQ/Uo0o9sjJ1YeME93fIuFSzYKiK4mW0yloOoSee+UNyCV0TLB8279NHz8Mrfn9f8f/2gAMAwEAAgADAAAAEJIIIAABJJIIAIAAAJJBJBIAAJIJJBIJAJJIJJJAAIJIAJBBJJABAIABBAIIIABBJJAABIJBBAIJIJJJJJJJJJP/xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAEDAQE/ECr/xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAECAQE/ECr/xAAmEAEBAAICAgEEAQUAAAAAAAABEQAhMUEQUWEgcYGRoUCx0eHw/9oACAEBAAE/EPDsWA0zIrFCzlPDNjHRgkAd9FSeKSgTWsIAIshFOrUHKQzEMLLRGlOjxSokjLSEHZIVhxioslkiCHOr5xbUhMMFYG6tAaFWziKWilgREdiYBr8TldgDQ8/TIj0ORUHpFEekMby3AKqZIxBV6MUMXkckjMAKiM5xs95X0IKGGui3CZ5OEyRCI7okYWB4V0n3i3WwAhedmYIbzS2oOHYO8IrfI4NVfYLbvEsNIgE2XHMKRTQxGm6MEsXxPWLcg2ggWjkcAaKUaaa1nDeUC0nyCSUSj9EnofiUywd3tbpYcuQAJ95Br65cKK4erjgDWyPeE1TPtd/T/HjEQaPbE2bYs8Ae0xbhy6yugXKw3eAGoLK95EpZ+gQImKLjCWRHpiKdL78X6p5S5AD2oN63vWERfmweG4igP2HklhhkaLteZYfGMBoqCIVWOw+4OXC9dcUqi1U1lQ7yuLXVMI6VC/OOh5XYCCgYw7u8dsObxDtqBxUO2CZPSoNJIwEBVTQjlPsYBLBDb+3OsSgwDlgoW2lSqBvN7kJE3BOyx5mDEOcsLbrSWLrBSZXJXuMiVEe+OM3MMiswdTsNEOWZE3i3mi9HRyoGCwELOb6QbHQ+apoPLXG9qGg+09+N4wE3Zw1CgKCwU5y9yFVYkNpAAeKmbaJRMlMSz2OyoiENYeBJbUKLtEBKkwjzeOaHTpigiOiLTenGoZCreB8OqWogNLf7gRNpYwFizgCu06gYy3LalzQ2A1g5w+5B/SfMDBUiSNwNrywYlEKbEZdYdJYsin+1XSnLmjEPBph6QttfABJQyBDgLXkZUlVcILuMvAlUsAwuxAIYDJAKr1hxB7j6FUwhbRjDhQ9F0Lw6beiAGF5RwigGeCgXqHeVXcx0MQKOmQWiuqxxnvYBX4DDuymaKGgDCoBXwtEgtbVIy8C6PcfWCr7i3AOQdC816ynEwY3VKDvwHjoJ2EP1/viuMQFe87NX5+cSyqIAFQKzq6QeTNSHPWaa9CEk4xawgxGqHfITF4Dck0EKiPRSCCAM7dafcjiIqgRKkUdeJQJBYN6OSBrBwYIvRAbBXYPIZvijSJ4RgKKzlqrsGCAbHU6gKFcqlCwEYjeAkSDtj3jVcHuhg8yHRizx6Upk9iZyy2Exp/0fXP4vz4q9Lbpy/GCWLoI0pOvuCOsBmC+mlrNGiErED9XsPxUJhLRpw0YUUDAowHKRUGQVM60TYrUXDFHIOrCFlOIAPVZmv0O0Z3iT+2/jyBe8QYMAXYJinzH9OKnYZ6/8hHvfjHuD0rCjwKIHdevOzpqTnuRVRLUXBxYCkBoG0ShBXbqIrfZNjUpANETTC8UHpYuBrPXgwIgIGkVaQRBC7ahGZWNPFJNsfnG6VZvJfYBu6CqK4BV2XoraVIghdtQiVaGlCUVdNIiERDEPspGKhau0VXwAH5OR6IQJRdMXfeXxzrFyagFLNo4n07VpjZDyuzAUeIT3+CS0AAKpxwAAAD+j/9k=';
    doc.text(70, 260, '');
    doc.addImage(imgData, 'JPEG', 85, 260, 40, 20);
    
    // Save the PDF
    doc.save('Scheda_' + nomePersonaggio + '_' + specie + '_' + indole + '.pdf');

}