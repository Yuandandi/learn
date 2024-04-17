
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine,",
    "number": "05454095840",
    "likes": ["pizza", "coding", "brownie points"],
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "39840293480298",
    "likes": ["hogwarts", "magic", "hagrid"],
  },
  {
    "firstName": "sherlock",
    "lastName": "holmes",
    "number": "023940293",
    "likes": ["intriguing cases", "violin"],
  },
  {
    "firstName": "kristian",
    "lastName": "vos",
    "number": "unknown",
    "likes": ["JavaScript", "gaming", "foxes"],
  }
];

// user input name and which properties
function lookProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) // if the name exist in the firstName key value pair go to next (strict equality)
      return contacts[i][prop] || "No such property"; // if the properties exist return the properties if not "no such properties"
  }
  return "No such contacts"; // if name is incorrect return this
}

var data = lookProfile("foo", "likes");

console.log(data);
