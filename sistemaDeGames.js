const prompt = require('prompt-sync')();




let time = [];
let continuar = true;


function mostrarJogadores(){
   if(time.length === 0){
    console.log("NENHUM....");
    
   } else {

    for(let i = 0; i< time.length; i++){
        jogador = time[i]

        console.log("Nome: " + jogador.nome + " | " + jogador.funcaoDoJ + "|" + jogador.pontuacaoDoJ);


    }
   }

}
function mostrarOpcoes(){
    console.log("1-SAIR");
    console.log("2-ADICIONAR JOGADOR");
    console.log("3-DELETAR");
    console.log("4- cacular média");
    console.log("5 - Atualizar Pontos");
    console.log("6 - Buscar Jogador");

}

function adicionarJogador(){
        
            let permanecer = true;

            while(permanecer){
                console.log("DIGITE 0 CASO QUEIRA SAIR DA ZONA ADICIONAR");
                console.log("-------------------------------------------");
                mostrarJogadores();
            let nomeDoUsuario = prompt('Digite seu nome: ');
            nomeDoUsuario = nomeDoUsuario.toUpperCase();

            
            if(nomeDoUsuario == 0){

                permanecer = false;
            } else{
            let funcao = prompt("DIGITE A FUNÇÃO DESSE JOGADOR: ");
            
            let pontuacao = Number(prompt("DIGITE A PONTUAÇÃO DESSE JOGADOR: "));
              if(isNaN(pontuacao)){
                console.log("DIGITE UM NÚMERO VÁLIDO");
                return
            }

            let jogador = {
                nome: nomeDoUsuario,
                funcaoDoJ: funcao,
                pontuacaoDoJ: pontuacao

            };


            



        
            

                if(isNaN(pontuacao)){
                    return
                }  else{
            time.push(jogador);

                console.log("JOGADOR ADICONADO COM SUCESSSO!! " + jogador.nome);
                    
                }

            }

            

            }
}

function deletarJogador(){

    mostrarJogadores();
   
        let nomeDoUsuario = prompt('Digite o nome do jogador a ser deletado: ');
        nomeDoUsuario = nomeDoUsuario.toUpperCase();

        if(time.length === 0){
            console.log("NÃO EXISTE JOGADORES PARA DELETAR");
            return
        } else{

        for(let i = 0; i < time.length; i++){
            if(time[i].nome === nomeDoUsuario){
                time.splice(i, 1);
                console.log("JOGADOR DELETADO COM SUCESSO!!");
                console.log("jogadores restantes: ");
                mostrarJogadores();
                

                break;
            } 
        }
    }

}

function calcularMedia(){
        if(time.length === 0){
            console.log("não ha jogadores para calcular a média")
        } else {
            let total = 0;
            for(let i = 0; i < time.length; i++){
                total += time[i].pontuacaoDoJ;

                //


                
            } // isso está fora do for, pois queremos que a média seja calculada depois de somar todos os jogadoress

            
                let media = parseFloat(total / time.length);


                console.log("MEDIA DA EQUIPE É: " +  media);

        }
}

function AtualizarPontos(){

    if(time.length === 0){
        console.log("não ha jogadores para atualizar pontos")
        return;
        } else {

            mostrarJogadores();
            console.log("--- ATUALIZAÇÃO DE RANKING --- ");

            let nomeBusca = prompt("DIGITE O NOME DO JOGADOR: ");
            
            nomeBusca = nomeBusca.toUpperCase();

            for(let i = 0; i < time.length ; i++){
              
                if(time[i].nome === nomeBusca){
                    
                    console.log(time[i].nome)
                    console.log("PONTUAÇÃO ATUAL: " + time[i].pontuacaoDoJ);
                    let novaPontuacao = Number(prompt("DIGITE A PONTUAÇÃO QUE ELE GANHOU: "));
                    if(isNaN(novaPontuacao)){
                        console.log("DIGITE UM NÚMERO VÁLIDO");
                        return
                    }
                    novaPontuacao += time[i].pontuacaoDoJ

                    time[i].pontuacaoDoJ = novaPontuacao;

                    console.log("SUCESSO! A pontuação de " +  nomeBusca +  " subiu para: " + novaPontuacao + " pontos");
                    return
                }
            }
            console.log("JOGADOR NÃO ENCONTRADO! DIGITE NOVAMENTE MAIS TARDE");
    }

}



function buscarJogador(){
    if(time.length === 0){
        console.log("NÃO HÁ JOGADORES CADASTRADOS PARA BUSCAR");
        return;
    }

    let nomeDesejado = prompt("DIGITE O NOME DO JOGADOR QUE DESEJA BUSCAR: ");
    nomeDesejado = nomeDesejado.toUpperCase();

    let encontrou = false;

    for(let i = 0; i < time.length; i++){
        let jogadorAtual = time[i];

        if(jogadorAtual.nome === nomeDesejado){
            console.log("JOGADOR ENCONTRADO!");
            console.log("Nome: " + jogadorAtual.nome +
                        " | Função: " + jogadorAtual.funcaoDoJ +
                        " | Pontos: " + jogadorAtual.pontuacaoDoJ);
            encontrou = true;
            break;
        }
    }

    if(encontrou === false){
        console.log("O jogador " + nomeDesejado + " não faz parte da nossa equipe.");
    }
}

while(continuar == true){
    mostrarOpcoes();
    let opcao = Number(prompt('opção: '));

if(opcao == 1){
    continuar = false;
} else if(opcao == 2){ 

     adicionarJogador();

      } else if (opcao == 3){
        deletarJogador();
      
      } else if(opcao == 4){
           calcularMedia();
      } else if(opcao == 5){
           AtualizarPontos();
      } else if(opcao == 6){
           buscarJogador();
      } else {
        console.log("opção inválida");
      }
    }
