$( document ).ready(function() {
  $("div[id='searchDiv']").hide();
  $("div[id='mostrarMatrizDiv']").hide();
  $("div[id='mostrarNuevaMatrizDiv']").hide();
  $("div[id='mostrarHistoricoDiv']").hide();
  $("div[id='mostrarModificarCeldaDiv']").hide();
});

$("#searchBtn").click(function(){
	 hideAllDivs();
	$("div[id='searchDiv']").show();
});

$("#mostrarMatrixBtn").click(function(){
	hideAllDivs();	
	$("div[id='mostrarMatrizDiv']").show();
});

$("#nuevaMatrizBTn").click(function(){	
	hideAllDivs();
	$("div[id='mostrarNuevaMatrizDiv']").show();
});

$("#mostrarHistoricoBtn").click(function(){	
	hideAllDivs();
	$("div[id='mostrarHistoricoDiv']").show();
});

$("#modificarCeldaBtn").click(function(){	
	hideAllDivs();
	$("div[id='mostrarModificarCeldaDiv']").show();
});

function hideAllDivs() {
  $("div[id='searchDiv']").hide();
  $("div[id='mostrarMatrizDiv']").hide();
  $("div[id='mostrarNuevaMatrizDiv']").hide();
  $("div[id='mostrarHistoricoDiv']").hide();
  $("div[id='mostrarModificarCeldaDiv']").hide();
}