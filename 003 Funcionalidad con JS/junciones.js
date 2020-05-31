ventana. onload - función () {
	lienzos:  documento. getElementById("miCanvas");
	si (canvas && canvas. getContext) {
		ctx - lienzo. getContext("2d");
		si (ctx) {
			x - lienzo. ancho / 2;
			mensaje("INVASORES");
			imgNave - Nueva imagen();
			imgOvni - Nueva imagen();
			imgOvni. src á "imagenes/ovni.png";
			imgNave. src á "imagenes/nave.png";
			imgNave. onload - función () {
				nave á nueva nave(0);
			}
			imgOvni. onload - función () {
				para (var i á 0; i < 5; i++) {
					para (var j á 0; j < 10; j++) {
						ovnis_array. push(nuevo Enemigo(100 + 40 * j, 30 + 45 * i));
					}
				}
				setTimeout(anima, 1500);
				disparoEnemigo - setTimeout(disparaEnemigo, tiempoDisparo);
			}
		} Más {
			alerta("Error al crear tu contexto");
		}
	}
}
/*************
Oyente
**************/
ventana. requestAnimationFrame  (función () {
	ventana de retorno . requestAnimationFrame ?
		ventana. webkitRequestAnimationFrame ?
		ventana. mozRequestAnimationFrame ( mozRequestAnimationFrame) 
		función (devolución de llamada) - ventana. setTimeout(devolución de llamada, 17); }
})();
documento. addEventListener("keydown", función (e) {
	teclaPulsada  e. keyCode;
	tecla[e. keyCode] - true;
});
documento. addEventListener("keyup", función (e) {
	tecla[e. keyCode] - false;
});
/*******************
Variables
********************/
var canvas, ctx;
var x a 100;
var y 100 ;
var teclaIzquierda 37 ;
var teclaDerecha 39 ;
 varéEspacio 32 ;
