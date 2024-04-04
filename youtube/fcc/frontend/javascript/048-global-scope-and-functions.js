// SCOPE
// the visibility of a variables

// outside function = global scope (execute anywhere anytime)

var glob = 16;

function  fun1() {
  oopsGlobal = 5; // if You didn't put var before the variable name, It will be treat as a global variable. if You do It will be treat as local variable
  // var oopsGlobal = 5; // local variable
}

function  fun2() {
  var output = "";
  if (typeof glob != "undefined") {
    output += "glob: " + glob;
  }
  if (typeof oopsGlobal != "undefined") {
    output += "oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1();
fun2();
