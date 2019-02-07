var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(index, value) {
  return Math.sqrt(index.x**2 + index.y**2);

});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

//Pythagorean Theorem (x^2 + y^2 = z^2)
