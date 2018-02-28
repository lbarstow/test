function arrayReplacer(ar){
  //error handling to check input type would be added here
  let len = ar.length-1;
  for (var i = len; i >= 0; i--) {
    if (typeof ar[i] !== 'number'){
      ar.splice(i, 1);
    }
  }
  return ar
}
