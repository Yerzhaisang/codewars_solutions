function findNb(m) {
    // your code
  n=1;
  while (m>0){
    m-=n**3;
    n++;
  }
  if (m==0){
    return n-1;
  }
  return (-1);
}
