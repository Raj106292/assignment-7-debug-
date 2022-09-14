const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("col-lg-4")
    console.log(test);

    newRow.innerHTML = `
    <div class="card-body bg-light p-3 rounded mt-2">
    <h3 class="card-title">${test.questionText}</h5>
    <p class="card-text mt-2">You took: <span class="bold">${test.timeTaken}</span> seconds</p>
    <p class="card-text">You made <span class="bold red">${test.errorCount}</span> mistakes</p>
    </div>
   `;

    histories.appendChild(newRow);
  });
}
