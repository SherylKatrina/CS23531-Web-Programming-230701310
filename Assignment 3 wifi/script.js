const schemes = [];

document.getElementById('addSchemeBtn').addEventListener('click', function () {
  const schemeName = document.getElementById('scheme_name').value.trim();
  const connectionType = document.getElementById('connection_type').value.trim();
  const speed = parseInt(document.getElementById('speed').value.trim());
  const dataLimit = parseInt(document.getElementById('data_limit').value.trim());
  const price = parseFloat(document.getElementById('price').value.trim());
  const errorMessage = document.getElementById('error-message');

  if (!schemeName || !connectionType || isNaN(speed) || isNaN(dataLimit) || isNaN(price)) {
    errorMessage.textContent = "Please fill out all fields correctly.";
    return;
  }

  errorMessage.textContent = "";

  const scheme = { schemeName, connectionType, speed, dataLimit, price };
  schemes.push(scheme);

  updateTable();
  document.getElementById('wifiForm').reset();
});

function updateTable() {
  const tbody = document.getElementById('schemeTable').querySelector('tbody');
  tbody.innerHTML = ""; // Clear table

  schemes.forEach(scheme => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${scheme.schemeName}</td>
      <td>${scheme.connectionType}</td>
      <td>${scheme.speed}</td>
      <td>${scheme.dataLimit}</td>
      <td>${scheme.price}</td>
      <td></td>
    `;
    tbody.appendChild(row);
  });

  updateRecommendationRow(tbody);
}

function updateRecommendationRow(tbody) {
  if (schemes.length === 0) return;

  let best = schemes[0];
  let bestScore = best.speed / best.price;

  for (let i = 1; i < schemes.length; i++) {
    const currentScore = schemes[i].speed / schemes[i].price;
    if (currentScore > bestScore) {
      best = schemes[i];
      bestScore = currentScore;
    }
  }

  const recRow = document.createElement('tr');
  recRow.classList.add('recommendation-row');
  recRow.innerHTML = `
    <td colspan="6">Recommended: ${best.schemeName} (${best.connectionType}) | Speed: ${best.speed} Mbps | Price: ₹${best.price}</td>
  `;
  tbody.appendChild(recRow);
}
