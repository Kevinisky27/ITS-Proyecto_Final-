window.onload = function() {
    canvas = document.getElementById("miCanvas");
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext("2d");
        if (ctx) {
            x = canvas.width / 2;
            mensaje("INVASORES");
            imgNave = new Image();
            imgOvni = new Image();
            imgOvni.src = "imagenes/ovni.png";
            imgNave.src = "imagenes/nave.png";
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
            alert("Error al crear tu contexto");
        }
    }
}