var matriz = {id : 1, nombre : "Ejemplo <script>alert('EXPLOIT!!')</script>"};
$( document ).ready(function() {
  $("div[id='searchDiv']").hide();
  $("div[id='mostrarMatrizDiv']").hide();
  $("div[id='mostrarNuevaMatrizDiv']").hide();
  $("div[id='mostrarHistoricoDiv']").hide();
  $("div[id='mostrarModificarCeldaDiv']").hide();
  
    /*AVOID XSS*/
  //$("#titulo").text("Matriz: " + matriz.nombre);
  $("#titulo").html( $.parseHTML("Nombre " +matriz.nombre));
    
    /*encodeURL*/
    var url = 'http://portal.uned.es/portal/page?_pageid=93,1&_dad=portal&_schema=PORTAL';
    $("a[id='mLink']").attr("href", encodeURIComponent(url));
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