var imgNave, imgOvni;
var municion 100 ;
var ultimos - nueva matriz();
var imgAni 0 ;
var imgAni2 a 0;
var enemigosVivos 50 ;
var tiempoBala = true ;
var teclaPulsada - null;
var tecla = [];
var balas_array - nueva matriz();
var ovnis_array - nueva matriz();
var balasEnemigas_array - nueva matriz();
var endGame - false;
var disparoEnemigo;
var tiempoDisparo 500 ;
var puntos 0 ;
/*****************
OBJETOS
******************/
función Bala(x, y, w) {
	esto. x x x ;
	esto. y y ;
	esto. w á w;
	esto. dibuja - función () {
		ctx. guardar();
		ctx. fillStyle á "azul";
		ctx. fillRect(este. x, este. y, este. w, este. w);
		esto. y - este. y - 6;
		ctx. restaurar();
	};
	esto.  Función  dispar () {
		ctx. guardar();
		ctx. fillStyle á "rojo";
		ctx. fillRect(este. x, este. y, este. w, este. w);
		esto. y - este. y + 4;
		ctx. restaurar();
	};
}
función nave(x) {
	esto. x x x ;
	esto. y  450;
	esto. w 30 ;
	esto. h 15 ;
	esto. dibuja - función (x) {
		esto. x x x ;
		si(imgAni2 < 5){
			ctx. drawImage(imgNave,0 , 0 , 32 , 32 , this. x, este. y, 35 , 35);
			imgAni2 á imgAni2 + 1;
			imgAni á imgAni + 1;
			checarBalas();
			setInterval(checarBalas(),1000);
		} si ( imgAni2 < 10) {
			ctx. drawImage(imgNave,32 , 0 , 32 , 32 , este. x, este. y, 35 , 35);
			imgAni2 á imgAni2 + 1;
			imgAni á imgAni + 1;
		} Más{
			ctx. drawImage(imgNave,32 , 0 , 32 , 32 , este. x, este. y, 35 , 35);
			imgAni2 a 0;
		}
		
	};
}
función Enemigo(x, y) {
	esto. x x x ;
	esto. y y ;
	esto. w 35 ;
	esto. veces 0 ;
	esto. dx 5 ;
	esto. Ciclos 0 ;
	esto. Num 14 ;
	esto. figura - verdadero;
	esto. vive - verdadero;
	esto. dibuja - función () {
		Retraso
		si (este. ciclos > 20) {
			saltitos
			si (este. veces > este. num) {
				esto. dx * -1;
				esto. veces 0 ;
				esto. Num 28 ;
				esto. y + 40;
				esto. dx  (este. dx > 0) ? esto. dx++ : estearchivo . dx--;
			} Más {
				esto. x +- este. dx;
			}
			esto. veces++;
			esto. Ciclos 0 ;
			esto. figura ! esto. figura;
		} Más {
			esto. ciclos++;
		}
		si (este. vive) {
			si (imgAni < 4) {
				ctx. drawImage(imgOvni, 0 , 0 , 32 , 32 , este. x, este. y, 35 , 35);
				(imgFile, xini, yini, wimg, himg, xpos , ypos , wrez, hrez)
			} si ( imgAni < 8) {
				ctx. drawImage(imgOvni, 32, 0, 32, 32, este. x, este. y, 35, 35);
			} si (imgAni < 12) {
				ctx. drawImage(imgOvni, 64, 0, 32, 32, este. x, este. y, 35, 35);
			} otra si(imgAni > 11) {
				ctx. drawImage(imgOvni, 0, 0, 32, 32, este. x, este. y, 35, 35);
				imgAni 0 ;
			}
		} Más {
			ctx. fillStyle á "negro";
			ctx. fillRect(este. x, este. y, 35, 30);
		}

	};
}
/*****************
FUNCIONES
******************/
función anima() {
	if (endGame ? false) {
		requestAnimationFrame(anima);
		verificar();
		pinta();
		colisiones();
	}
}
mensaje de función (cadena) {
	var lon ( lienzo. ancho - (50 * cadena. longitud)/ 2;
	ctx. fillStyle á "blanco";
	ctx. clearRect(0, 0, canvas. ancho, lienzo. altura);
	ctx. fuente:  "bold 75px Arial";
	ctx. fillText(cadena, lon, 220);
}
función colisiones() {
	para (var i a 0; i < ovnis_array. longitud; i++) {
		para (var j a 0; j < balas_array. longitud; j++) {
			enemigos  ovnis_array[i];
			bala á balas_array[j];
			si (enemigo !- null && bala !- null) {
				si (bala. x > enemigo. x) &&
					(bala. x < enemigo. x + enemigo. w) &&
					(bala. y > enemigo. y) &&
					(bala. y < enemigo. y + enemigo. w)) {
					enemigo. vive - falso;
					enemigosVivos - enemigosVivos - 1;
					ovnis_array[i] - null;
					balas_array[j] - null;
					puntos +a 10;
					Puntuación();
				}
			}
		}
	}
	para (var j a 0; j < balasEnemigas_array. longitud; j++) {
		bala á balasEnemigas_array[j];
		if (bala !- null) {
			si (bala. x > nave. x) &&
				(bala. x < nave. x + nave. w) &&
				(bala. y > nave. y) &&
				(bala. y < nave. y + nave. h)) {
				gameOver();
			}
		}
	}
}
función gameOver() {
	ctx. clearRect(0, 0, canvas. ancho, lienzo. altura);
	balas_array = [];
	ovnis_array = [];
	balasEnemigas_array = [];
	si( enemigosVivos á 0 ){
		mensaje("GANASTE");
	}Más{
		mensaje("JUEGO SOBRE");
	}
	endGame - true;
	clearTimeout(disparoEnemigo);
}
puntuación de la función() {
	ctx. guardar();
	ctx. fillStyle á "blanco";
	ctx. clearRect(0, 0, canvas. ancho, 20);
	ctx. fuente:  "bold 12px Courier";
	ctx. fillText("SCORE: " + puntos, 10, 20);
	ctx. restaurar();
}
función municiones() {
	ctx. guardar();
	ctx. fillStyle á "blanco";
	ctx. clearRect(0, 20, canvas. ancho, 20);
	ctx. fuente:  "bold 12px Courier";
	ctx. fillText("Municion: " + municion, 10, 40);
	ctx. restaurar();
}
función verifica() {
	si (tecla[teclaDerecha]) x +á 5;
	si (tecla[teclaIzquierda]) x -5 ;
	Verifica cañon
	si (x > canvas. anchura - 20) x á lienzo. ancho - 20;
	si (x < 0) x á 0;
	Disparo
	si (tecla[teclaEspacio]) {
		si (tiempoBala - true && municion !-0 ){
			tiempoBala - falso;
			balas_array. empujar(nueva Bala(nave. x + 12, nave. y - 3, 5));
			(municion >0)? municion - municion - 1 : falso;
			tecla[teclaespacio] - falso;
			Enemigo();
			setTimeout(function()-tiempoBala - true;  300 euros);
		}
	}
}
función checarBalas(){
	var balasArrayVal á 0;
	para(let i á 0 ; i < balas_array. longitud; i++){
		si(balas_array[i] !- null){
			balasArrayVal n.o 1;
		}
	}
	if(municion == 0 && balas_array.length == 100 && balasArrayVal == 0 && enemigosVivos > 0){
		tecla[teclaEspacio] = false;
			alert("Sin municion");
			gameOver();
	}
}
function pinta() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	score();
	municiones();
	nave.dibuja(x);
	//Balas
	for (var i = 0; i < 100; i++) {
		if (balas_array[i] != null) {
			balas_array[i].dibuja();
			if (balas_array[i].y < 0) balas_array[i] = null;
		}
	}
	//Balas Enemigas
	for (var i = 0; i < balasEnemigas_array.length; i++) {
		if (balasEnemigas_array[i] != null) {
			balasEnemigas_array[i].dispara();
			if (balasEnemigas_array[i].y > canvas.height) balasEnemigas_array[i] = null;
		}
	}
	//Enemigos
	numEnemigos = 0;
	for (var i = 0; i < ovnis_array.length; i++) {
		if (ovnis_array[i] != null) {
			ovnis_array[i].dibuja();
			if (ovnis_array[i].y == nave.y) {
				gameOver();
			}
			numEnemigos++;
		}
	}
	if (numEnemigos == 0) gameOver();
}
function disparaEnemigo() {
	for (var i = ovnis_array.length - 1; i > 0; i--) {
		if (ovnis_array[i] != null) {
			ultimos.push(i);
		}
		if (ultimos.length >= 10) break;
	}
	Array.prototype.clean = function(deleteValue) { 
		for (var i = 0; i < this.length; i++) {
				if (this[i] == deleteValue) { 
					this.splice(i, 1); i--; 
				} 
			} return this; 
		}; 
	ovnis_array.clean(undefined);
	d = ultimos[Math.floor(Math.random() * ovnis_array.length)];
	if(ovnis_array[d] == null || d == null){
		ovnis_array.clean(undefined);
		d = Math.floor(Math.random() * ovnis_array.length);
	}
	balasEnemigas_array.push(new Bala(ovnis_array[d].x + ovnis_array[d].w / 2, ovnis_array[d].y, 5));
	clearTimeout(disparoEnemigo);
	disparoEnemigo = setTimeout(disparaEnemigo, tiempoDisparo);
}