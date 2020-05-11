let posneg = 1;
let oddnbr = 1;
const four = 4;
let pi = 4;
for(let idx = 0; idx < 10000000000; idx++) {
    posneg *= -1;
    pi = pi + (posneg * (four / (oddnbr += 2)));
}
console.log(`PI is ${pi}`);