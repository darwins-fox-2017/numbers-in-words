
var words = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas", "duabelas", "tigabelas", "empatbelas", "limabelas", "enambelas", "tujuhbelas", "delapanbelas", "sembilanbelas"]

function in_words(angka, result = ""){

  if(angka.toString().length == 5){
     let firstChar = angka.toString()[0]
     result += words[firstChar]
     result += " puluh ribu "
     angka = angka - (firstChar * 10000)
     return in_words(angka,result)
  } else if(angka.toString().length == 4){
     let firstChar = angka.toString()[0]
     result += words[firstChar]
     result += " ribu "
     angka = angka - (firstChar * 1000)
     return in_words(angka,result)
  }else if(angka.toString().length == 3){
    let firstChar = angka.toString()[0]
    result += words[firstChar]
    result += " ratus "
    angka = angka - (firstChar * 100)
    return in_words(angka,result)
  } else if(angka.toString().length == 2){
    if(angka < 20 && angka > 10){
      return result += words[angka]
    }
    let firstChar = angka.toString()[0]
    result += words[firstChar]
    result += " puluh "
    angka = angka - (firstChar * 10)
    return in_words(angka, result)
  } else {
    result += words[angka]
  }

  return result

}
console.log(in_words(3));
console.log(in_words(32));
console.log(in_words(919));
console.log(in_words(3252));
console.log(in_words(32501));
