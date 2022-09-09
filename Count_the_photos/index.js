// return the total number of photos.
// it should return an integer
function countPhotos(road){
  let els = road.split("");
  let lefts = 0;
  let rights = 0;
  let sum = 0;
  for (let element of els){
    if (element==">"){
      rights++;
    }
    else if (element=="."){
      lefts++;
      sum+=rights;
    }
    else if (element=="<"){
      sum+=lefts;
    }
  }
  return sum;

}
