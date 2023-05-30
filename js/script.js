console.log("JSOK");
//imposta le variabili e i const
let result = "";
const FizzBuzz = "FizzBuzz";
const Fizz = "Fizz";
const Buzz = "Buzz";
//ciclo for
for (let i = 1; i <= 100; i++) {
  // if i è divisibile sia per 3 che per 5
  if (i % 3 === 0 && i % 5 === 0) {
    //risultato
    result = FizzBuzz;
    // oppure se è divisibile per 3
  } else if (i % 3 === 0) {
    //risultato
    result = Fizz;
    // oppure se è divisibile per 3
  } else if (i % 5 === 0) {
    //risultato
    result = Buzz;
    // se non è divisibile
  } else {
    result = i;
  }
  console.log(result);
}
