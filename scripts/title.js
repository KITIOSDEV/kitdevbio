var titles = [
  "@",
  "@K",
  "@KC",
  "@KCo",
  "@KCod",
  "@KCode",
  "@KCoder♥︎",
  "@KCoder",
  "@KCode",
  "@KCod",
  "@KCo",
  "@K",
  "@",
];

function changeTitle() {
  var index = 0;

  setInterval(function() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
  }, 1000);
}

changeTitle();
