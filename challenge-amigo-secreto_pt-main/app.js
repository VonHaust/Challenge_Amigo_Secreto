/*Auth: March
Date: 18/03/2024 (dd/mm/yyyy)
Platform: VSCode
Language: JavaScript, HTML, CSS
Description: Código para um jogo de sorteio de amigo secreto.
*/

//Iniciamos o código com um array vazio para armazenar os nomes dos amigos que serão sorteados.
let amigos = [];

//Criamos a função para adicionar amigos ao array.
function adicionarAmigo() {
    //Acessamos a tag "nomeAmigo" dentro do campo "Input" no HTML e armazenamos em uma variável.
    let input = document.getElementById('nomeAmigo');
    //Armazenamos isso em outra variável e executamos um "trim()" em cima dela para remover espaços em branco.
    let nome = input.value.trim();

    //Padronizamos o nome para a primeira letra maiúscula e o restante minúscula.
    nome = nome.toLowerCase().split(' ').map(function(nomeInformado) {
        return nomeInformado.charAt(0).toUpperCase() + nomeInformado.slice(1);
    }).join(' ');

    //Verificamos se o campo está vazio. Se sim, exibimos um alerta.
    if (nome === '') {
        alert('Por favor, informe um nome para sortear.');
        return;
    //Verificamos se o nome já foi adicionado. Se sim, limpamos o campo.
    } else {
        if (amigos.includes(nome)) {
            alert('Este nome já foi adicionado. Por favor, informe outro nome.');
            input.value = '';
        //Se o nome não foi adicionado, adicionamos ao array e chamamos a função "atualizarLista()".
        } else {
            amigos.push(nome);
            atualizarLista();
        }
        // Limpamos o campo de entrada após o processamento
        document.getElementById('nomeAmigo').value = '';
    }
}

//Criamos a função para atualizar a lista de amigos.
function atualizarLista() {
    //Acessamos a tag "listaAmigos" dentro do campo "ul" no HTML e armazenamos em uma variável.
    let lista = document.getElementById('listaAmigos');
    //Limpamos a lista para evitar duplicidade.
    lista.innerHTML = '';
    
    //Aplicamos a função forEach() para percorrer o array "amigos" e que:
    amigos.forEach(nome => {
    //Cria um elemento (<li>);
    let li = document.createElement('li');
    //Determina o valor de <li> como o valor da variável nome;
    li.textContent = nome;
    //Adiciona <li> como uma child da tag="listaAmigos". Assim, para cada nome no array, um item (elemento) de lista é criado.
    lista.appendChild(li);
    });
  }

//Criamos a função para sortear os amigos.
function sortearAmigo() {
    //Verificamos se a quantidade de amigos é menor que 2. Se sim, exibimos um alerta.
    if (amigos.length < 2) {
        alert('Por favor, adicione pelo menos 2 amigos para sortear.');
    //Se a quantidade de amigos for maior ou igual a 2, executamos o sorteio.
    } else {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto é: ${amigoSorteado}!`;
        //Desabilitamos o botão de sortear.
        document.getElementById('break').setAttribute('disabled', true);
    }
}

//Criamos a função para limpar a lista de amigos e habilitar o botão de sortear.
function limparLista() {
    amigos = [];
    atualizarLista();
    resultado.innerHTML = '';
    document.getElementById('break').removeAttribute('disabled');
}
