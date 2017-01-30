var terbilang = ["","satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"];
var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19];
var nol = {
  1: 'puluh',
  2: 'ratus',
  3: 'ribu',
  4: 'puluh ribu',
  5: 'ratus ribu',
  6: 'juta',
  9: 'milyar',
  12: 'triliun'
}
// var result = ""

function to_words(val, result="") {
  valLength = val.toString().length;
  if(valLength > 12) {
    let firstChar = Number(val.toString()[0])
    c = Number(val.toString().substr(0, valLength % 12));
    result += to_words(c, result) + " triliun ";
    val %= 1000000000000;
    return to_words(val, result);
  }
  if(valLength > 9) {
    let firstChar = Number(val.toString()[0])
    c = Number(val.toString().substr(0, valLength % 9));
    result += to_words(c, result) + " miliar ";
    val %= 1000000000;
    return to_words(val, result);
  }
  if(valLength > 6) {
    let firstChar = Number(val.toString()[0])
    c = Number(val.toString().substr(0, valLength % 6));
    result += to_words(c, result) + " juta ";
    val %= 1000000;
    return to_words(val, result);
  }
  if(valLength >= 5) {
    let firstChar = Number(val.toString()[0])
    c = Number(val.toString().substr(0,3));
    result += to_words(c, result) + " ribu ";
    val %= 1000;
    return to_words(val, result);
  }
  if(valLength > 4) {
    let firstChar = Number(val.toString()[0])
    if (firstChar === 1) {
      firstChar = Number(val.toString().substr(0, 2))
      result += terbilang[firstChar] + " ribu ";
      val %= 1000;
      return to_words(val, result)
    }
    else {
      result += terbilang[firstChar] + " puluh ribu ";
    }
    val %= 10000;
    return to_words(val, result)
  }
  if(valLength == 4) {
    let firstChar = Number(val.toString()[0])
    if (firstChar === 1)
      result += "seribu ";
    else {
      result += terbilang[firstChar] + " ribu ";
    }
    val %= 1000;
    return to_words(val, result)
  }
  if(valLength == 3) {
    let firstChar = Number(val.toString()[0])
    if (firstChar === 1) {
      result += "seratus ";
    } else {
      result += terbilang[firstChar]
      result += " ratus "
    }
    val = val - (firstChar * 100)
    return to_words(val, result)
  }
  else if(valLength == 2) {
    let firstChar = Number(val.toString()[0])
    if (firstChar !== 1) {
      result += terbilang[firstChar]
      result += " puluh "
      val = val - (firstChar * 10)
    } else if (firstChar === 1) {
      result += terbilang[val];
      return result;
    }
    return to_words(val, result)
  } else {
    result += terbilang[val]
    return result
  }
}

console.log(to_words(1009111814147));
