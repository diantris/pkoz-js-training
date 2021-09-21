import { calculator } from './modules/calculator.mjs';
import * as readline from 'readline';

const readTheLines = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readTheLines.question('Podaj znak działania (+, -, *, /, %): ', (operator) => {
    readTheLines.question('Podaj pierwszą liczbę: ', (number1) => {
        readTheLines.question('Podaj drugą liczbę: ', (number2) => {
            readTheLines.close();
            console.log('Wynik: ', calculator(parseInt(number1), parseInt(number2), operator));
        })
    })
});