const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Hitungan{
  rataRata(nilai){
      let jumlah = 0;
      nilai.forEach(function(nilai) {
          jumlah += +nilai;
      });
      let rt = jumlah/nilai.length
      return Math.round(rt);
  }
  terendah(nilai){
      let terendah = Math.min.apply(Math, nilai)
      return terendah;
  }
  tertinggi(nilai){
      let tertinggi = Math.max.apply(Math, nilai)
      return tertinggi;
  }
  urutanTerendah(nilai){
      var len = nilai.length;
      for (var i = len-1; i>=0; i--){
          for(var j = 1; j<=i; j++){
            if(nilai[j-1]>nilai[j]){
              var temp = nilai[j-1];
              nilai[j-1] = nilai[j];
              nilai[j] = temp;
           }
          }
      }
          
      return nilai;
  }
  jumlahSiswa(nilai) {
    let lulus = 0;
    let tidakLulus = 0;
     for(let i = 0; i < nilai.length; i++) {
         if(nilai[i] >= 75) {
            lulus++;
         } else {
            tidakLulus++; 
         }
     }
     return {lulus: lulus, tidak: tidakLulus};
  }
}


let nilai = [] 

function inputNilai(){
  rl.question("", function (answer) {
      if(answer == "q"){
          return tampilkanNilai()
      }
      answer = +answer
      nilai.push(answer)
      inputNilai()
  })
}

function tampilkanNilai(){
  console.log(nilai)
  let hitung = new Hitungan()
  console.log("Rata-rata : "+hitung.rataRata(nilai))
  console.log("Nilai terendah : "+hitung.terendah(nilai))
  console.log("Nilai tertinggi : "+hitung.tertinggi(nilai))
  console.log("Urutan nilai dari yang terendah ke tertingi: "+hitung.urutanTerendah(nilai))
  console.log("Siswa lulus : "+hitung.jumlahSiswa(nilai).lulus)
  console.log("Siswa tidak lulus : "+hitung.jumlahSiswa(nilai).tidak)
  rl.close();
}
console.log("Inputkan nilai dan ketik “q” jika sudah selesai yang terendah : ")
inputNilai()