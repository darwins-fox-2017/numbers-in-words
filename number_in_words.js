// function in_words(angka, result='') {
//   // Your code here
// var satuSampaiSembilanBelas = ['', 'Satu', 'Dua', 'Tiga', 'Empat',
//                                 'Lima', 'Enam', 'Tujuh', 'Delapan',
//                                 'Sembilan', 'Sepuluh', 'Sebelas',
//                                 'Dua belas', 'Tiga belas', 'Empat belas',
//                                 'Lima belas', 'Tujuh belas', 'Delapan belas',
//                                 'Sembilan belas'];
// var puluhans = ['Dua Puluh', 'Tiga Puluh', 'Empat Puluh',
//                'Lima Puluh', 'Enam Puluh', 'Tujuh Puluh',
//                'Delapan Puluh', 'Sembilan Puluh'];
// var lebihDariSeratus = ['Ratus', 'Ribu', 'Juta', 'Miliar', 'Triliun'];
// var satuan, puluhan, ratusan;
// if (angka < 20) {
//   return satuSampaiSembilanBelas[angka];
// } else if (angka < 100) {
//   puluhan = (Math.floor(angka / 10) - 2);
//   // console.log(puluhan);
//   satuan = angka % 10;
//   return puluhans[puluhan] + ' ' + satuSampaiSembilanBelas[satuan];
// } else if (angka < 1000) {
//   ratusan = Math.floor(angka / 100);
//
//   puluhan = angka % 10;
//   if (puluhan < 20) {
//     return satuSampaiSembilanBelas[ratusan] + ' ' + lebihDariSeratus[0] + ' ' +satuSampaiSembilanBelas[puluhan];
//   }
//   console.log(puluhan);
//
//   return satuSampaiSembilanBelas[ratusan] + ' ' + lebihDariSeratus[0];
// }
//
// }
var satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima',
              'enam', 'tujuh', 'delapan', 'sembilan']

function in_words(angka, result=''){


  if (angka.toString().length == 7 || angka.toString().length == 8 || angka.toString().length == 9 ) {
    if (Math.floor(angka / 1000000).toString().length > 1 ) {
      return in_words(Math.floor(angka / 1000000), result) + ' juta ' + in_words((angka - (Math.floor(angka / 1000000) * 1000000)), result)
    }
    let firstChar = angka.toString()[0]
    result += satuan[firstChar]
    result +=  ' juta '
    angka = angka - (firstChar * 1000000)
    // console.log(result);
    return in_words(angka, result)

  }
  if (angka.toString().length == 4 || angka.toString().length == 5 || angka.toString().length == 6 ) {
    if (Math.floor(angka / 1000).toString().length > 1 ) {
      return in_words(Math.floor(angka / 1000), result) + ' ribu ' + in_words((angka - (Math.floor(angka / 1000) * 1000)), result)
    }
    let firstChar = angka.toString()[0]
    result += satuan[firstChar]
    result +=  ' ribu '
    angka = angka - (firstChar * 1000)
    // console.log(result);
    return in_words(angka, result)

  } else if (angka.toString().length == 3) {
    let firstChar = angka.toString()[0]
    result += satuan[firstChar]
    result +=  ' ratus '
    angka = angka - (firstChar * 100)
    return in_words(angka, result)

  } else if (angka.toString().length == 2) {
    if (angka < 20) {
      let firstChar = angka.toString()[0]
      result += satuan[firstChar]
      result +=  ' belas '
      angka = angka - (firstChar * 10)
      return in_words(angka, result)
    } else {
      let firstChar = angka.toString()[0]
      result += satuan[firstChar]
      result +=  ' puluh '
      angka = angka - (firstChar * 10)
      return in_words(angka, result)
    }
  } else {
    result += satuan[angka]
  }
  return result
}

// Driver code
console.log(in_words(4));
console.log(in_words(15));
console.log(in_words(102));
// console.log(in_words(13336779));
// console.log(in_words(82102713));
