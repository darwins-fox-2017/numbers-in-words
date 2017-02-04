function in_words(angka, kalimat="") {
  // Your code here
  angka = angka.toString()
  var panjang = angka.length;
  var satuan= ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
  var belasan = ["sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"];
  var tambahan = ["", "ribu", "juta", "milliar", "triliun"]
  var hasil = [];
  var simpan = []

/*
pertama kita akan kelompokkan menjadi 3 bagian array
lalu diakhir kita reverse agar bisa dicek untuk kelompok pertama
*/
  for (var i = 0; i < panjang; i+=3){
    simpan.push(angka.slice(-3))
    angka = angka.slice(0, -3)
  }
  simpan.reverse()

/*
disini adalah logic utamanya yang akan mengecek apakah dia masuk diratus?
kalau iya dia akan dikurangi dan akan turun pada proses pengecekan dibawahnya hingga habis.
*/
    if (simpan[0] > 200){
      var x = Math.floor(simpan[0]/100)
      hasil.push(satuan[x]);
      hasil.push("ratus");
      simpan[0] = simpan[0]%100
    } else if (simpan[0] > 99){
      hasil.push("seratus")
      simpan[0] -= 100
    }
    if (simpan[0]>19){
      var u = Math.floor(simpan[0] /10)
      hasil.push(satuan[u])
      hasil.push("puluh")
      simpan[0] = simpan[0] %10
    } else if (simpan[0]>9 && simpan[0] <20){
      belas = simpan[0]-10
      hasil.push(belasan[belas])
      simpan[0] -= simpan[0]
    }
    if (simpan[0] <10){
      hasil.push(satuan[simpan[0]]);
      simpan[0] -= simpan[0]
    }


/*
disini adalah untuk mengecek dan untuk menyatukan kalimat nantinya.
program akan mengecek apakah array dibelakangnya sisa berapa? dan nanti akan ditambahkan dengan isi sesuai index pada array tambahan.

lalu menjadi rekursif dan mengulangi prosesnya hingga kelompok berikutnya habis dicek.
*/
    kalimat = kalimat + " " + hasil.join(" ") + " " + tambahan[simpan.length-1]
    if (simpan.length < 2){
      return kalimat
    } else {
    simpan.unshift()
    simpan = simpan.join("")
    }
  return in_words(Number(simpan), kalimat)
}
// Driver code
console.log(in_words(1000000));
