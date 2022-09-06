// Print the collatz sequence starting with positive integer n.
// Ex: collatz(4) should return "4->2->1"
function collatz(n){
  res = "";
  res+=n;
  while(n!=1){
    res+="->";
    if (n%2==0){
      res+=n/2;
      n = n/2;
    }
    else {
      res+=3*n+1;
      n = 3*n+1;
    }
  }
  return res;
}

