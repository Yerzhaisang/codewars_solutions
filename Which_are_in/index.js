function inArray(array1,array2){
  //...
  res = [];
  for (let element2 of array2){
    for (let element1 of array1){
      if(element2.includes(element1)&&!res.includes(element1)){
        res.push(element1);
      }
    }
  }
  return res.sort();
}
