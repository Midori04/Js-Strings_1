var stringone = "Christoffer";

var nyTekst= stringone.split("").reverse().join("");

if (stringone == nyTekst) {
    console.log("Denne teksten er palindrome");
} else {
    console.log("Denne teksten er ikke palindrome");
}