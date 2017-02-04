function getNum(angka) {
    angka = angka.toString();
    return parseInt(angka[0]);
}

function in_words(angka, hasil = "") {
    let kamus = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas", "duabelas", "tigabelas", "empatbelas", "limabelas",
        "enambelas", "tujuhbelas", "delapanbelas", "sembilanbelas"
    ];
    if (angka.toString().length == '1') {
        hasil += kamus[angka];
        return hasil;
    }
    if (angka.toString().length == '2') {
        if (angka < 20) {
            hasil += kamus[angka];
            return hasil;
        } else {
            let angkaPuluhan = getNum(angka);
            hasil += kamus[angkaPuluhan];
            hasil += " puluh ";
            angka -= (10 * angkaPuluhan);
            return in_words(angka, hasil);
        }
    }
    if (angka.toString().length == '3') {
    	// 102
        let ratusan = getNum(angka);
        if (ratusan == '1') {
            hasil += " seratus ";
            angka -= (100 * ratusan);
            return in_words(angka, hasil);
        } else {
            hasil += kamus[ratusan];
            hasil += " ratus ";
            angka -= (100 * ratusan);
            return in_words(angka, hasil);
        }
    }

    if (angka.toString().length == '4') {
        let ribuan = getNum(angka);
        if (ribuan == '1') {
            hasil += " seribu ";
            angka -= (1000 * ribuan);
            return in_words(angka, hasil);
        } else {
            hasil += kamus[ribuan];
            hasil += " ribu ";
            angka -= (1000 * ribuan);
            return in_words(angka, hasil);
        }
    }

    if (angka.toString().length == '5') {
        let puluhanRibu = getNum(angka);
        if (puluhanRibu == '1') {
            hasil += "sepuluh ribu";
            angka -= (10000 * puluhanRibu);
            return in_words(angka, hasil);
        } else {
            hasil += kamus[puluhanRibu];
            hasil += " puluh ";
            angka -= (10000 * puluhanRibu);
            return in_words(angka, hasil);
        }
    }

    if (angka.toString().length == '6') {
        let ratusanRibu = getNum(angka);
        if (ratusanRibu == '1') {
            hasil += "seratus ribu ";
            angka -= (100000 * ratusanRibu);
            return in_words(angka, hasil);
        } else {
            hasil += kamus[ratusanRibu];
            hasil += " ratus ";
            angka -= (100000 * ratusanRibu);
            return in_words(angka, hasil);
        }
    }

    if (angka.toString().length == '7') {
        let Jutaan = getNum(angka);
        if (Jutaan == '1') {
            hasil += "satu juta ";
            angka -= (1000000 * Jutaan);
            return in_words(angka, hasil);
        } else {
            hasil += kamus[Jutaan];
            hasil += " juta ";
            angka -= (1000000 * Jutaan);
            return in_words(angka, hasil);
        }
    }

    if (angka.toString().length == '8') {
        let puluhanJuta = getNum(angka);
        if (puluhanJuta == '1') {
            hasil += "sepuluh juta ";
            angka -= (10000000 * puluhanJuta);
            return in_words(angka, hasil);
        } else {
            hasil += kamus[puluhanJuta];
            hasil += " puluh ";
            angka -= (10000000 * puluhanJuta);
            return in_words(angka, hasil);
        }
    }

    if (angka.toString().length == '9') {
        let ratusanJuta = getNum(angka);
        if (ratusanJuta == '1') {
            hasil += "seratus juta ";
            angka -= (100000000 * ratusanJuta);
            return in_words(angka, hasil);
        } else {
            hasil += kamus[ratusanJuta];
            hasil += " ratus ";
            angka -= (100000000 * ratusanJuta);
            return in_words(angka, hasil);
        }
    }

    if (angka.toString().length == '10') {
        let Miliar = getNum(angka);
        if (Miliar == '1') {
            hasil += "satu miliar ";
            angka -= (1000000000 * Miliar);
            return in_words(angka, hasil);
        } else {
            hasil += kamus[Miliar];
            hasil += " miliar ";
            angka -= (1000000000 * Miliar);
            return in_words(angka, hasil);
        }
    }

    if (angka.toString().length == '11') {
        let puluhanMiliar = getNum(angka);
        if (puluhanMiliar == '1') {
            hasil += "sepuluh miliar ";
            angka -= (10000000000 * puluhanMiliar);
            return in_words(angka, hasil);
        } else {
            hasil += kamus[puluhanMiliar];
            hasil += " puluh ";
            angka -= (10000000000 * puluhanMiliar);
            return in_words(angka, hasil);
        }
    }

    if (angka.toString().length == '12') {
        let ratusanMiliar = getNum(angka);
        if (ratusanMiliar == '1') {
            hasil += "seratus miliar ";
            angka -= (100000000000 * ratusanMiliar);
            return in_words(angka, hasil);
        } else {
            hasil += kamus[ratusanMiliar];
            hasil += " ratus ";
            angka -= (100000000000 * ratusanMiliar);
            return in_words(angka, hasil);
        }
    }

    if (angka.toString().length == '13') {
        let Triliun = getNum(angka);
        if (Triliun == '1') {
            hasil += "satu triliun ";
            angka -= (1000000000000 * Triliun);
            return in_words(angka, hasil);
        } else {
            hasil += kamus[Triliun];
            hasil += " triliun ";
            angka -= (1000000000000 * Triliun);
            return in_words(angka, hasil);
        }
    }

    if (angka.toString().length == '14') {
        let puluhanTriliun = getNum(angka);
        if (puluhanTriliun == '1') {
            hasil += "sepuluh triliun ";
            angka -= (10000000000000 * puluhanTriliun);
            return in_words(angka, hasil);
        } else {
            hasil += kamus[puluhanTriliun];
            hasil += " puluh ";
            angka -= (10000000000000 * puluhanTriliun);
            return in_words(angka, hasil);
        }
    }

    if (angka.toString().length == '15') {
        let ratusanTriliun = getNum(angka);
        if (ratusanTriliun == '1') {
            hasil += "seratus triliun ";
            angka -= (100000000000000 * ratusanTriliun);
            return in_words(angka, hasil);
        } else {
            hasil += kamus[ratusanTriliun];
            hasil += " ratus ";
            angka -= (100000000000000 * ratusanTriliun);
            return in_words(angka, hasil);
        }
    }
    return hasil;
}

// Driver code
console.log(in_words(9));
//console.log(in_words(98));
// console.log(in_words(987));
// console.log(in_words(9876));
// console.log(in_words(98765));
console.log(in_words(987654));
// console.log(in_words(9876543));
// console.log(in_words(98765432));
// console.log(in_words(987654321));
// console.log(in_words(1987654321));
// console.log(in_words(21987654321));
// console.log(in_words(321987654321));
// console.log(in_words(4321987654321));
// console.log(in_words(54321987654321));
// console.log(in_words(654321987654321));
// console.log(in_words(999999999999999));