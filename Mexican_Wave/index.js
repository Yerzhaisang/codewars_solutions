function wave(str){
  // Code here
  if (str==""){
    return [];
  }
  res = [];
  if (str.charAt(0)!=" "){
    res.push(str.charAt(0).toUpperCase()+str.slice(1));
  }
  for (let i=1;i<str.length-1;i++){
    if (str.charAt(i)==" "){
      continue;
    }
    res.push(str.slice(0,i)+str.charAt(i).toUpperCase()+str.slice(i+1));
  }
  if (str.charAt(str.length-1)!=" "){
    res.push(str.slice(0,str.length-1)+str.charAt(str.length-1).toUpperCase());
  }
  
  return res;
}
