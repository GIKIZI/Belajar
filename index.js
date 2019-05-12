const gender="male";
let umur=7;


if (umur <= 0) {
  console.log("ngaco");
} else if (umur <= 12) {
  if (gender == "male") {
    console.log("boys");
  }else {
    console.log("girl");
  }
  console.log("sm");
} else if (umur >= 22) {
  console.log("YOUTH");
} else {
  console.log("JC");
}
