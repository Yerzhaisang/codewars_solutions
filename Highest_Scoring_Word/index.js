function high(x){
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let words = x.split(" ");
  res2 = [];
  for (let wordd of words){
    res2.push(compute_score(wordd))
    console.log(compute_score(wordd));
  }

  
  function compute_score(word){
    let chars = word.split("");
    let res = chars.reduce(myFunction,0);
    
    
    function myFunction(accumulator, element) {
      return accumulator+alphabet.indexOf(element)+1;

    }
    return res;
  }
  return words[res2.indexOf(Math.max.apply(null, res2))];
  
}
