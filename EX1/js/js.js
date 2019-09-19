
/*
1. Función que muestra y esconde la sección para hacer comentarios 
   al hacer click el botón 'Escribe una reseña'. 
   on click!
   (5 puntos)
*/
let $commentSection = $('#seccion_comentario')
$('#escribe_reseña').click(function(event){
  $commentSection.removeClass('hidden')
})




/*
2. Cargar los comentarios de el archivo comentarios.xml o bien de 
  https://tc2026daw.github.io/instrucciones/misc/comentarios.xml 
  (función ajax, 25 puntos)
*/
$.ajax({
  url : 'https://tc2026daw.github.io/instrucciones/misc/comentarios.xml',
  type : 'GET',
  dataType : 'xml',
  success : function(data) {
    console.log(data)
    let newHtml = "";

    $(data).find("comment").each(function(event) {
      let stars = $(this).find("stars").text()
      newHtml += `
      <div class="nombre">${$(this).find("name").text()} </div>
      <div>${getStarsSpans(stars)}</div> 
      <div class="review">${$(this).find("text").text()} </div>   
      `;
    });

    $('#seccion_reviews').append(newHtml)
  },
  error : function(errorMsg) {
    console.log(errorMsg)
  }
});


/*
3. Funcion que apendiza el nuevo comentario al darle click a PUBLICAR
  on click!
  (función, 35 puntos)
*/

$('#btn-publicar').click(function(event){
  let $name = $('#nombre').val()
  let $comment = $('#comentario').val()
  let $stars = $("input[name='rating']:checked").val()
  let newComment = "";
  newComment += `
  <div class="nombre">${$name}</div>
  <div>${getStarsSpans($stars)}</div> 
  <div class="comentario">${$comment}</div>
  `
  $('#seccion_reviews').append(newComment)
  
  
})


/*
4. Funcion que limpia el nombre, el email y el div "#comentarios" al darle
   click en "btn-limpiar" con leyenda de "CANCELAR"
   on click!
  (5 puntos)
*/
$('#btn-limpiar').click(function(event){
  let name = document.getElementById('nombre')
  let comentario = document.getElementById('comentario')
  let email = document.getElementById('email')
  name.value = "";
  comentario.value = "";
  email.value = "";
})


/*
Funcion que recibe un numero de stars y regresa los 5 spans 
que simbolizan las estrellas del rating. por ejemplo:
let stars = 3;
let html = getStarsSpans(stars);

html = '
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
'
*/
function getStarsSpans(stars) {
  let new_html = '';
  for( let i = 0; i < stars; i++) {
    new_html += `
      <span class="fa fa-star checked"></span>
    `;
  }

  for ( let i = 0; i < 5 - stars; i++ ) {
    new_html += `
      <span class="fa fa-star"></span>
    `;
  }

  return new_html;
}
