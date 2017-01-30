function in_words(angka, hasil = '') {
  let angka_digit = [0,1,2,3,4,5,5,6,7,8,9,10,11,12,13,14,15,
                16,17,18,19];
  let angka_kata = ['','satu','dua','tiga','empat','lima',
  'enam','tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas', 'dua belas',
  'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas',
  'delapan belas', 'sembilan belas'];

  if(String(angka).length === 1) {
    hasil += angka_kata[angka];
    return hasil;
  }
  // jika panjang angka hanya 1 digit (dicek dengan .length),
  // maka langsung return isi angka_kata dengan posisi index

  if(String(angka).length === 2) {
    if (angka < 20) {
      hasil += angka_kata[angka];
      return hasil
    } else {
      let angka_puluhan = digit_pertama(angka);
      hasil += angka_kata[angka_puluhan];
      hasil += ' puluh ';
      angka -= (10 * angka_puluhan);
      return in_words(angka, hasil);
    }
  }
  // jika panjang angka = 2 digit DAN angka kurang dari 20,
  // is var hasil di concat dengan isi angka_kata dengan posisi index

  if(String(angka).length === 3) {
    let angka_ratusan = digit_pertama(angka);
    if (angka_ratusan === 1) {
      hasil += ' seratus ';
      angka -= (100 * angka_ratusan);
      return in_words(angka, hasil);
    } else {
      hasil += angka_kata[angka_ratusan];
      hasil += ' ratus ';
      angka -= (100 * angka_ratusan);
      return in_words(angka, hasil);
    }
  }

  if(String(angka).length === 4) {
    let angka_ribuan = digit_pertama(angka);
    if (angka_ribuan === 1) {
      hasil += ' seribu ';
      angka -= (1000 * angka_ribuan);
      return in_words(angka, hasil);
    } else {
      hasil += angka_kata[angka_ribuan];
      hasil += ' ribu ';
      angka -= (1000 * angka_ribuan);
      return in_words(angka, hasil);
    }
  }

  if(String(angka).length === 5) {
    let angka_puluh_ribuan = digit_pertama(angka);
    if(angka_puluh_ribuan === 1) {
      hasil += ' sepuluh ribu ';
      angka -= (10000 * angka_puluh_ribuan);
      return in_words(angka, hasil);
    } else {
      hasil += angka_kata[angka_puluh_ribuan];
      hasil += ' puluh ';
      angka -= (10000 * angka_puluh_ribuan)
      return in_words(angka, hasil);
    }
  }

  if(String(angka).length === 6) {
    let angka_ratus_ribu = digit_pertama(angka);
    if(angka_ratus_ribu === 1) {
      hasil += ' seratus ribu ';
      angka -= (100000 * angka_ratus_ribu);
      return in_words(angka, hasil);
    } else {
      hasil += angka_kata[angka_ratus_ribu];
      hasil += ' ratus ';
      angka -= (100000 * angka_ratus_ribu)
      return in_words(angka, hasil);
    }
  }

  if(String(angka).length === 7) {
    let angka_jutaan = digit_pertama(angka);
    if(angka_jutaan === 1) {
      hasil += ' satu juta ';
      angka -= (1000000 * angka_jutaan);
      return in_words(angka, hasil);
    } else {
      hasil += angka_kata[angka_jutaan];
      hasil += ' juta ';
      angka -= (1000000 * angka_jutaan)
      return in_words(angka, hasil);
    }
  }

  if(String(angka).length === 8) {
    let angka_puluh_jutaan = digit_pertama(angka);
    if(angka_puluh_jutaan === 1) {
      hasil += ' sepuluh juta ';
      angka -= (10000000 * angka_puluh_jutaan);
      return in_words(angka, hasil);
    } else {
      hasil += angka_kata[angka_puluh_jutaan];
      hasil += ' puluh juta ';
      angka -= (10000000 * angka_puluh_jutaan)
      return in_words(angka, hasil);
    }
  }

  if(String(angka).length === 9) {
    let angka_ratus_jutaan = digit_pertama(angka);
    if(angka_ratus_jutaan === 1) {
      hasil += ' seratus juta ';
      angka -= (100000000 * angka_ratus_jutaan);
      return in_words(angka, hasil);
    } else {
      hasil += angka_kata[angka_ratus_jutaan];
      hasil += ' ratus juta ';
      angka -= (100000000 * angka_ratus_jutaan)
      return in_words(angka, hasil);
    }
  }

  if(String(angka).length === 10) {
    let angka_milyar = digit_pertama(angka);
    if(angka_milyar === 1) {
      hasil += ' satu miliyar ';
      angka -= (1000000000 * angka_milyar);
      return in_words(angka, hasil);
    } else {
      hasil += angka_kata[angka_milyar];
      hasil += ' miliyar ';
      angka -= (1000000000 * angka_milyar)
      return in_words(angka, hasil);
    }
  }

  if(String(angka).length === 11) {
    let angka_puluh_milyar = digit_pertama(angka);
    if(angka_puluh_milyar === 1) {
      hasil += ' sepuluh miliyar ';
      angka -= (10000000000 * angka_puluh_milyar);
      return in_words(angka, hasil);
    } else {
      hasil += angka_kata[angka_puluh_milyar];
      hasil += ' puluh miliyar ';
      angka -= (10000000000 * angka_puluh_milyar)
      return in_words(angka, hasil);
    }
  }

  if(String(angka).length === 12) {
    let angka_ratus_milyar = digit_pertama(angka);
    if(angka_ratus_milyar === 1) {
      hasil += ' seratus miliyar ';
      angka -= (100000000000 * angka_ratus_milyar);
      return in_words(angka, hasil);
    } else {
      hasil += angka_kata[angka_ratus_milyar];
      hasil += ' ratus miliyar ';
      angka -= (100000000000 * angka_ratus_milyar)
      return in_words(angka, hasil);
    }
  }

  if(String(angka).length === 13) {
    let angka_triliunan = digit_pertama(angka);
    if(angka_triliunan === 1) {
      hasil += ' satu triliyun ';
      angka -= (1000000000000 * angka_triliunan);
      return in_words(angka, hasil);
    } else {
      hasil += angka_kata[angka_triliunan];
      hasil += ' triliyun ';
      angka -= (1000000000000 * angka_triliunan)
      return in_words(angka, hasil);
    }
  }

  if(String(angka).length === 14) {
    let angka_puluh_triliunan = digit_pertama(angka);
    if(angka_puluh_triliunan === 1) {
      hasil += ' sepuluh triliyun ';
      angka -= (10000000000000 * angka_puluh_triliunan);
      return in_words(angka, hasil);
    } else {
      hasil += angka_kata[angka_puluh_triliunan];
      hasil += ' puluh triliyun ';
      angka -= (10000000000000 * angka_puluh_triliunan)
      return in_words(angka, hasil);
    }
  }

  if(String(angka).length === 15) {
    let angka_ratus_triliunan = digit_pertama(angka);
    if(angka_ratus_triliunan === 1) {
      hasil += ' seratus triliyun ';
      angka -= (100000000000000 * angka_ratus_triliunan);
      return in_words(angka, hasil);
    } else {
      hasil += angka_kata[angka_ratus_triliunan];
      hasil += ' ratus triliyun ';
      angka -= (100000000000000 * angka_ratus_triliunan)
      return in_words(angka, hasil);
    }
  }
}


function digit_pertama(angka) {
  let angka_pertama = angka.toString();
  return Number(angka_pertama[0]);
}
console.log(in_words(208683979059880));
