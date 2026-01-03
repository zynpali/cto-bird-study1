function searchBirds() {
  let input = document.getElementById("search").value.toLowerCase();
  let rows = document.getElementById("birdTable").rows;

  for (let i = 1; i < rows.length; i++) {
    let bird = rows[i].cells[0].innerText.toLowerCase();
    rows[i].style.display = bird.includes(input) ? "" : "none";
  }
}