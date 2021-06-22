//event listener pra quando a pagina toda estiver carregada executar a função de construção de elementos
document.addEventListener("DOMContentLoaded", constroiPagina);

//função para criar os elementos da pagina
function constroiPagina(){
    //variavel para contar quantas divs foram criadas e atribuir o numero ao Id da div a ser criada
    let conta_div = 1;

    //criar botao add square
    let divBtn = document.createElement('div');
    let buttonAddSqr = document.createElement("button");
    let buttonSqrText = document.createTextNode("Add Square");
    buttonAddSqr.appendChild(buttonSqrText);
    divBtn.appendChild(buttonAddSqr);
    divBtn.id = 'button';

    document.body.appendChild(divBtn);

    //adiciono o event listener pra quando clicar no botao, uma caixa preta ser gerada
    divBtn.addEventListener('click', createSquare);

    //função para criar a caixa preta
    function createSquare(){

        //pegando todos os elementos div e criando uma lista para coletar seus respectivos Id's para posterior checagem
        let divList = document.querySelectorAll('div');
        let divIdList = [];
        for(div of divList){
            divIdList.push(div.id);
        }
        //array de cores para serem usadas dentro da função mudaCor()
        let colors = ['red', 'blue', 'green', 'orange', 'pink', 'yellow', 'purple', 'gray'];

        //se a lista de Id's não conter o ID que vou criar agora, então ta liberado criar a caixa
        if(!divIdList.includes(conta_div.toString())){
            let div = document.createElement('div');
            div.className = 'box'
            div.id = conta_div;

            //adiciono event listeners pra quando eu passar e tirar o mouse de cima da caixa
            div.addEventListener('mouseover', mostraId);
            div.addEventListener('mouseout', escondeId);
            
            //quando o mouse tiver em cima eu mostro o Id da caixa na tela
            function mostraId(ev){
                ev.target.textContent = div.id;
            }

            //quando o mouse não tiver em cima eu tiro o Id da caixa
            function escondeId(ev){
                ev.target.textContent = '';
            }

            //evento pra quando clicar na caixa, a cor dela mudar aleatoriamente
            div.addEventListener('click', mudaCor);
            //função que escolhe uma cor aleatoria altera a div
            function mudaCor(){
                let colorPick = parseInt(Math.random() * 8);
                let color = colors[colorPick];
                div.style.backgroundColor = color;
            }

            //evento pra quando der clique duplo, executar a função que checa se o id dentro dela é par ou impar
            div.addEventListener('dblclick', parOuImpar);

            //função para checar se o div.id é par ou impar
            function parOuImpar(){
                //se for par, eu removo a caixa seguinte
                if((div.id % 2) == 0) {
                    let proximoId = document.getElementById(parseInt(div.id)).nextElementSibling
                    //se o proximo ID NÃO for nulo, eu removo a caixa (ou seja, se a caixa EXISTE eu removo ela)
                    if(proximoId != null){
                        div.nextElementSibling.remove()
                    }else{
                        alert('não há caixas para serem removidas');
                    }
                    
                }else{
                    let idAnterior = document.getElementById(parseInt(div.id)).previousElementSibling
                    //Se o ID anterior não for nulo e não for o botão, então eu removo a caixa
                    if((idAnterior != null) && idAnterior.id != 'button'){
                        div.previousElementSibling.remove()
                    }else{
                        alert('não há caixas para serem removidas');
                    }
                }
            }

            //adiciono a caixa ao corpo e incremento a variavel que define as Id's das caixas
            document.body.appendChild(div);
            conta_div++;

        }else{
            alert('Id da .box ja existe');
        }

        
    }

}