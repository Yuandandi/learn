// Create an object that represents an Airbnb castle listing.
// It should contain at least one Boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let kecamatanKlojen = {
  isOpen: "true",
  price: 1350000,
  bedrooms: 4,
  vacility: [
    "dapur",
    "wifi",
    "parkir geratis",
    "tv",
    "ac",
  ]
};

console.log(kecamatanKlojen.isOpen);
console.log(kecamatanKlojen.price);
console.log(kecamatanKlojen['bedrooms']);
console.log(kecamatanKlojen.vacility[0]);
