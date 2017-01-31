var angkaList = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];

var numberNot = {
  // 1 : '',
  1 : 'puluh',
  2 : 'ratus',
  3 : 'ribu',
  // 4 : ' puluh ribu ',
  // 6 : ' ratus ribu ',
  6 : 'juta',
  9 : 'milyar',
  12 : 'trilyun'
};

function in_words(angka, result = '') {
  var angkaStr = angka.toString();
  //jika jumlah digit angka dibagi 3 tidak terdapat sisa maka notasi pasti diawali oleh ratusan
  //jika jumlah digit angka dibagi 3 terdapat sisa 2 maka notasi diawali oleh puluhan
  //jika jumlah digit  angka dibagi 3 tersisa satu maka notasi diawali oleh satuan
  var threeZeroCount = Math.floor(angkaStr.length/3);
  var modThreeLength = angkaStr.length%3;
  var subAngka = parseInt(angkaStr.substr(0, modThreeLength));

  if(angkaStr.length === 2 && angka > 10 && angka < 20) {
    result += angkaList[angkaStr[1]]+' belas ';

    return result;
  } else if(angkaStr.length >= 2) {
    switch (modThreeLength) {
      case 0:
        result += angkaList[angkaStr[0]]+' '+numberNot[2]+' ';
        if (subAngka%100 === 0 && threeZeroCount !== 0) result += numberNot[(threeZeroCount-1)*3]+' ';
        break;
      case 2:
        result += angkaList[angkaStr[0]]+' '+numberNot[1]+' ';
        if (subAngka%10 === 0 && threeZeroCount !== 0) result += numberNot[threeZeroCount*3]+' ';
        break;
      case 1:
        result += angkaList[angkaStr[0]]+' '+numberNot[threeZeroCount*3]+' ';
        break;
    }
    
    var remain = angka - (angkaStr[0]*Math.pow(10, angkaStr.length-1));
    // console.log(remain);
    return in_words(remain, result);
  } else if (angkaStr.length === 1) {
    result += angkaList[angkaStr[0]];

    return result;
  }
}

// Driver code
console.log(in_words(9));
console.log(in_words(1263413));
console.log(in_words(1050001));
console.log(in_words(105001));
console.log(in_words(1203423523231));

