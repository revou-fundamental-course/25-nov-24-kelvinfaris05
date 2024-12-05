// Ambil elemen form dan tombol
const form = document.getElementById("bmiForm");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");
const bmiValue = document.getElementById("bmiValue");
const bmiCategory = document.getElementById("bmiCategory");

// Event listener untuk tombol Hitung BMI
calculateBtn.addEventListener("click", function () {
  // Ambil input dari form
  const gender = form.gender.value;
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseInt(document.getElementById("age").value);

  // Validasi input
  if (!gender || isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
    alert("Mohon isi semua data dengan benar.");
    return;
  }

  // Hitung BMI
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  // Tentukan kategori BMI
  let category = "";
  if (bmi < 18.5) {
    category = "Kekurangan Berat Badan";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Berat Badan Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Kelebihan Berat Badan";
  } else {
    category = "Obesitas";
  }

  // Tampilkan hasil
  bmiValue.textContent = `BMI Anda: ${bmi}`;
  bmiCategory.textContent = `Kategori: ${category}`;
  resultDiv.classList.remove("hidden");
});
