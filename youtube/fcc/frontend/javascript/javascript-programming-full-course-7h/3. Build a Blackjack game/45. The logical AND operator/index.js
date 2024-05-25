let hasCompletedCourse = true
let hasCompletedCourse = true
let givesCertificate = true

// nested if statement;
// if (hasCompletedCourse === true) {
//   if (givesCertificate === true) {
//     generateCertificate();
//   };
// };

// faster way with and operator
if (hasCompletedCourse === true && givesCertificate === true) {
  generateCertificate();
}

function generateCertificate() {
  console.log("Generating certificate....")
}


