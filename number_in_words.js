function in_words(angka, hasil = "") {
  var number = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
  var words = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"];

  if(angka.toString().length == 1){
    hasil += words[angka];
    return hasil;
  }

  if(angka.toString().length == 2){
    if(angka < 20){
      hasil += words[angka];
      return hasil;
    } else {
      let angkaPuluhan = get_first_num(angka);
      hasil += words[angkaPuluhan];
      hasil += " puluh ";
      angka -= (10 * angkaPuluhan);
      return in_words(angka, hasil);
    }
  }

  if(angka.toString().length == 3){
    let angkaRatusan = get_first_num(angka);
    if(angkaRatusan === 1){
      hasil += " seratus ";
      angka -= (100 * angkaRatusan);
      return in_words(angka, hasil);
    } else {
      hasil += words[angkaRatusan];
      hasil += " ratus ";
      angka -= (100 * angkaRatusan);
      return in_words(angka, hasil);
    }
  }

  if(angka.toString().length == 4){
    let angkaRibuan = get_first_num(angka);
    if(angkaRibuan === 1){
      hasil += " seribu ";
      angka -= (1000 * angkaRibuan);
      return in_words(angka, hasil);
    } else {
      hasil += words[angkaRibuan];
      hasil += " ribu ";
      angka -= (1000 * angkaRibuan);
      return in_words(angka, hasil);
    }
  }

  if(angka.toString().length == 5){
    let angkaPuluhRibuan = get_first_num(angka);
    if(angkaPuluhRibuan === 1){
      hasil += "sepuluh ribu ";
      angka -= (10000 * angkaPuluhRibuan);
      return in_words(angka, hasil);
    } else {
      hasil += words[angkaPuluhRibuan];
      hasil += " puluh ";
      angka -= (10000 * angkaPuluhRibuan);
      return in_words(angka, hasil);
    }
  }

  if(angka.toString().length == 6){
    let angkaRatusRibuan = get_first_num(angka);
    if(angkaRatusRibuan === 1){
      hasil += "seratus ribu ";
      angka -= (100000 * angkaRatusRibuan);
      return in_words(angka, hasil);
    } else {
      hasil += words[angkaRatusRibuan];
      hasil += " ratus ";
      angka -= (100000 * angkaRatusRibuan);
      return in_words(angka, hasil);
    }
  }

  if(angka.toString().length == 7){
    let angkaJutaan = get_first_num(angka);
    if(angkaJutaan === 1){
      hasil += "satu juta ";
      angka -= (1000000 * angkaJutaan);
      return in_words(angka, hasil);
    } else {
      hasil += words[angkaJutaan];
      hasil += " juta ";
      angka -= (1000000 * angkaJutaan);
      return in_words(angka, hasil);
    }
  }

  if(angka.toString().length == 8){
    let angkaPuluhJutaan = get_first_num(angka);
    if(angkaPuluhJutaan === 1){
      hasil += "sepuluh juta ";
      angka -= (10000000 * angkaPuluhJutaan);
      return in_words(angka, hasil);
    } else {
      hasil += words[angkaPuluhJutaan];
      hasil += " puluh ";
      angka -= (10000000 * angkaPuluhJutaan);
      return in_words(angka, hasil);
    }
  }

  if(angka.toString().length == 9){
    let angkaRatusJutaan = get_first_num(angka);
    if(angkaRatusJutaan === 1){
      hasil += "seratus juta ";
      angka -= (100000000 * angkaRatusJutaan);
      return in_words(angka, hasil);
    } else {
      hasil += words[angkaRatusJutaan];
      hasil += " ratus ";
      angka -= (100000000 * angkaRatusJutaan);
      return in_words(angka, hasil);
    }
  }

  if(angka.toString().length == 10){
    let angkaMiliaran = get_first_num(angka);
    if(angkaMiliaran === 1){
      hasil += "satu miliar ";
      angka -= (1000000000 * angkaMiliaran);
      return in_words(angka, hasil);
    } else {
      hasil += words[angkaMiliaran];
      hasil += " miliar ";
      angka -= (1000000000 * angkaMiliaran);
      return in_words(angka, hasil);
    }
  }

  if(angka.toString().length == 11){
    let angkaPuluhMiliaran = get_first_num(angka);
    if(angkaPuluhMiliaran === 1){
      hasil += "sepuluh miliar ";
      angka -= (10000000000 * angkaPuluhMiliaran);
      return in_words(angka, hasil);
    } else {
      hasil += words[angkaPuluhMiliaran];
      hasil += " puluh ";
      angka -= (10000000000 * angkaPuluhMiliaran);
      return in_words(angka, hasil);
    }
  }

  if(angka.toString().length == 12){
    let angkaRatusMiliaran = get_first_num(angka);
    if(angkaRatusMiliaran === 1){
      hasil += "seratus miliar ";
      angka -= (100000000000 * angkaRatusMiliaran);
      return in_words(angka, hasil);
    } else {
      hasil += words[angkaRatusMiliaran];
      hasil += " ratus ";
      angka -= (100000000000 * angkaRatusMiliaran);
      return in_words(angka, hasil);
    }
  }

  if(angka.toString().length == 13){
    let angkaTriliunan = get_first_num(angka);
    if(angkaTriliunan === 1){
      hasil += "satu triliun ";
      angka -= (1000000000000 * angkaTriliunan);
      return in_words(angka, hasil);
    } else {
      hasil += words[angkaTriliunan];
      hasil += " triliun ";
      angka -= (1000000000000 * angkaTriliunan);
      return in_words(angka, hasil);
    }
  }

  if(angka.toString().length == 14){
    let angkaPuluhTriliunan = get_first_num(angka);
    if(angkaPuluhTriliunan === 1){
      hasil += "sepuluh triliun ";
      angka -= (10000000000000 * angkaPuluhTriliunan);
      return in_words(angka, hasil);
    } else {
      hasil += words[angkaPuluhTriliunan];
      hasil += " puluh ";
      angka -= (10000000000000 * angkaPuluhTriliunan);
      return in_words(angka, hasil);
    }
  }

  if(angka.toString().length == 15){
    let angkaRatusTriliunan = get_first_num(angka);
    if(angkaRatusTriliunan === 1){
      hasil += "seratus triliun ";
      angka -= (100000000000000 * angkaRatusTriliunan);
      return in_words(angka, hasil);
    } else {
      hasil += words[angkaRatusTriliunan];
      hasil += " ratus ";
      angka -= (100000000000000 * angkaRatusTriliunan);
      return in_words(angka, hasil);
    }
  }

  if(angka.toString().length == 16){
    let angkaKuadriliun = get_first_num(angka);
    if(angkaKuadriliun === 1){
      hasil += "satu kuadriliun ";
      angka -= (1000000000000000 * angkaKuadriliun);
      return in_words(angka, hasil);
    } else {
      hasil += words[angkaKuadriliun];
      hasil += " kuadriliun ";
      angka -= (1000000000000000 * angkaKuadriliun);
      return in_words(angka, hasil);
    }
  }
}

function get_first_num(angka) {
  let angkaPertama = angka.toString();
  return parseInt(angkaPertama[0])
}
// Driver code
console.log(in_words(9));
console.log(in_words(98));
console.log(in_words(987));
console.log(in_words(9876));
console.log(in_words(98765));
console.log(in_words(987654));
console.log(in_words(9876543));
console.log(in_words(98765432));
console.log(in_words(987654321));
console.log(in_words(1987654321));
console.log(in_words(21987654321));
console.log(in_words(321987654321));
console.log(in_words(4321987654321));
console.log(in_words(54321987654321));
console.log(in_words(654321987654321));
console.log(in_words(7000000000000000));
// console.log(in_words(1000000));
