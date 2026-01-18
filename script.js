//your JS code here. If required.
let submitBtn = document.getElementById("submit");
let bookList = document.getElementById("book-list");

submitBtn.addEventListener("click", function () {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let isbn = document.getElementById("isbn").value;

  if (title === "" || author === "" || isbn === "") return;

  let row = document.createElement("tr");

  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">Clear</button></td>
  `;

  bookList.appendChild(row);

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
});

bookList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});
