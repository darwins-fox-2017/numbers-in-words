function get_first_num(num) {
  num = num.toString();
  return parseInt(num[0]);
}

function in_words(num, result='') {
  // Your code here
  var angka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
  var word = ["satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"]

  if(num.toString().length == 1) {
    result += word[num-1]
    return result
  }

  if (num.toString().length == 2) {
    let firstNum = get_first_num(num);
    if (firstNum == 1) {
      result += word[num-1];
      return result;
    } else {
      result += word[firstNum - 1];
      result += " puluh ";
      num = num - (10*firstNum);
      return in_words(num, result);
    }
  }

  if(num.toString().length == 3){
    let firstNum = get_first_num(num);
    if(firstNum === 1){
      result += " seratus ";
      num -= (100 * firstNum);
      return in_words(num, result);
    } else {
      result += word[firstNum -1];
      result += " ratus ";
      num -= (100 * firstNum);
      return in_words(num, result);
    }
  }

  if(num.toString().length == 4){
    let firstNum = get_first_num(num);
    if(firstNum === 1){
      result += " seribu ";
      num -= (1000 * firstNum);
      return in_words(num, result);
    } else {
      result += word[firstNum -1];
      result += " ribu ";
      num -= (1000 * firstNum);
      return in_words(num, result);
    }
  }

  if (num.toString().length == 5) {
    let firstNum = get_first_num(num);
    result += word[firstNum - 1];
    result += " puluh ";
    num = num - (10000*firstNum);
    return in_words(num, result);
  }

  if (num.toString().length == 6) {
    let firstNum = get_first_num(num);
    result += word[firstNum - 1];
    result += " ratus ";
    num = num - (100000*firstNum);
    return in_words(num, result);
  }

  if (num.toString().length == 7) {
    let firstNum = get_first_num(num);
    result += word[firstNum - 1];
    result += " juta ";
    num = num - (1000000*firstNum);
    return in_words(num, result);
  }

  if (num.toString().length == 8) {
    let firstNum = get_first_num(num);
    result += word[firstNum - 1];
    result += " puluh ";
    num = num - (10000000*firstNum);
    return in_words(num, result);
  }

  if (num.toString().length == 9) {
    let firstNum = get_first_num(num);
    result += word[firstNum - 1];
    result += " ratus ";
    num = num - (100000000*firstNum);
    return in_words(num, result);
  }

  if (num.toString().length == 10) {
    let firstNum = get_first_num(num);
    result += word[firstNum - 1];
    result += " milyar ";
    num = num - (1000000000*firstNum);
    return in_words(num, result);
  }

  if (num.toString().length == 11) {
    let firstNum = get_first_num(num);
    result += word[firstNum - 1];
    result += " puluh ";
    num = num - (10000000000*firstNum);
    return in_words(num, result);
  }

  if (num.toString().length == 12) {
    let firstNum = get_first_num(num);
    result += word[firstNum - 1];
    result += " ratus ";
    num = num - (100000000000*firstNum);
    return in_words(num, result);
  }

  if (num.toString().length == 13) {
    let firstNum = get_first_num(num);
    result += word[firstNum - 1];
    result += " triliyun ";
    num = num - (1000000000000*firstNum);
    return in_words(num, result);
  }

}

// Driver code
console.log(in_words(6));
console.log(in_words(13));
console.log(in_words(124));
console.log(in_words(1241));
console.log(in_words(32415));
console.log(in_words(324154));
console.log(in_words(5234125));
console.log(in_words(52345123));
console.log(in_words(623243156));
console.log(in_words(6223564748));
console.log(in_words(98573452324));
console.log(in_words(423527654326));
console.log(in_words(6785743253541));
