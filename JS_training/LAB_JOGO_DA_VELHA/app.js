let total_moves = 0;
let winning_positions = [
    ['top left'  , 'top middle' , 'top right' ],
    ['center left'  , 'center middle' , 'center right' ],
    ['bottom left'  , 'bottom middle' , 'bottom right' ],
    ['top middle'  , 'center middle' , 'bottom middle' ],
    ['top right'  , 'center right' , 'bottom right' ],
    ['top left'  , 'center left' , 'bottom left' ],
    ['top left'  , 'center middle' , 'bottom right' ],
    ['top right'  , 'center middle' , 'bottom left' ]
]

let all_x_positions = [];
let all_o_positions = [];
let match_status = '';

//listing all the 9 lines
let cells = document.querySelectorAll('.row div'); //cells é um array das 9 divs

//adding a eventListener to each cell to know when a click event happens
for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', cellClicked);
}

//the function to be executed when the cell is clicked, remember that each click generates an mouseEvent, 
//we need the target(div path) inside it to add the X and O
function cellClicked(ev){
    //resets everything after a draw or an winner
    if(match_status == 'WIN' || match_status == 'DRAW'){
        for (let i = 0; i < cells.length; i++){
            cells[i].textContent = '';
            match_status = '';
            all_x_positions = [];
            all_o_positions = [];
            total_moves = 0;
        }
        //prevents a player to replace an already marked cell
    }else if(ev.target.textContent != ''){
        alert('NOT ALLOWED');
    }else{
        //the first player is always X so the variable player starts with 0 and increments after every move, then i use % to check if the number inside
        //the variable player is even, even = X, odd = O, so 0 = X, 1 = O, 2 = X and so on...
        if((total_moves % 2) == 0){
            all_x_positions.push(`${ev.path[0].classList.value}`);
            ev.target.textContent = 'X';
            match_status = checkWinner('X');
        }else{
            ev.target.textContent = 'O'
            all_o_positions.push(`${ev.path[0].classList.value}`);
            match_status = checkWinner('O');
        }
        total_moves++;
    }
}

//simple winner checker, receives 'X' or 'O' as parameters
function checkWinner(player){
    //if all moves have been made without a winner, obviously it's a draw xD
    if(total_moves == 8){
        alert('DRAW');
        return('DRAW');
    }
    //for player O, i check all the possible winning moves combinations using a for loop and compare it to O's moves
    if(player == 'O'){
        for (position of winning_positions){
            if(all_o_positions.includes(position[0]) && all_o_positions.includes(position[1]) && all_o_positions.includes(position[2])){
                alert(`${player} WIN`);
                return('WIN');
            }
        }
    //the same thing i did above
    }else if (player == 'X'){
        for (position of winning_positions){
            if(all_x_positions.includes(position[0]) && all_x_positions.includes(position[1]) && all_x_positions.includes(position[2])){
                alert(`${player} WIN`);
                return('WIN');
            }   
        }
    }
}


