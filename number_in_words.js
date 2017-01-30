function in_words_hundreds(angka, output = "") {
  // Your code here

  var word = ["","satu", 'dua', "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"]

  if(String(angka).length == 4){
    var firstChar = String(angka)[0]

    if(firstChar == "1"){
      output += "seribu "
      angka = angka - 1000

      return in_words_hundreds(angka, output)
    }else{
      output += word[firstChar]
      output += " ribu "
      angka = angka - (Number(firstChar)*1000)

      return in_words_hundreds(angka, output)
    }

  }else if(String(angka).length == 3){

    var firstChar = String(angka)[0]

    if(firstChar == "1"){
      output += "seratus "
      angka = angka - 100

      return in_words_hundreds(angka, output)
    }else if(firstChar == "0"){
      angka = String(angka).slice(String(angka).indexOf(firstChar))
      return in_words_hundreds(Number(angka), output)
    }else{
      output += word[firstChar]
      output += " ratus "
      angka = angka - (Number(firstChar)*100)

      return in_words_hundreds(angka, output)
    }

  }else if(String(angka).length == 2){

    var firstChar = String(angka)[0]

    if(firstChar == "1"){
      output += word[angka]
    }else{
      output += word[firstChar]
      output += " puluh "
      angka = angka - (Number(firstChar)*10)

      return in_words_hundreds(angka, output)
    }

  }else{
    output += word[angka]
  }

return output
}

function in_words(angka,output = "") {
  if(String(angka).length>15){
      return "exceed maximum number of digits"

  }else if(String(angka).length>4){
    var word = ["","ribu","juta","miliyar","triliun"]
    var angka_arr = []
    var angka = String(angka)
    var loop = Math.ceil(angka.length/3)

    for(var i=0; i<loop; i++){
      angka_arr.push(angka.slice(-3))
      angka = angka.slice(0,-3)
    }

    for(var i=angka_arr.length-1; i>=0; i--){
      if(angka_arr[i] !== '000'){
        output = output + in_words_hundreds(angka_arr[i]) + ` ${word[i]} `
      }
    }
    return output
  }else{
    return in_words_hundreds(angka)
  }

}

console.log(in_words(1000000));
console.log(in_words(5));
console.log(in_words(13));
console.log(in_words(27));
console.log(in_words(182));
console.log(in_words(752));
console.log(in_words(612));
console.log(in_words(12345678));
console.log(in_words(1000));
console.log(in_words(100));
console.log(in_words(22213717));
console.log(in_words(999999999999999));
