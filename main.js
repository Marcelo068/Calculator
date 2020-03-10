let cont = "";
let cont2 = "";
let op = "";
document.querySelector("#zero").addEventListener("click", function() {
    cont = cont + "0";
    document.querySelector("#input").value = cont;
});
document.querySelector("#um").addEventListener("click", function() {
    cont = cont + "1";
    document.querySelector("#input").value = cont;
});
document.querySelector("#dois").addEventListener("click", function() {
    cont = cont + "2";
    document.querySelector("#input").value = cont;
});
document.querySelector("#tres").addEventListener("click", function() {
    cont = cont + "3";
    document.querySelector("#input").value = cont;
});
document.querySelector("#qtr").addEventListener("click", function() {
    cont = cont + "4";
    document.querySelector("#input").value = cont;
});
document.querySelector("#cnc").addEventListener("click", function() {
    cont = cont + "5";
    document.querySelector("#input").value = cont;
});
document.querySelector("#seis").addEventListener("click", function() {
    cont = cont + "6";
    document.querySelector("#input").value = cont;
});
document.querySelector("#set").addEventListener("click", function() {
    cont = cont + "7";
    document.querySelector("#input").value = cont;
});
document.querySelector("#oit").addEventListener("click", function() {
    cont = cont + "8";
    document.querySelector("#input").value = cont;
});
document.querySelector("#nov").addEventListener("click", function() {
    cont = cont + "9";
    document.querySelector("#input").value = cont;
});
document.querySelector("#vgl").addEventListener("click", function() {
    cont = cont + ",";
    document.querySelector("#input").value = cont;
});
document.querySelector("#neg").addEventListener("click", function() {
    cont = "-" + cont;
    document.querySelector("#input").value = cont;
});
document.querySelector("#apgr").addEventListener("click", function() {

    cont = "";
    document.querySelector("#input").value = cont;

});
document.querySelector('[name = "mult"]').addEventListener("click", function() {
    cont2 = cont;
    cont = "";
    document.querySelector("#input").value = cont;
    op = "mult";

});
document.querySelector('[name = "sub"]').addEventListener("click", function() {
    cont2 = cont;
    cont = "";
    document.querySelector("#input").value = cont;
    op = "sub";

});
document.querySelector('[name = "div"]').addEventListener("click", function() {
    cont2 = cont;
    cont = "";
    document.querySelector("#input").value = cont;
    op = "div";
})
document.querySelector('[name="som"]').addEventListener("click", function() {
    cont2 = cont;
    cont = "";
    document.querySelector("#input").value = cont;
    op = "som";
});

document.querySelector('[name="igual"]').addEventListener("click", function() {


    cont = cont.toString().replace(",", ".");
    cont2 = cont2.toString().replace(",", ".");

    if (cont2 == "") {} else {
        if (op == "mult") {
            r = cont2 * cont;
        } else if (op == "sub") {
            r = cont2 - cont;
        } else if (op == "div") {
            r = cont2 / cont;
        } else if (op == "som") {
            n1 = cont2;
            n2 = cont;
            r = parseInt(n1) + parseInt(n2);
        }

        document.querySelector("#input").value = r.toString().replace(".", ",");
        cont = r;
    }
});

document.querySelector("#imc").addEventListener("click", function() {

    document.querySelector("#form").style.display = " none";
    document.querySelector("#form2").style.display = " block";

});
document.querySelector("#vlt").addEventListener("click", function() {
    document.querySelector("#form").style.display = " block";
    document.querySelector("#form2").style.display = " none";
});

// document.querySelector('[name = "txtp"]').addEventListener("keyup", function(event) {
//     let imc;
//     i = 0;
//     if (event.keyCode === 188) {
//         imc = imc + ".";
//         console.log(imc);

//     } else {
//         imc = imc + document.querySelector('[name = "txtp"]').value;
//         imc.toString().replace(",", ".");

//         console.log(imc);
//     }
// });
document.querySelector("#cal").addEventListener("click", function() {
    let np = document.querySelector('[name = "txtp"]').value;
    let na = document.querySelector('[name = "txta"]').value;

    na = Math.pow(na, 2);
    let r2 = np / na;

    if (r2 < 18.5) {
        let txt = "Sinto muito, seu IMC é de " + r2 + " kg/m2 e você precisa ganhar peso. ";
        alert(txt);

    } else if (r2 > 18.5 && r2 < 24.9) {

        let txt = "Parabéns, seu IMC é " + r2 + " kg/m2 e você está dentro do peso adequado!";
        alert(txt);
    } else if (r2 > 24.9 && r2 < 30) {

        let txt = "Sinto muito, mas o seu IMC é de " + r2 + " kg/m2, por isso você está acima do peso e deveria emagrecer";
        alert(txt);
    } else if (r2 > 30) {

        let txt = "Sinto muito, mas o seu IMC é de " + r2 + " kg/m2, por isso você está acima do peso e deveria emagrecer";
        alert(txt);
    }
});