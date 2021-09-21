import { addition } from './addition.mjs';
import { substract } from './substract.mjs';
import { divide } from './divide.mjs';
import { multiply } from './multiply.mjs';
import { modulo } from './modulo.mjs';

export function calculator(number1, number2, operator) {
    let wynik;
    switch (operator) {
        case '+':
            wynik = addition(number1, number2);
            break;
        case '-':
            wynik = substract(number1, number2);
            break;
        case '*':
            wynik = multiply(number1, number2);
            break;
        case '/':
            wynik = divide(number1, number2);
            break;
        case '%':
            wynik = modulo(number1, number2);
            break;
        default:
            wynik = `Sorry, ale nie znam takiego operatora: ${operator}.`;
      }
      return wynik;
}