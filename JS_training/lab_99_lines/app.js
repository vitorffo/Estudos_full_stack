let friends = ['Juliano', 'Lucas', 'Maria', 'Ganem', 'Bruno'];

for(let friend of friends){
    for(i=99; i >= 1; i--){
        if(i==1){
            console.log(`${friend} ${i} linha de codigo`);
            break;
        }
        console.log(`${friend} ${i} linhas de codigo`);
    }
}