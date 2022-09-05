function solution(number){
  if (number<3){
    return 0;
  }
  let summ = 0;
  for (let i=3;i<number;i++){
    if (i%3==0||i%5==0){
      summ+=i;
    }
  }
  return summ;
}
