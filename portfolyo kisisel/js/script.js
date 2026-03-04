const temaButonu = document.getElementById("temaButonu");

temaButonu.addEventListener("click", () => {
  document.body.classList.toggle("koyu-mod");
  temaButonu.textContent =
    document.body.classList.contains("koyu-mod") ? "☀️" : "🌙";
});

const girisButonu = document.getElementById("girisButonu");
const girisModal = document.getElementById("girisModal");
const kapat = document.getElementById("kapat");

girisButonu.addEventListener("click", () => {
  girisModal.style.display = "flex";
});

kapat.addEventListener("click", () => {
  girisModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === girisModal) {
    girisModal.style.display = "none";
  }
});

const girisYap = document.getElementById("girisYap");
const mesaj = document.getElementById("girisMesaj");

girisYap.addEventListener("click", () => {
  const kullanici = document.getElementById("kullaniciAdi").value;
  const sifre = document.getElementById("sifre").value;

  if (kullanici === "admin" && sifre === "1234") {
    mesaj.textContent = "Giriş başarılı";
    mesaj.style.color = "green";
  } else {
    mesaj.textContent = "Kullanıcı adı veya şifre yanlış";
    mesaj.style.color = "red";
  }
});
