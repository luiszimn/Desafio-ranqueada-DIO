let status = calcTaxaVitoria(129,37)
let nivel
   defineNivel()
console.log("O Herói tem de saldo de " + status + " está no nível de " + nivel)
function calcTaxaVitoria(vitorias,derrotas){
    let calcTaxa = vitorias - derrotas
    
    return calcTaxa
   
}


function defineNivel()  {
if(status < 10){
    nivel = "Ferro"
} 
if((status >= 11) && (status <= 20)){
    nivel = "Bronze"
}
if((status >= 21) && (status <= 50)){
    nivel = "Prata"
}
if((status>= 51) && (status <= 80)){
    nivel = "Ouro"
}
if((status >= 81) && (status <= 90)){
    nivel = "Diamante"
}
if((status >= 91) && (status <= 100)){
    nivel = "Lendário"
}
if(status >= 101){
    nivel = "Imortal"
}

}
