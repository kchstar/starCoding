const fruits = [
    {name: '🍎',price: 300},
    {name: '🍌',price: 700},
    {name: '🍒',price: 500},
    {name: '🍇',price: 1000},

];

const isOver = fruits.every((fruit) => {
    if(fruit.price > 100){
        return true
    }
    return false 
})

console.log(isOver);