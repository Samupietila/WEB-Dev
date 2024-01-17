// PART 1/3
// 1.
function cube(x) {
    return x * x * x;
  }
let cubeExp = (x) => x * x;
  // 2.
function fullName(first, last) {
    return first + " " + last;
  }
let fullNameExp = (first, last) => first + ' ' + last
  // 3.
  function power(base, exp) {
    if (exp === 0) {
      return 1;
    }
    return base * power(base, exp - 1);
  }
let powerExp = (base, exp) => {
    if (exp === 0) {
        return 1;  
    }
    return base * power(base, exp -1);
}
  // 4.
  function sumCubes(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total = total + cube(numbers[i]);
    }
    return total;
  }
  let sumCubesExp = (numbers) => {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += cube(numbers[i]);
    }
    return total;
  }

  // PART 2/3

// 1.  Why does JavaScript output undefined instead of throwing an error in the following code?
// console.log(message);
// var message = 'Hi there!';
// A: The variable called 'message' is defined after the console.log(message), so it has nothing in it at the time is should log.

// 2. Why does JavaScript throw an error instead of logging undefined in the following code?
// console.log(message);
// let message = 'Hi there!';
// A: Well, the reason it won't give the right message is same as in the 1st question, but i think this time it gives an error because of the 'var' has bigger scope?

// 3. Explain precisely what happens when the following code is executed.
// console.log(showMessage());
// const showMessage = function(){
//   return 'Hi there!';};
// A: When executing the following code, it gives you an 'ReferenceError:' because it cannot access the function showMessage(), because it is being initialized after the console.log()

// 2. Why does JavaScript not throw any errors when the following code is executed?
// console.log(showMessage());
// function showMessage(){
//   return 'Hi there!';};
// A: There is no error because the way of this function is made. It is declared, so the program will take read it before it executes other lines.


// PART 3/3
// 1.
let values = [10, 20, 30];
for(let i = 0; i < values.length; i++){
    console.log(values[i]);
  }
// 2. 
// 2.
let lastLogin = '1/1/1970';
function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};
console.log(welcome('Charlie', 'Munger'));