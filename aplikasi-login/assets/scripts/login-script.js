/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Mendapatkan input email dan password pengguna dari form.
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;
  
    // Logika perbandingan dengan kondisi:
    if (email == expectedEmail && password == expectedPassword) {
      goToHome()
    } else {
      showPopUp()
    }
});
