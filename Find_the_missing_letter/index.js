function findMissingLetter(array)
{
  let flag = false;
  let index = 0;
  let index_2 = 0;
  if (array[0].toLowerCase()!=array[0]){
    flag = true;
  }
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  length = alphabet.length;
  for (let i=0;i<length;i++){
    if (alphabet[i]==array[0].toLowerCase()){
      index=i;
      break;
    }
  }
  for (let i=index;i<length;i++){
    if (alphabet[i]!=array[index_2].toLowerCase()){
      if (flag) {return alphabet[i].toUpperCase();}
      else {return alphabet[i];}
    }
    index_2++;
  }
}
