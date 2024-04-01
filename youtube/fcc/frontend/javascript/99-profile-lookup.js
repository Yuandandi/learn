
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

function lookProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name)
      return contacts[i][prop] || "No such property";
  }
  return "No such contacts";
}

var data = lookProfile("akira", "likes");

console.log(data);
