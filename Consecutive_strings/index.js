function longestConsec(strarr, k) {
    // your code
  if (strarr.length==0||k>strarr.length||k<=0){
    return "";
  }
  length = strarr.length;
  max = 0;
  res = "";
  for (let i=0; i<length-k+1; i++){
    if (strarr.slice(i,i+k).join("").length>max){
      max = strarr.slice(i,i+k).join("").length;
      res = strarr.slice(i,i+k).join("");
    }
  }
  return res;
}
