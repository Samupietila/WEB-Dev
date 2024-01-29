// const numbers = [2, 4, 6, 8, 10];

// const doubledNumbers = numbers.map((num) => num * 2);

// console.log('Original Numbers:', numbers);
// console.log('Doubled Numbers:', doubledNumbers);

// const temperaturesCelsius = [0, 15, 30, 45];

// const temperaturesKelvin = temperaturesCelsius.map((celsius) => celsius + 273.15);

// console.log('Celsius Temperatures:', temperaturesCelsius);
// console.log('Kelvin Temperatures:', temperaturesKelvin);

// const names = ['alice', 'bob', 'carol'];

// const capitalizedNames = names.map((name) => name.charAt(0).toUpperCase());

// console.log('Original Names:', names);
// console.log('Capitalized Names:', capitalizedNames);

// const originalArray = [10, 20, 30];
// const newArray = [...originalArray, 40, 50];

// console.log('Original Array:', originalArray);
// console.log('New Array with Additional Elements:', newArray);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const mergedArray = [...arr1, ...arr2, ...arr3];

// console.log('Array 1:', arr1);
// console.log('Array 2:', arr2);
// console.log('Array 3:', arr3);
// console.log('Merged Array:', mergedArray);

// const person = { name: 'Alice', info: { age: 30, occupation: 'Engineer' } };

// const { name, info: { age, occupation } } = person;

// console.log('Name:', name);
// console.log('Age:', age);
// console.log('Occupation:', occupation);

function greetUser({ name, age }) {
    console.log(`Hello, ${name}! You're ${age} years old.`);
  }
  
  greetUser({ name: 'Bob', age: 25 });