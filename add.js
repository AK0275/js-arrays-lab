const foods = [];

console.log('Exercise 1 result;', foods);

foods.push('pizza', 'cheeseburger')

console.log('Exercise 2 result:', foods);

foods.unshift('taco')

console.log('Exercise 3 result:', foods);

let favFood = foods[1]

console.log('Exercise 4 result:', favFood);

foods.splice(2, 0, "tofu")

console.log('Exercise 5 result:', foods);

foods.splice(1, 1, 'sushi', 'cupcake')

console.log('Exercise 6 result:', foods);

