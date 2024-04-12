const fruits = [
    {name: '🍎',price: 300},
    {name: '🍌',price: 700},
    {name: '🍒',price: 500},
    {name: '🍇',price: 1000},

];
const item = fruits.find((fruit, index)=>{
    if(fruit.price === 500 && index === 2){
        return true;
    }
        return false; 
});

console.log(item);