"use strict"

var satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima',
              'enam', 'tujuh', 'delapan', 'sembilan']
let belasan = ['sepuluh', 'sebelas', 'duabelas', 'tigabelas', 'empatbelas',
              'limabelas', 'enambelas', 'tujuhbelas', 'delapanbelas', 'sembilanbelas']

function in_words(angka, result=''){

  if (angka.toString().length == 13 || angka.toString().length == 14 || angka.toString().length == 15 ) {
    // 1.000.000.000.000

    if (Math.floor(angka / 1000000000000).toString().length > 1 ) {
      // console.log(angka - (Math.floor(angka / 1000000000) * 1000000000 ));
      return in_words(Math.floor(angka / 1000000000000), result) + ' triliun '
              + in_words((angka - (Math.floor(angka / 1000000000) * 1000000000 )), result)
    }
    let firstChar = angka.toString()[0]
    result += satuan[firstChar]
    result +=  ' triliun '
    angka = angka - (firstChar * 1000000000000)

    // console.log(result);
    return in_words(angka, result)
  }

  if (angka.toString().length == 10 || angka.toString().length == 11 || angka.toString().length == 12 ) {

    if (Math.floor(angka / 1000000000).toString().length > 1 ) {
      // console.log('log woy!' + (angka - (Math.floor(angka / 1000000000) * 1000000000)));
      return in_words(Math.floor(angka / 1000000000), result) + ' miliar '
              + in_words((angka - (Math.floor(angka / 1000000000) * 1000000000)), result)
    }
    let firstChar = angka.toString()[0]
    result += satuan[firstChar]
    result +=  ' miliar '
    angka = angka - (firstChar * 1000000000)

    // console.log(result);
    return in_words(angka, result)

  }

  if (angka.toString().length == 7 || angka.toString().length == 8 || angka.toString().length == 9 ) {
    if (Math.floor(angka / 1000000).toString().length > 1 ) {
      return in_words(Math.floor(angka / 1000000), result) + ' juta '
            + in_words((angka - (Math.floor(angka / 1000000) * 1000000)), result)
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
      return in_words(Math.floor(angka / 1000), result) + ' ribu '
            + in_words((angka - (Math.floor(angka / 1000) * 1000)), result)
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

  } else if (angka.toString().length == 2 || angka.toString().length == 1) {
    if (angka < 20) {
        if (angka > 10) {
            let temp = angka -10
            let firstChar = angka.toString()[0]
            result += belasan[temp]
            angka -= (firstChar * 10)
            return result
        } else {
          result += satuan[angka]
          return result
        }
        return in_words(angka, result)

    } else {
      let firstChar = angka.toString()[0]
      result += satuan[firstChar] + ' '
      result +=  ' puluh '
      angka = angka - (firstChar * 10)
      return in_words(angka, result)
    }
  } else {
    // result += satuan[angka]
  }
  return result
}

// Driver code
// console.log(in_words(4));
console.log('15 : ' + in_words(15));
console.log('132 : ' +  in_words(132));
console.log('89 : ' + in_words(89));
console.log('12333333' + in_words(12333333)); // 12.333.333
console.log('999922233333315' + in_words(999922233333315)); // 999.922.233.333.300
// console.log(in_words(999000000000000));
