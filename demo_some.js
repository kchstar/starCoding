const fruits = [
    {name: '🍎',price: 300},
    {name: '🍌',price: 700},
    {name: '🍒',price: 500},
    {name: '🍇',price: 1000},

];

const doesExist = fruits.some((fruit)=>{
    if(fruit.price > 5600){
        return true;
    }
    return false;
});

console.log(doesExist);