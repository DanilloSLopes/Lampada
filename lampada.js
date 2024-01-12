var lamp = document.getElementById("lampada")

function estaQuebrada(){ // Esta função é para rodar somente se a lampada não estiver quebrada
    return lamp.src.indexOf('quebrada') > -1
}

function Ligar(){
    if(!estaQuebrada()){
        lamp.src = '/Imagem/acesa.svg'
    }
}

function Desligar(){
    if(!estaQuebrada()){
        lamp.src = '/Imagem/apagada.svg'
    }
}

function Quebrar(){
    lamp.src = '/Imagem/quebrada.svg'
}