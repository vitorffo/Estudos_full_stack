document.addEventListener("DOMContentLoaded", function(){

    let friendList = ['Juliano', 'Maria', 'Ganem', 'Silmar', 'Bruno', 'Lucas', 'Alan', 'Gabriel', 'Bruno Roo', 'Roni'];
    let fListIndex = 0;

    let colors = ['red', 'blue', 'green', 'orange', 'pink', 'yellow', 'purple', 'gray'];

    //crio o botao e coloco no body
    let button = document.createElement('button');
    let btnTxt = document.createTextNode('Botão');
    button.appendChild(btnTxt);
    document.body.appendChild(button);

    //alerta toda vez que clicar no botao
    button.addEventListener('click', function(){
        alert('clicou no botao');
    });

    //cria campo de texto e mais um botao
    let campoTxt = document.getElementById('campo-txt');
    let botao2 = document.getElementById('botao2');

    //o botao faz exibir um alerta com o que ta dentro da caixa de texto
    botao2.addEventListener('click', function(){
        alert(campoTxt.value);
    });

    //seleciono uma div vazia
    let divHover = document.getElementById('passa-mouse');
    //muda a cor sempre q o mouse fica em cima
    divHover.addEventListener('mouseover', function(){
        this.style.backgroundColor = 'red';
    });
    //muda a cor quando o mouse ta fora
    divHover.addEventListener('mouseout', function(){
        this.style.backgroundColor = 'black';
    })

    //muda a cor do paragrafo ao clicar no texto
    let paragrafo = document.getElementById('parag');
    paragrafo.addEventListener('click', function(){
        let colorPick = parseInt(Math.random() * 8);
        let color = colors[colorPick];

        paragrafo.style.color = color;
    })

    //crio mais um botao
    let newButton = document.createElement('button');
    let nButtonTxt = document.createTextNode('outro botao');
    newButton.appendChild(nButtonTxt);
    document.body.appendChild(newButton);

    //crio uma div
    let newDiv = document.createElement('div');
    document.body.appendChild(newDiv);

    //toda vez q eu clicar no botao e adiciono um span com meu nome e esse span fica dentro da div criada logo ali em cima.
    newButton.addEventListener('click', function(){
        let span = document.createElement('span');
        let spanTxt = document.createTextNode('Vitor');
        span.appendChild(spanTxt);
        newDiv.appendChild(span);
    });
    
    //crio mais um botao
    let botao3 = document.getElementById('botao3');
    let outraLista = document.getElementById('outra-lista');

    //quando eu clico nesse botao eu adiciono um item da minha lista de amigos como <li> dentro da <ul>
    botao3.addEventListener('click', function(){
        let novoLi = document.createElement('li');
        let textLi = document.createTextNode(friendList[fListIndex]);

        novoLi.appendChild(textLi);
        outraLista.appendChild(novoLi);

        //uso isso para percorrer todo o array e resetar ele quando chegar no fim
        if(fListIndex < 9){
            fListIndex ++;
        }else{
            fListIndex = 0;
        }
        
    });

});