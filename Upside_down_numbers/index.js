function solve(x, y) {
 //..
  res = 0;
  for (let i=x;i<y;i++){
    if (check(i)){
      res++;
    }
  }
  function check(value){
    let arr = value.toString().split("");
    let i=0; let j=arr.length-1;
    if (i==j){
      if (arr[i]==0||arr[i]==1||arr[i]==8){
        return true;
      }
      else {
        return false;
      }
    }
    while(j>=i){
      if (arr[i]==0&&arr[j]==0){
        j--; i++;
        continue;
      }
      else if (arr[i]==1&&arr[j]==1){
        j--; i++;
        continue;
      }
      else if (arr[i]==8&&arr[j]==8){
        j--; i++;
        continue;
      }
      else if (arr[i]==6&&arr[j]==9){
        j--; i++;
        continue;
      }
      else if (arr[i]==9&&arr[j]==6){
        j--; i++;
        continue;
      }
      else {
        return false;
      }
    }
    return true;
  }
  return res;
};
