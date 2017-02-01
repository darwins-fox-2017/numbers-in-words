function getNum(angka) {
    angka = angka.toString();
    return parseInt(angka[0]);
}

function in_words(angka, result = "") {
    let konvert = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas", "duabelas", "tigabelas", "empatbelas", "limabelas",
        "enambelas", "tujuhbelas", "delapanbelas", "sembilanbelas"
    ];
    if (angka.toString().length == '1') {
        result += konvert[angka];
        return result;
    }
    if (angka.toString().length == '2') {
        if (angka < 20) {
            result += konvert[angka];
            return result;
        } else {
            let angkaPuluhan = getNum(angka);
            result += konvert[angkaPuluhan];
            result += " puluh ";
            angka -= (10 * angkaPuluhan);
            return in_words(angka, result);
        }
    }
    if (angka.toString().length == '3') {
        let ratusan = getNum(angka);
        if (ratusan == '1') {
            result += " seratus ";
            angka -= (100 * ratusan);
            return in_words(angka, result);
        } else {
            result += konvert[ratusan];
            result += " ratus ";
            angka -= (100 * ratusan);
            return in_words(angka, result);
        }
    }

    if (angka.toString().length == '4') {
        let ribuan = getNum(angka);
        if (ribuan == '1') {
            result += " seribu ";
            angka -= (1000 * ribuan);
            return in_words(angka, result);
        } else {
            result += konvert[ribuan];
            result += " ribu ";
            angka -= (1000 * ribuan);
            return in_words(angka, result);
        }
    }

    if (angka.toString().length == '5') {
        let puluhanRibu = getNum(angka);
        if (puluhanRibu == '1') {
            result += "sepuluh ribu";
            angka -= (10000 * puluhanRibu);
            return in_words(angka, result);
        } else {
            result += konvert[puluhanRibu];
            result += " puluh ";
            angka -= (10000 * puluhanRibu);
            return in_words(angka, result);
        }
    }

    if (angka.toString().length == '6') {
        let ratusanRibu = getNum(angka);
        if (ratusanRibu == '1') {
            result += "seratus ribu ";
            angka -= (100000 * ratusanRibu);
            return in_words(angka, result);
        } else {
            result += konvert[ratusanRibu];
            result += " ratus ";
            angka -= (100000 * ratusanRibu);
            return in_words(angka, result);
        }
    }

    if (angka.toString().length == '7') {
        let Jutaan = getNum(angka);
        if (Jutaan == '1') {
            result += "satu juta ";
            angka -= (1000000 * Jutaan);
            return in_words(angka, result);
        } else {
            result += konvert[Jutaan];
            result += " juta ";
            angka -= (1000000 * Jutaan);
            return in_words(angka, result);
        }
    }

    if (angka.toString().length == '8') {
        let puluhanJuta = getNum(angka);
        if (puluhanJuta == '1') {
            result += "sepuluh juta ";
            angka -= (10000000 * puluhanJuta);
            return in_words(angka, result);
        } else {
            result += konvert[puluhanJuta];
            result += " puluh ";
            angka -= (10000000 * puluhanJuta);
            return in_words(angka, result);
        }
    }

    if (angka.toString().length == '9') {
        let ratusanJuta = getNum(angka);
        if (ratusanJuta == '1') {
            result += "seratus juta ";
            angka -= (100000000 * ratusanJuta);
            return in_words(angka, result);
        } else {
            result += konvert[ratusanJuta];
            result += " ratus ";
            angka -= (100000000 * ratusanJuta);
            return in_words(angka, result);
        }
    }

    if (angka.toString().length == '10') {
        let Miliar = getNum(angka);
        if (Miliar == '1') {
            result += "satu miliar ";
            angka -= (1000000000 * Miliar);
            return in_words(angka, result);
        } else {
            result += konvert[Miliar];
            result += " miliar ";
            angka -= (1000000000 * Miliar);
            return in_words(angka, result);
        }
    }

    if (angka.toString().length == '11') {
        let puluhanMiliar = getNum(angka);
        if (puluhanMiliar == '1') {
            result += "sepuluh miliar ";
            angka -= (10000000000 * puluhanMiliar);
            return in_words(angka, result);
        } else {
            result += konvert[puluhanMiliar];
            result += " puluh ";
            angka -= (10000000000 * puluhanMiliar);
            return in_words(angka, result);
        }
    }

    if (angka.toString().length == '12') {
        let ratusanMiliar = getNum(angka);
        if (ratusanMiliar == '1') {
            result += "seratus miliar ";
            angka -= (100000000000 * ratusanMiliar);
            return in_words(angka, result);
        } else {
            result += konvert[ratusanMiliar];
            result += " ratus ";
            angka -= (100000000000 * ratusanMiliar);
            return in_words(angka, result);
        }
    }

    if (angka.toString().length == '13') {
        let Triliun = getNum(angka);
        if (Triliun == '1') {
            result += "satu triliun ";
            angka -= (1000000000000 * Triliun);
            return in_words(angka, result);
        } else {
            result += konvert[Triliun];
            result += " triliun ";
            angka -= (1000000000000 * Triliun);
            return in_words(angka, result);
        }
    }

    if (angka.toString().length == '14') {
        let puluhanTriliun = getNum(angka);
        if (puluhanTriliun == '1') {
            result += "sepuluh triliun ";
            angka -= (10000000000000 * puluhanTriliun);
            return in_words(angka, result);
        } else {
            result += konvert[puluhanTriliun];
            result += " puluh ";
            angka -= (10000000000000 * puluhanTriliun);
            return in_words(angka, result);
        }
    }

    if (angka.toString().length == '15') {
        let ratusanTriliun = getNum(angka);
        if (ratusanTriliun == '1') {
            result += "seratus triliun ";
            angka -= (100000000000000 * ratusanTriliun);
            return in_words(angka, result);
        } else {
            result += konvert[ratusanTriliun];
            result += " ratus ";
            angka -= (100000000000000 * ratusanTriliun);
            return in_words(angka, result);
        }
    }
    return result;
}

// if (angka.toString().length == 16) {
//     let angkaKuadriliun = get_first_num(angka);
//     if (angkaKuadriliun === 1) {
//         hasil += "satu kuadriliun ";
//         angka -= (1000000000000000 * angkaKuadriliun);
//         return in_words(angka, result = "");
//     } else {
//         hasil += words[angkaKuadriliun];
//         hasil += " kuadriliun ";
//         angka -= (1000000000000000 * angkaKuadriliun);
//         return in_words(angka, result = "");
//     }
// else  {
//             result += konvert[angka]
//         }
//         return result

// if (angka.toString().length == 12) {
//     let angkaPertama = getNum(angka);
//     result += konvert[angkaPertama];
//     result += " ratus ";
//     angka = angka - (1000000000000 * angkaPertama);
//     return in_words(angka, result);
// }
// if (angka.toString().length == 11) {
//     let angkaPertama = getNum(angka);
//     result += konvert[angkaPertama];
//     result += " puluh ";
//     angka = angka - (1000000000000 * angkaPertama);
//     return in_words(angka, result);
// }
// if (angka.toString().length == 10) {
//     let angkaPertama = getNum(angka);
//     result += konvert[angkaPertama];
//     result += " Milyar ";
//     angka = angka - (1000000000000 * angkaPertama);
//     return in_words(angka, result);
// }

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
console.log(in_words(999999999999999));
