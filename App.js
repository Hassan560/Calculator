function getValue(num) {
  var inp = document.getElementById("inp");
  inp.value += num;
  // console.log(num)
}

function calc() {
  var inp = document.getElementById("inp");
  inp.value = eval(inp.value);
  // console.log(inp.value)
}
function clean() {
  var inp = document.getElementById("inp");
  inp.value = "";
}

function minus() {
  var inp = document.getElementById("inp");
  inp.value = inp.value.slice(0, -1);
}
