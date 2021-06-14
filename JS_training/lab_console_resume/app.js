console.log(('Nome: Vitor Fernando').toUpperCase());
console.log('estudei o que, onde?');
displayPosition('UFMT', 'Quimica', 'bacharel integral');
displayPosition('UFMT', 'Sistemas de informação', 'bacharel noturno');
displayPosition('FATEC', 'Agrocomputação', 'Tecnólogo integral');
console.log('Sei até bem lidar com:');
displaySkill('Python', true);
displaySkill('Violino', true);
displaySkill('COD MW3 Wii', false);
displaySkill('Wii Sports', false);
displaySkill('Numpy/pandas', true);

console.log('Sobre: Sou legal até');
console.log('Interesse: aprender um monte de coisa e fazer dinheiro');

function displayPosition(company, job, description){
    console.log(`Cursou ${job} na ${company} - ${description}`);
}

function displaySkill(skill, bool){
    if (bool == true){
        console.log(`BAM: ${skill}`);
    }else{
        console.log(skill);
    }
}