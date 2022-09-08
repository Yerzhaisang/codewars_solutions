function towerBuilder(nFloors) {
  // build here
  let res = [];
  let stars = nFloors*2-1;
  let sum_of_stars = 1;
  let start = parseInt(stars/2);
  for (let i=0;i<nFloors;i++){
    temp = "";
    for (let i=0;i<start;i++){
      temp+=" ";
    }
    for (let i=start;i<start+sum_of_stars;i++){
      temp+="*";
    }
    for (let i=start+sum_of_stars;i<stars;i++){
      temp+=" ";
    }
    sum_of_stars+=2;
    start--;
    res.push(temp);
  }
  return res;
}
