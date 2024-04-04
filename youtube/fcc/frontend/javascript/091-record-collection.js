
var collection = {
  "2548": {
    "album": "slippery When Wet",
    "artist": "Bon Jovi,",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name",
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette",
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
"5439": {
  "album": "ABBA Gold"
}
};

// criteria
// create update records Function
// ID , properties, value
// same ID , same properties, different value will update the values on that ID 
// if the value is empty, It will delete that properties
// if we have the properties of tracks and a value, rather than change the whole tracks we will added to the list of tracks

// keep a copy of the collection
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") { // empty value will delete it's properties
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [] // if already exist then use It. if nto will be empty array. fancy way if else Using 'or' notation
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}

updateRecords(2468, "tracks", "test")
console.log(updateRecords(5439, "artist", "ABBA"));

// {
//   '1245': { artist: 'Robert Palmer', tracks: [] },
//   '2468': {
//     album: '1999',
//     artist: 'Prince',
//     tracks: [ '1999', 'Little Red Corvette', 'test' ] // add new tracks at
//     the end (test)
//   },
//   '2548': {
//     album: 'slippery When Wet',
//     artist: 'Bon Jovi,',
//     tracks: [ 'Let It Rock', 'You Give Love a Bad Name' ]
//   },
//   '5439': { album: 'ABBA Gold', artist: 'ABBA' } // create new properties
//   artist and the value ABBA
// }


// console.log(collection); // original
// {
//   '1245': { artist: 'Robert Palmer', tracks: [] },
//     '2468': {
//       album: '1999',
//       artist: 'Prince',
//       tracks: [ '1999', 'Little Red Corvette' ]
//     },
//     '2548': {
//       album: 'slippery When Wet',
//       artist: 'Bon Jovi,',
//       tracks: [ 'Let It Rock', 'You Give Love a Bad Name' ]
//     },
//     '5439': { album: 'Abba Gold' }
// }

