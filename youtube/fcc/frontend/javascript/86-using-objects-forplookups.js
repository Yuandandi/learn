// Using object to lookup values

function phoneticLookup(val) {
  var result = ""; // placeholder
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  };
  result = lookup[val];
  return result;
}

console.log(phoneticLookup("foxtrot"));
