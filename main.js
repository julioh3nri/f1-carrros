var cabecalho = document.getElementById("cabecalho");
var redbull = document.getElementById("redbull");
var ferrari = document.getElementById("ferrari");
var mclaren = document.getElementById("mclaren");
var mercedes = document.getElementById("mercedes");
var aston = document.getElementById("aston");
var equipe = document.getElementById("equipe")
var aceleracao = document.getElementById("aceleracao")
var velocidade = document.getElementById("velocidade")
var potencia = document.getElementById("potencia")

redbull.onclick = function() {
    cabecalho.style.backgroundImage = "url('Imagens/1-rbr-car.jpg')";
    equipe.innerHTML = "RedBull";
    aceleracao.innerHTML = "2,3s";
    velocidade.innerHTML = "370km/h";
    potencia.innerHTML = "1050cv";
}

ferrari.onclick = function() {
    cabecalho.style.backgroundImage = "url('Imagens/2-ferrari-car.jpg')";
    equipe.innerHTML = "Ferrari";
    aceleracao.innerHTML = "2,4s";
    velocidade.innerHTML = "360km/h";
    potencia.innerHTML = "1020cv";
}

mclaren.onclick = function() {
    cabecalho.style.backgroundImage = "url('Imagens/3-mclaren-car.jpg')";
    equipe.innerHTML = "McLaren";
    aceleracao.innerHTML = "2,5s";
    velocidade.innerHTML = "355km/h";
    potencia.innerHTML = "1000cv";
}

mercedes.onclick = function() {
    cabecalho.style.backgroundImage = "url('Imagens/4-mercedes-car.jpg')";
    equipe.innerHTML = "Mercedes";
    aceleracao.innerHTML = "2,4s";
    velocidade.innerHTML = "365km/h";
    potencia.innerHTML = "1030cv";
}

aston.onclick = function() {
    cabecalho.style.backgroundImage = "url('Imagens/5-aston-car.jpg')";
    equipe.innerHTML = "Aston Martin";
    aceleracao.innerHTML = "2,6";
    velocidade.innerHTML = "350km/h";
    potencia.innerHTML = "980cv";
}