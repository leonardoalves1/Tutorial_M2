//Eu deixo padrão esconder toda a tela de conteúdo e só mostra a inicial
$("div").hide();
$("#telainicial").show();

//Eu deixo padrão esconder o conteúdo dentro das divs, para depois aparecer quando
//o usuário passar o mouse em cima
$(".texto_secundario, .texto_primario").hide();

//Quando aperta espaço, sai da tela inicial 
//(sim, eu poderia ter feito isso com outro HTML, mas tem que usar Jquery e não tenho criatividade)
$(document).keydown(function(event) {
  if (event.keyCode === 32) {
    $("div").show(400);
    $("#telainicial").hide(200); 
  }
});
//Mostra informações quando o mouse entra na div
$(".infotipo1").mouseover(function() {
  $(this).css({
    height: "200px"
  });
  $(this).find(".texto_secundario, .texto_primario").show();
});

//Esconde as informações quando o mouse sai da div
$(".infotipo1").mouseleave(function() {
  $(this).css({
    height: "60px"
  });
  $(this).find(".texto_secundario, .texto_primario").hide();
});




console.log("Olá, Baldo!");
