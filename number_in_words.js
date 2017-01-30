function in_words(angka) {
  // Your code here
  let a = '';
  let c = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let d = ["satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "selapan", "sembilan"];
  // let e = [100, 10, 1];
  // let f = ["Ratus", "Puluh", ""];

  if (angka / 100 >= 1) {
    for(i=0; i<c.length; i++) {
      if (c[i] === Math.floor(angka/100)) {
        if(c[i] === 1)
          a += "seratus ";
        else
          a += d[i] +  " " + "ratus ";

        angka = angka % 100;
      }
    }
  }

  if(angka / 10 >= 1) {
    for(i=0; i<c.length; i++) {
      if (c[i] === Math.floor(angka/10)) {
        if(c[i] === 1) {
          for(i=0; i<c.length; i++) {
            if (c[i] === angka % 10) {
              if (c[i] === 1) {a += "sebelas"}
              else {a += d[i] + " belas";}
            }
          }
          return a;
        }
        else {a += d[i] +  " " + "puluh "};
        angka = angka % 10;
      }
    }
  }
  
  for(i=0; i<c.length; i++) {
    if (c[i] === angka) {
      a += d[i];
    }
  }
  return a;

}

// Driver code
console.log(in_words(2));
