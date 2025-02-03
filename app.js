//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

//criando array para guardar os nomes dos amigos


let amigos = []; // vetor para guardar o nomes 
let novaLista =  []; // vetor auxiliar
//função para guardar os nomes na lista de amigos
function adicionarAmigo(){
      //recupera o valor do inserido no campo input
    let nomes = document.querySelector('input').value;
    
    //verificando se o campo esta vazio     
    if(nomes == ""){
            alert("Preencha os campos corretamente");
    }else{
            amigos.push(nomes);    
            //new set garante que não exista valores repetidos
            const conjunto = new Set(amigos);
            const listaElementosUnicos = Array.from(conjunto);
            novaLista = listaElementosUnicos;


            limparCampo(); 
            mostrarLista();
            console.log(listaElementosUnicos);//para teste
    }

   

}//fim da função adicionar

function limparCampo() {
    //limpando o campo input
    campo = document.querySelector('input');
    campo.value = '';
}

function mostrarLista(){
    //transformando cada elemento do array em um li html
    document.getElementById('listaAmigos').innerHTML = 
    novaLista.map(item=>`<li>${item}</li>`).join('');

  }

function sortearAmigo(){
    //verificar se a lista não esta vazia
    if(novaLista.length < 2){
        alert("Para realizarmos o sorteio, será necessario 2 ou mais amigos");
    }else{
        const elemento = novaLista[Math. floor(Math. random() * novaLista. length)]
        console.log(`o amigo sorteado é ${elemento}!`)
        //mostrando o ganhador na tela
        document.getElementById('resultado').innerHTML = elemento;
    }
 }