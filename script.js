function ConverterDolarReal(){
  var inputValor = parseFloat(document.getElementById("valor").value);
  var valorConvertidoEmReal = inputValor * 5;
  
 
  var respostaEmReal = "R$ " + valorConvertidoEmReal
  document.getElementById("valorConvertido").innerHTML = respostaEmReal
  
}

function ConverterRealDolar(){
  var inputValor = parseFloat(document.getElementById("valor").value);
  var valorConvertidoEmDolar = inputValor / 5;
  
 
  var respostaEmDolar = "U$ " + valorConvertidoEmDolar
  document.getElementById("valorConvertido").innerHTML = respostaEmDolar
  
}