// Return the output array, and ignore all non-op characters
function parse( data )
{
  res = [];
  ls = Array.from(data);
  ind = 0;
  init = 0;
  for (let element of ls){
    if (element=="i"){
      init++;
    }
    if (element=="d"){
      init--;
    }
    if (element=="s"){
      init=init**2;
    }
    if (element=="o"){
      res.push(init);
    }
    
  }
  return res;
}

