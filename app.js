let friends = ["Auri", "Kvoth", "Bast", "Ambrose", "Denna"];
let sing = document.getElementsByClassName("sing")[0];
// selects friends and decreases the number of codes numCode
sing.addEventListener("click", function () {
  for (i = 0; i < friends.length; i++) {
    let friend = friends[i];
    let div = document.createElement("div");

    let h3 = document.createElement("h3");
    h3.textContent = friends[i];
    h3.className = "h3";
    div.appendChild(h3);
    document.body.appendChild(div);

    for (numCode = 99; numCode > 0; numCode--) {
      let p = document.createElement("p");
      p.className = "paragraph";
      div.appendChild(p);
      let minusOne = numCode - 1;
      if (numCode > 2) {
        p.textContent =
          +numCode +
          " lines of code in the file, " +
          numCode +
          " lines of code; " +
          friend +
          " strikes one out, clears it all out, " +
          minusOne +
          " lines of code in the file";
      } else if (numCode === 2) {
        p.textContent =
          +numCode +
          " lines of code in the file, " +
          numCode +
          " lines of code; " +
          friend +
          " strikes one out, clears it all out, " +
          minusOne +
          " line of code in the file";
      } else if (numCode === 1) {
        p.textContent =
          +numCode +
          " line of code in the file, " +
          numCode +
          " line of code; " +
          friend +
          " strikes one out, clears it all out, " +
          minusOne +
          " line of code in the file";
      }
    }
  }
});
