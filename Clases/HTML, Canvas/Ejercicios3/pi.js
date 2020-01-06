// JavaScript Document
<script>
   var contexto; // contexto para dibujar sobre el lienzo
   var rangoRojo; // % del valor del pixel rojo original
   var rangoVerde; // % del valor del pixel verde original
   var rangoAzul; // % del valor del pixel azul original
   var rangoAlfa; // valor de cantidad alfa
   var imagen = new Image(); // objeto imagen para almacenar la imagen cargada
   imagen.src = "C:/Users/AlanAntonio/Desktop/flores.png"; // Establecer el origen de la imagen
   function iniciar(){
    var canvas = document.getElementById("ellienzo");
    contexto = canvas.getContext("2d");
    contexto.drawImage (imagen, 0, 0); // imagen original
    contexto.drawImage(imagen, 250, 0); // imagen para las
     //modificaciones del usuario
    procesarEscalaGrises(); // muestra la escala de grises de la imagen original
    // configurar eventos de GUI
    rangoRojo = document.getElementById( "rangoRojo" );
    rangoRojo.addEventListener( "change",function() { procesarImagen( this.value, rangoVerde.value,rangoAzul.value ); }, false );
    rangoVerde = document.getElementById( "rangoVerde" );
    rangoVerde.addEventListener( "change",function() { procesarImagen( rangoRojo.value, this.value,rangoAzul.value ); }, false );
    rangoAzul = document.getElementById( "rangoAzul" );
    rangoAzul.addEventListener( "change",function() { procesarImagen( rangoRojo.value,rangoVerde.value, this.value ); }, false );
    rangoAlfa = document.getElementById( "rangoAlfa" );
    rangoAlfa.addEventListener( "change",function() { procesarAlfa( this.value ); }, false );
    document.getElementById( "botonReiniciar" ).addEventListener("click", reiniciarImagen, false );
   } // fin de la función iniciar
   // establece el valor alfa para todos los pixeles
   function procesarAlfa( nuevoValor ){
    // obtiene el objeto ImageData que representa el contenido del lienzo
    var datosImagen = contexto.getImageData(0, 0, 250, 250 ); 

    var pixeles = datosImagen.data; // información de pixeles de ImageData
    // convierte cada pixel a escala de gris
    for ( var i = 3; i < pixeles.length; i += 4 ){
     pixeles [ i ] = nuevoValor;
    } // fin de for
    contexto.putImageData( datosImagen, 250, 0 ); // muestra escala de gris
   } // fin de la función procesarImagen
   // establece los valores RGB para cada pixel
   function procesarImagen( porcentajeRojo, porcentajeVerde, porcentajeAzul){
    // obtener el objeto ImageData que representa el contenido del lienzo
    contexto.drawImage(imagen, 250, 0);
    var datosImagen = contexto.getImageData(0, 0 , 250, 250);
    var pixeles = datosImagen.data; // información de pixeles de ImageData
    // establecer porcentajes de rojo, verde y azul en cada pixel
    for ( var i= 0; i < pixeles.length; i += 4 ){
     pixeles[ i ] *= porcentajeRojo / 100;
     pixeles[ i + 1 ] *= porcentajeVerde / 100;
     pixeles[ i + 2 ] *= porcentajeAzul / 100;
    } // fin de for
    contexto.putImageData( datosImagen, 250, 0 ); // mostrar escala de gris
   } // fin de la función procesarImagen
   // crea versión en escala de grises de la imagen original
   function procesarEscalaGrises(){
    // obtiene el objeto ImageData que representa el contenido del lienzo
    contexto.drawImage(imagen, 500, 0);
    var datosImagen = contexto.getImageData(0, 0 , 250, 250);
    var pixeles = datosImagen.data; // información de pixeles de ImageData
    // convierte cada pixel en escala de gris
    for ( var i = 0; i < pixeles.length; i += 4 ){
     var promedio =
      (pixeles[ i ] * 0.30 + pixeles [ i + 1 ] * 0.59 +
      pixeles[ i + 2 ] * 0.11).toFixed(0);
     pixeles[ i ] = promedio;
     pixeles[ i + 1 ] = promedio;
     pixeles[ i + 2 ] = promedio;
    } // fin de for
    contexto.putImageData( datosImagen, 500, 0 ); // mostrar escala de grises
   } // fin de la función procesarEscalaGrises
   // reinicia la imagen manipulada por el usuario y los controles deslizantes
   function reiniciarImagen(){
    contexto.drawImage(imagen, 250, 0);
    rangoRojo.value = 100;
    rangoVerde.value = 100;
    rangoAzul.value = 100;
    rangoAlfa.value = 255;
   } // fin de la función reiniciarImagen
   window.addEventListener( "load", iniciar, false );
  </script> 