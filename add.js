const foods = [];

console.log('Exercise 1 result;', foods);

foods.push('pizza', 'cheeseburger')

console.log('Exercise 2 result:', foods);

foods.unshift('taco')

console.log('Exercise 3 result:', foods);

let favFood = foods

favFood.pop('pizza')

favFood.unshift('pizza')

favFood.forEach((favFood, index) => {

    console.log(`${index}: ${favFood}`)
})

console.log('Exercise 4 result:', favFood);