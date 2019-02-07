var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

function map(arr, callback){
  var output = [];
  arr.forEach(function(item){
  var result = callback(item);
  output.push(result);
  })
  console.log(output);
}