document.addEventListener("DOMContentLoaded", function () {
  function updateTotals() {
    let totalMet = 0,
      totalKris = 0,
      totalDeut = 0,
      totalAll = 0,
      totalAllMse = 0;

    document.querySelectorAll("table tr").forEach((row) => {
      const metInput = row.querySelector(".metInput");
      const krisInput = row.querySelector(".krisInput");
      const deutInput = row.querySelector(".deutInput");
      const totalRess = row.querySelector(".totalRess");
      const totalMse = row.querySelector(".totalMse");

      if (metInput && krisInput && deutInput && totalRess && totalMse) {
        const met = parseInt(metInput.value) || 0;
        const kris = parseInt(krisInput.value) || 0;
        const deut = parseInt(deutInput.value) || 0;

        const sum = met + kris + deut;
        const mse = met * 1 + kris * 2 + deut * 3;

        totalRess.textContent = sum;
        totalMse.textContent = mse;

        totalMet += met;
        totalKris += kris;
        totalDeut += deut;
        totalAll += sum;
        totalAllMse += mse;
      }
    });

    document.getElementById("totalMet").textContent = totalMet;
    document.getElementById("totalKris").textContent = totalKris;
    document.getElementById("totalDeut").textContent = totalDeut;
    document.getElementById("totalAll").textContent = totalAll;
    document.getElementById("totalAllMse").textContent = totalAllMse;
  }

  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", updateTotals);
  });

  updateTotals();
});
