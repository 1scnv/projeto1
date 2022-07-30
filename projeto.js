const prompt = require("prompt-sync")({ sigint: true });


function numeroCheck(){
    console.log("Informe o número final: ")
    let numFinal = Number(prompt("> "))
    var numPar = [];
    var numImpar = [];
    for (i = 1; i<=numFinal; i++)
        if(i%2 == 0){
            numPar.push(i)
        }else{
            numImpar.push(i)
        }
console.log(">Numeros pares de 0 a "+numFinal+" : "+numPar)
console.log(">Numeros impares de 0 a "+numFinal+" : "+numImpar)
console.log(">Quantidade de numeros pares: "+numPar.length)
console.log(">Quantidade de numeros impares: "+numImpar.length)


}


function geraSenha(){
    console.log("Informe o tamanho da sua senha: ")
    let tamanho = Number(prompt("> "))
    const chars = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890"
    let senha = " "
    this.tamanho = tamanho.length
    for(i = 0; i<tamanho;i++){
        senha += chars.charAt(Math.floor(Math.random() * tamanho))
    }
    console.log("A sua senha de "+tamanho+" caracteres eh:"+senha)
}


function stop(){
    console.log("Encerrando o Sistema")
}


function menu(){
    let opcaoEscolhida
    do{
        console.log("Qual sistema você deseja acessar:\n1- Checa numeros\n2- Gera Senha\n3- Sair")
         opcaoEscolhida = (prompt("> "))

        switch(opcaoEscolhida){
            case "1":
                numeroCheck()
                break
            case "2":
                geraSenha()
                break
            case "3":
                stop()
                break
            default:
                console.log("Opção inválida")
        }
    }while(opcaoEscolhida != "3")
}

menu()