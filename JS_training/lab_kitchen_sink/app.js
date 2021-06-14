/*comentario simples */
let name = 'Vitor';
const total_estados_br = 26;
let soma = 5 + 4;

function sayHello(){
    alert('Za warudo');
}

sayHello();

function checkAge(name, age) {
    if (age < 21){
        alert(` ${name}, tu não vai beber não`);
    }
}

checkAge('Vitor', 24);
checkAge('Vitor 2014', 17);
checkAge('joao vitor', 18);

let vegetais = ['brocolis', 'couve-flor', 'vagem', 'quiabo']
for (let veg of vegetais){
    console.log(veg);
}

let pet = {
    'name': 'Benny',
    'breed': 'Labrador'
}

console.log(pet);

let some_array = [
    {'name': 'Vitor 2014', 'age': 17},
    {'name': 'João Vitor', 'age': 18},
    {'name': 'Vitoria', 'age': 26},
    {'name': 'Boris', 'age': 31},
    {'name': 'Krum', 'age': 32},
]

for (let s_array of some_array){
    checkAge(s_array.name, s_array.age);
}

function getLength(word){
    return word.length;
}

let word_length = getLength('Hello World');
if((word_length % 2) == 0){
    console.log('The world is nice and even!')
}else{
    console.log('The world is an odd place!')
}