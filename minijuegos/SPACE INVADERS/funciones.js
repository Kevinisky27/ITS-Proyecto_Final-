/*************
    inicio de juego
    **************/
window.onload = function() {
        canvas = document.getElementById("miCanvas");
        if (canvas && canvas.getContext) {
            ctx = canvas.getContext("2d");
            if (ctx) {
                /*************
    titulo de juego y imagenes 
    **************/
                x = canvas.width / 2;
                mensaje("SPACE");
                imgNave = new Image();
                imgOvni = new Image();
                imgOvni.src = "imagenes/alien.png";
                imgNave.src = "imagenes/space.png";
                imgNave.onload = function() {
                    nave = new nave(0);
                }
                imgOvni.onload = function() {
                    for (var i = 0; i < 5; i++) {
                        for (var j = 0; j < 10; j++) {
                            ovnis_array.push(new Enemigo(100 + 40 * j, 30 + 45 * i));
                        }
                    }
                    setTimeout(anima, 1500);
                    disparoEnemigo = setTimeout(disparaEnemigo, tiempoDisparo);
                }
            } else {