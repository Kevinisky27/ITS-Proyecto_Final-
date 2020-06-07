 // Esta seria la funcion para llamar la galeria de fotos

 $(document).ready(function() {
         $('.bxSlider').bxSlider({
             mode: 'fade',
             captions: true,
             slideWidth: 1200
         });
     })
     // Reloj
 if (window.location.href.indexOf('reloj') > -1) {

     setInterval(function() {
         var reloj = moment().format("hh:mm:ss");
         $('#reloj').html(reloj);
     }, 1000);


 }