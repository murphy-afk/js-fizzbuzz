// creare un ciclo for per scorrere i numeri da 1 a 100
// per ogni numero controllare se è divisibile per 3 
// se è divisibile per 3 sostituire il numero con "Fizz"
// controllare se è anche divisibile per 5
// se lo è sostituire "Fizz" con "Fizzbuzz"
// se non è divisibile per 3 controllare se è divisibile per 5
// se è divisibile per 5 sostituire il numero con "Buzz"
// se il numero non è divisibile per nessuno dei due stampare il numero

// for (let i = 1; i <= 100; i++) {
//   let res = i;
//   if ((i % 3) === 0) {
//     res = "Fizz";

//     if ((i % 5) === 0) {
//       res = "FizzBuzz";
//     }
//   }
//   else {
//     if ((i % 5) === 0) {
//       res = "Buzz";
//     }
//   }
//   console.log(res);
// }

for (let i = 1; i <= 100; i++) {
  let res = "";
  if ((i % 3) === 0) {
    res = "Fizz";
  }
  if ((i % 5) === 0) {
    res = res + "Buzz";
  }
  if (res === "") {
    res = i;
  }
  console.log(res);
}