// buat fungsi
// ambil nilai username
// ambil nilai password
// kita cek apakah passwordnya username dan passwordnya benar dengan yang kita tentukan nilainya
// jika benar berikan alert berhasil login dan arahkan ke file index
// jika password dan username kosong
// maka berikan alert password dan username kosong
// jika password dan username salah
// tampilkan username dan password salah 

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "123456") {
        alert('Anda Berhasil Login');
        window.location="index.html"
        return false;
    }
    else if (username == "" || password=="") {
        alert ("username / password tidak boleh kosong")
        return false;
    }
    else{
        alert("Username / Password yang anda inputkan salah")
    }
    
}