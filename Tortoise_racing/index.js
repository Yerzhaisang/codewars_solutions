/*function race(v1, v2, g) {
    // your code
  if (v1>v2){
    return null;
  }
  let diff = v2 - v1;
  diff = g/diff;
  console.log(diff)
  hour = Math.floor(diff);
  diff-=hour; diff*=60;
  minutes = Math.floor(diff);
  diff-=minutes; diff*=60;
  return [hour, minutes, Math.floor(diff)];
}*/

function race(v1, v2, g) {
  let res = g / (v2 - v1);
  return v2 > v1 ? [Math.floor(res), Math.floor((res * 60) % 60), Math.floor((res * 3600) % 60) ] : null;
}
