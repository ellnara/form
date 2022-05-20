var btn = document.getElementById("submit");
var correct = false;
btn.onclick = function () {
  var inp = document.getElementsByTagName("input").value;
  document.getElementById("form").remove();
  inp.array.forEach(element => {
      document.getElementById("txt")+=element;
  });
    
};
