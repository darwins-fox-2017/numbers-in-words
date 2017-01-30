var words = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];

function in_words(angka, result="") {

  if (angka.toString().length === 1) {
    result += words[angka];
  }

  if (angka.toString().length === 2) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "sepuluh"
    } else {
      result += words[firstChar];
      result += " puluh ";
    }

    angka = angka - (firstChar*10);
    return in_words(angka, result);
  }

  if (angka.toString().length === 3) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "seratus "
    } else {
      result += words[firstChar];
      result += " ratus ";
    }

    angka = angka - (firstChar*100);
    return in_words(angka, result);
  }

  if (angka.toString().length === 4) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "seribu "
    } else {
      result += words[firstChar];
      result += " ribu ";
    }

    angka = angka - (firstChar*1000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 5) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "sepuluh ribu "
    } else {
      result += words[firstChar];
      result += " puluh ";
    }

    angka = angka - (firstChar*10000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 6) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "seratus "
    } else {
      result += words[firstChar];
      result += " ratus ";
    }

    angka = angka - (firstChar*100000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 7) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "sejuta "
    } else {
      result += words[firstChar];
      result += " juta ";
    }

    angka = angka - (firstChar*1000000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 8) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "sepuluh juta"
    } else {
      result += words[firstChar];
      result += " puluh ";
    }

    angka = angka - (firstChar*10000000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 9) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "seratus juta "
    } else {
      result += words[firstChar];
      result += " ratus ";
    }

    angka = angka - (firstChar*100000000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 10) {
    let firstChar = angka.toString()[0];

      result += words[firstChar];
      result += " miliar ";

    angka = angka - (firstChar*1000000000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 11) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "sepuluh "
    } else {
      result += words[firstChar];
      result += " puluh ";
    }

    angka = angka - (firstChar*10000000000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 12) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "seratus "
    } else {
      result += words[firstChar];
      result += " ratus ";
    }

    angka = angka - (firstChar*100000000000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 13) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "satu triliun "
    } else {
      result += words[firstChar];
      result += " triliun ";
    }

    angka = angka - (firstChar*1000000000000);
    return in_words(angka, result);
  }

  if (angka.toString().length === 14) {
    let firstChar = angka.toString()[0];

    if (firstChar === "1") {
      result += "sepuluh "
    } else {
      result += words[firstChar];
      result += " puluh ";
    }

    angka = angka - (firstChar*10000000000000);
    return in_words(angka, result);
  }

    if (angka.toString().length === 15) {
      let firstChar = angka.toString()[0];

      if (firstChar === "1") {
        result += "seratus "
      } else {
        result += words[firstChar];
        result += " ratus ";
      }

    angka = angka - (firstChar*100000000000000);
    return in_words(angka, result);
  }

  return result;
}

// Driver code
console.log(in_words(999));
console.log(in_words(9910));
console.log(in_words(95120));
console.log(in_words(873562));
console.log(in_words(3000257));
console.log(in_words(7010257));
console.log(in_words(444444444));
console.log(in_words(1000000000));
console.log(in_words(25056007000));
console.log(in_words(925756007000));
console.log(in_words(8000000000000));
console.log(in_words(99999999999999));
console.log(in_words(999999999999999));
