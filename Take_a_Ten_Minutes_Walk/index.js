function isValidWalk(walk) {
  //insert brilliant code here
  const counts = new Map([
  ["n", 0],
  ["s", 0],
  ["w", 0],
  ["e", 0]]);
  walk.forEach(myFunction);
  function myFunction(value) {
   counts.set(value,counts.get(value)+1);
  }
  console.log(counts.get("n"))
  if (counts.get('n')==counts.get('s')&&counts.get('w')==counts.get('e')&&counts.get('n')+counts.get('s')+counts.get('w')+counts.get('e')==10){
    return true;
  }
  else {
    return false;
  }
}
