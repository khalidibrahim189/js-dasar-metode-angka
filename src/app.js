// angka1 = 10000;
// angka2 = 2000;

// angka_baru = angka1 + angka2;

// document.getElementById("wrap").innerHTML = angka_baru;

// metode angka2

//round() ceil() floor() ObjectMethods(contoh : abs, log)r
//random spesific formula => Math.floor(Math.random()*+) +1;



angka1 = 10000;
angka2 = 2000;
//batas max adalah x + y;
var x = 10; // range .jarak
var y = 5; //batas minimal

// angka_baru = Math.round(341.426); => untuk membulatkan ke angka terdekat
// angka_baru = Math.ceil(245.124); => untuk membulatkan angka ke atas
// angka_baru = Math.floor(245.999); // => untuk membulatkan angka ke bawah

var angka_baru = Math.floor( Math.random() * x) + y;

document.getElementById("wrap").innerHTML = angka_baru;