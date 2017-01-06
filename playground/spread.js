var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet(a, b) {
  console.log('Hi ' + a + ', you are ' + b);
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function(f) {
  console.log('Hi ' + f);
});
