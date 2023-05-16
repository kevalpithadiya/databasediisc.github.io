unload();

function setBgColor() {
  var percent =
    document.documentElement.scrollTop /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  document.querySelector("body").style.background = `rgb(${16 + percent * (15 - 16)}, ${16 + percent * (84 - 16)}, ${16 + percent * (138 - 16)})`;
}

window.addEventListener("scroll", function () {
  setBgColor();
});
