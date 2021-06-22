
//Espera carregar a pagina
document.addEventListener("DOMContentLoaded", constroiPagina);

//controi os elementos na pagina
function constroiPagina(){
    let divHeader = document.createElement('div');
    divHeader.className ='header-container';

    //crio 6 headers de h1 a h6
    for(let i = 1; i < 7; i++){

        let h = document.createElement(`h${i}`);
        let hText = document.createTextNode(`Isto é um h${i}`);
        h.appendChild(hText);
        h.className = `h${i}`;
        divHeader.appendChild(h);
    }

    //adiciono o div com as h's ao body da pagina
    document.body.appendChild(divHeader);

    //Crio um array de cores para que ao dar um duplo clique no botao a cor da div mude
    let colors = ['red', 'blue', 'green', 'orange', 'pink', 'yellow', 'purple', 'gray'];
    let buttonCor = document.createElement('button');
    let buttonText = document.createTextNode('clique duplo');
    buttonCor.appendChild(buttonText);

    //Adiciono o botão ao body e do o listener no duplo click
    document.body.appendChild(buttonCor);
    buttonCor.addEventListener('dblclick', alteraDiv);

    // função pra alterar a div
    function alteraDiv(){
        divHeader.style.backgroundColor = mudaCor();
    }

    //função pra retornar aleatoriamente uma cor
    function mudaCor(){
        let colorPick = parseInt(Math.random() * 8);
        let color = colors[colorPick];
        return color;
    }

    //crio o segundo botao pra criar item de lista ao clicar
    let button2 = document.createElement('button');
    let button2Text = document.createTextNode('Clique para adicionar um item a lista');
    button2.className = 'list-button';
    button2.appendChild(button2Text);

    //Adiciono o botão 2 ao body 
    document.body.appendChild(button2);    

    //criando item de lista apos cada clique
    button2.addEventListener('click', criaItem);
    let totalItens = 1;

    //função para criar items de lista, o numero do item aumento e ao clicar no item a cor muda aleatoriamente
    function criaItem(){
        let li = document.createElement('li');
        let liTexto = document.createTextNode(`${totalItens} item da lista`);
        li.appendChild(liTexto);

        //Toda vez q eu clicar num item eu altero especificamente ele
        li.addEventListener('click', alteraLi);

        //função para mudar cor do texto do item
        function alteraLi(){
            li.style.color = mudaCor();
        }

        //Toda vez q eu der um duplo clique, deletar este item da lista
        li.addEventListener('dblclick', deletaItem);

        function deletaItem(){
            document.body.removeChild(li);
        }

        //adiciono o item ao body e incremento o numero
        document.body.appendChild(li);
        totalItens++;
    }
    
}