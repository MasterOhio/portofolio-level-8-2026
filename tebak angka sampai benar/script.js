let angkaRahasia = Math.floor(Math.random() * 10) + 1;

    function main() {
      let tebakan = parseInt(document.getElementById("tebakan").value);
      let pesan = document.getElementById("pesan");

      if (isNaN(tebakan)) {
        pesan.textContent = "⚠️ Masukkan angka dulu!";
        pesan.style.color = "orange";
        return;
      }

      if (tebakan < angkaRahasia) {
        pesan.textContent = "📉 Terlalu kecil, coba lagi!";
        pesan.style.color = "red";
      } else if (tebakan > angkaRahasia) {
        pesan.textContent = "📈 Terlalu besar, coba lagi!";
        pesan.style.color = "red";
      } else {
        pesan.textContent = "🎉 Selamat, tebakanmu benar!";
        pesan.style.color = "green";
      }
    }