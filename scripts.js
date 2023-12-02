function printAndHide() {
  document.getElementById("print-button").style.visibility = "hidden";

  setTimeout(function () {
    window.print();
  }, 0);

  setTimeout(function () {
    document.getElementById("print-button").style.display = "none";
  }, 100);
}
