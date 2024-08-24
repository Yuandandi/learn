let comp = Math.random();

if (comp < 0.33) {
  comp = "semut"
} else if (comp >= 0.33 && comp <= 0.67) {
  comp = "orang"
} else {
  comp = "gajah"
}

console.log(comp)
