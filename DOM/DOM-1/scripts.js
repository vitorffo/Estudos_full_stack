document.addEventListener("DOMContentLoaded", constroiPagina);


function constroiPagina(){
    //Adicionando paragrafo a pagina
    let paragraph = document.createElement('p');
    let text = document.createTextNode('exemplo de frase sei la mano');
    paragraph.style.color = "red";
    paragraph.style.textTransform = "uppercase";
    paragraph.className = "some-paragraph";
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
    
    //Adicionando botão a pagina
    let button = document.createElement('button');
    let btnText = document.createTextNode('Click Me');
    button.appendChild(btnText);
    document.body.appendChild(button);

    //Executar função ao clicar no botao
    button.addEventListener("click", clicouBtn);

    function clicouBtn(){
        let h1 = document.createElement("h1");
        let h1Text = document.createTextNode('Eu cliquei');
        h1.appendChild(h1Text);
        document.body.appendChild(h1);
    }

    
}