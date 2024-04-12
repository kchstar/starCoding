const fruits = [
    {name: '🍎',price: 300},
    {name: '🍌',price: 700},
    {name: '🍒',price: 500},
    {name: '🍇',price: 1000},

];

const cheapFruits = fruits.filter(()=>{
    if(fruits.price <= 500){
        return true;
    }
    return false;
});

console.log(cheapFruits);
console.log(fruits);
