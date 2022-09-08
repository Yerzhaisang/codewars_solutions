function digPow(n, p){
  // ...
  let arr = n.toString().split("");
  let summ = 0;
  for (let element of arr){
    summ+=parseInt(element)**p;
    p++;
  }
  if (summ%n!=0){
    return -1
  }
  return summ/n;
}
