$(document).ready( function () {
  $('#page_1').hide();

  $(window).resize( function () {
    var imgWidth = $(this).width();
    // Imagenes con height responsivo
    $('.img-drag').height(imgWidth/3);
    // Contenedor con height responsivo
    $('.receiver-cont').height(imgWidth/2);
  }).resize();

})

function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    $(ev.target.id).parent().remove();
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }