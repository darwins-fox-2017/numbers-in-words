function in_words(angka, kalimat="") {
  // Your code here
  var angka      = angka.toString()
  var numLength  = angka.length
  var ones       = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan"];
  var tens       = ["Sepuluh", "Sebelas", "Dua Belas", "Tiga Belas", "Empat Belas", "Lima Belas", "Enam Belas", "Tujuh Belas", "Delapan Belas", "Sembilan Belas"];
  var scales     = ["", "Ribu", "Juta", "Milliar", "Triliun"]
  var result     = [];
  var save       = []

  for (var i = 0; i < numLength; i+= 3) {
    save.push(angka.slice(-3))
    angka = angka.slice(0, -3)
  }
  save.reverse()

    if(save[0] > 200) {
      var x = Math.floor(save[0] / 100)
      result.push(ones[x]);
      result.push("Ratus");
      save[0] = save[0] % 100
    } else if (save[0] > 99) {
      result.push("Seratus")
      save[0] -= 100
      }
    if(save[0] > 19) {
      var y = Math.floor(save[0] / 10)
      result.push(ones[y])
      result.push("Puluh")
      save[0] = save[0] % 10
    } else if(save[0] > 9 && save[0] < 20) {
      belas = save[0] - 10
      result.push(tens[belas])
      save[0] -= save[0]
      }
    if(save[0] < 10) {
      result.push(ones[save[0]]);
      save[0] -= save[0]
    }

    // Membuat fungsi recursive
    kalimat = kalimat + " " + result.join(" ") + " " + scales[save.length-1]
    if(save.length < 2) {
      return kalimat
    } else {
    save.unshift()
    save = save.join("")
    }
  return in_words(Number(save), kalimat)
}
// Driver code
console.log(in_words(4));
console.log(in_words(27));
console.log(in_words(102));
console.log(in_words(38079));
console.log(in_words(82102713));
console.log(in_words(999000000000000));
console.log(in_words(999999999999999));
