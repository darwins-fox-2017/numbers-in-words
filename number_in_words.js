function in_words(angka, words = "") {
  let satuan  = ["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan"];
  let puluhan = ["sepuluh","sebelas","dua belas","tiga belas","emapt belas","lima belas","enam belas", "tujuh belas","delapan belas","sembilan belas"," seratus "];
  let unique  = ["satu puluh","satu puluh satu","satu puluh dua","satu puluh tiga","satu puluh empat","satu puluh lima","satu puluh enam","satu puluh tujuah",
                 "satu puluh delapan","satu puluh sembilan"," satu ratus "];
  let plus    = [" ribu "," juta "," miliyar "," triliun "];
  let str     = angka + "";
  let convert = parseInt(str[0]);

  for (let i = 3; i < 16; i += 3) {
    if(str.length === i){
      if(convert != 0){
        words += satuan[convert] + " ratus ";
      }
      return in_words(str.slice(1,i), words)
    }
  }

  for (let i = 2; i < 15; i += 3) {
    if(str.length === i){
      if (convert != 0) {
        words += satuan[convert] + " puluh ";
      }
      return in_words(str.slice(1,i), words)
    }
  }

  for (let i = 4, j = 0; i < 14; i += 3, j += 1) {
    if(str.length === i){
      if(convert != 0){
        words += satuan[convert] + plus[j];
      }
      return in_words(str.slice(1,i), words)
    }
  }

  if(str.length === 1){
    words += satuan[angka];
  }

  for (let i = 12; i >= 0; i--){
    words = words.replace(unique[i], puluhan[i])
  }
  return words
}

// Driver code
console.log(in_words(4));
console.log(in_words(11));
console.log(in_words(27));
console.log(in_words(102));
console.log(in_words(38079));
console.log(in_words(82102713));
console.log(in_words(999000000000000));
console.log(in_words(999999999999999));
