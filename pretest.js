// Buatlah sebuah fungsi looping dari 1 sampai 100 dengan peraturan:

// untuk setiap angka yang habis dibagi 3 cetak "Tiga"
// kalau habis dibagi dengan 5 cetak "Lima"
// kalau bisa dibagi oleh 3 dan 5 cetak "TigaLima"
// jika tidak bisa dibagi dengan 3 ataupun 5 cetak angka tersebut
// NB: boleh menggunakan bahasa pemograman apapun.

const loopingNum = (x) => {
  let result = [];
  for (let i = 1; i <= x; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result.push("TigaLima");
    } else if (i % 5 == 0) {
      result.push("Lima");
    } else if (i % 3 == 0) {
      result.push("Tiga");
    } else {
      result.push(i);
    }
  }
  return result;
};

const hasil = loopingNum(100);

for (let i = 0; i < hasil.length; i++) {
  let kata = hasil[i];
  console.log(kata);
}
