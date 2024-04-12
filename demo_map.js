const fruits = [
    {name: '🍎',price: 300},
    {name: '🍌',price: 700},
    {name: '🍒',price: 500},
    {name: '🍇',price: 1000},

];
const priceTags = fruits.map((fruit)=>{

    return`${fruit.name}-: ${fruit.price}-원`;
});
console.log(priceTags);