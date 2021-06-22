document.addEventListener('DOMContentLoaded', iniciaPagina);
let friends = ['Juliano', 'Lucas', 'Maria', 'Ganem', 'Bruno'];


function iniciaPagina(){
    button = document.getElementById('sing');
    button.addEventListener('click', canta);

}

function canta(){
    
    for(let friend of friends){
        let div = document.createElement('div');
        let dFriendText = document.createTextNode(friend);
        let h3 = document.createElement('h3');
        let paragraph = document.createElement('p');

        div.className = 'friend';

        h3.appendChild(dFriendText);
        div.appendChild(h3);

        for(let friend of friends){
            for(i=99; i >= 1; i--){
              if(i==1){
                  paragraph.appendChild(document.createTextNode(`${friend} ${i} linha de codigo `));
                  break;
              }
              paragraph.appendChild(document.createTextNode(`${friend} ${i} linhas de codigo `));
         }
    }

        div.appendChild(paragraph);
        document.body.appendChild(div);
    }

}
