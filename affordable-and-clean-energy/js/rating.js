// Add comentários

var comentarios = [];
		
$(function(){
	$("#adicionar").click(function(){
        var nome = $("#nome").val();
        var comentario = $("#comentario").val();

		$("#comentarios").append(
            $("<tr>")
                .append($("<td>").text(nome))
                .append($("<td>").text(comentario))                
                .append($("<td>"))
                    .append($("<a>")
                        .attr("href", "#excluir")
                        .text("Apagar"))
        )
        
        $("#nome").val("")
        $("#comentario").val("")
    })

var capturando = "";

function capturar () {
    capturando = document.getElementById('valor').value;
    document.getElementById('valorDigitado').innerHTML = capturando;
}




});


