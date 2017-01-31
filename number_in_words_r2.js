var word=['','satu ','dua ','tiga ','empat ', 'lima ','enam ','tujuh ','delampan ','sembilan ','sepuluh','sebelas','dua belas','tiga belas','empat belas','lima belas','enam belas','tujuh belas','delapan belas',' sembilan belas'];
var satuan=['','puluh ','ratus '];

var ribuan={
   'nilai':[1000,1000000,1000000000,1000000000000],
   'kata':['ribu ','juta ','miliyar ','trilion ']
}

function in_words2(angka,kata='') {
if (angka.toString().length==1) {
  kata = kata + word[angka];
}else if((angka.toString().length==2)&&(angka.toString()[0]==1)){
  kata = kata + word[angka];
}else{
  for (var i = angka.toString().length-1 ; i >0; i--) {
    let angkaPer=angka.toString()[0];
    let nilSatuan=i;
    kata = kata + word[angkaPer] + satuan[i];
    angka = angka - (angkaPer * Math.pow(10,i));
    //console.log(angka);
    return in_words2(angka,kata);
  }
}
return kata;
}
function in_words(angka,kata='') {
  if (angka<1000) {
    kata= kata + in_words2(angka,kata);
  }else {
    for (var i = ribuan.nilai.length-1; i >=0; i--) {
       if (angka>=ribuan.nilai[i]) {
        var angka2=Math.floor(angka/ribuan.nilai[i]);
             angka=angka%ribuan.nilai[i];
             //kata = kata + in_words2(angka2) + ribuan.kata[i];
    return kata + in_words2(angka2) + ribuan.kata[i] + in_words(angka,kata);
    //return 'hai';
       }
    }
   }
  return kata;
}


// Driver code
console.log(in_words(1000900100));
