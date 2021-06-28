$(document).ready(function(){
    //array de cores
    let colors = ['red', 'blue', 'green', 'orange', 'pink', 'yellow', 'purple', 'gray'];

    //crio uma lista sem ordem 
    $(document.body).append('<ul id="unordered-list"></ul>');

    //ativo o botão de submit só se o usuario digitar algo na text-field
    $('#text-field').on('input', function(){
        $('#btnSubmit').prop('disabled', false);
    });

    //adiciono um item na lista quando o usuario clicar no botão
    $('#btnSubmit').click(function(){
        
        //adiciono um li na lista com o texto do text-field
        $('#unordered-list').append('<li>' + $('#text-field').val() + '</li>');
        
        //Muda a cor das letras do li
        $('li').click(function() {
            let colorPick = parseInt(Math.random() * 8);
            let color = colors[colorPick];
            $(this).css('color', color);
        });

        //removo o li ao dar um clique duplo
        $('li').dblclick(function(){
            $(this).remove();
        })

        //coloquei esse return false para a pagina não ser recarregada automaticamente depois de clicar
        return false
    });

});


