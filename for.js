var resposta = document.querySelector('p');
var texto="";

for(var i=1; i <= 10; i++){
        texto += i + "<br>";       
}

document.getElementById('parag').innerHTML = texto;