const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

35 / true
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const findSmallestNumber = numbers => Math.min(...numbers);
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
47,23,73,33,61,62,37,4,50,82,93,85,11,2,54,16,56,57,86,56,33,46,12,81,41,15,86 / false
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
