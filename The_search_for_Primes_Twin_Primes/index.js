function twinPrime(n) {
  res = 0;
  const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
  }
  for (let i=2; i<n; i++){
    if (isPrime(i)&&isPrime(i+2)){
      res++;
    }
  }
  return res;
}
