function compareVersions (version1, version2) {
  a = version1.split('.');
  b = version2.split('.');
  let lengthh = a.length<b.length?a.length:b.length;
  for (i=0;i<lengthh;i++){
    if (parseInt(a[i])>parseInt(b[i])){
      return true;
    }
    if (parseInt(a[i])<parseInt(b[i])){
      return false;
    }
  }
  if (a.length>=b.length){
    return true;
  }
  else {
    return false;
  }
  
}
