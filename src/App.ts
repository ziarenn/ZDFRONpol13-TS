// 1. PODSTAWOWE TYPY DANYCH

// a) number
// let age: number = 31;
// age = 32;
// age ="lalalala" BŁAD
// console.log(age);

// b) string
// let imie: string = "John";
// imie = "123";
// const surname = "smith";

// c) boolean
// const bool = true;
// let bool2: boolean = false;

// 2. TYPOWANIE FUNKCJI
// const add = (num1: number, num2: number): number => {
//   return num1 + num2;
// };

// const outcome = add(1, 2);

// const multiply = (num1: number, num2: number): void => {
//   console.log(num1 * num2);
// };

// Zad 1.
// Napisz funkcje która będzie obliczała cenę w zależności czy zniżka jest przyznana, czy nie.
// Nazwa calculatePrice
// Parametry: originalPrice (liczba), hasDiscount (ttrue/false)
// Funkcjonalność: Jeżeli parametr hasDicount jest równy true, zwróc liczbę originalPrice pomniejszoną o 20%, jeżeli hasDiscount jest równe false, zwróć po prostu originalPrice

// const calculatePrice = (originalPrice: number, hasDicount: boolean): number =>
//   hasDicount ? originalPrice * 0.8 : originalPrice;

// const price = 20;
// const discount = true;
// console.log(calculatePrice(price, discount));

// const button: HTMLButtonElement = document.querySelector("button");
// const categoryList: HTMLUListElement = document.querySelector(".categories");

// button.addEventListener("click", () => {
//   // 1. W jakiś sposób wylosuj czy użytkownik ma zniżke czy nie i zapisz do zmiennej true albo false
//   const hasDiscount = Math.random() > 0.5 ? true : false;
//   // 2. Ściągnij wartość z inputu textowego (id "name").
//   const price = +document.querySelector("input").value;
//   // 3. Wykonaj console loga `You have to pay *tu cena, która jest wynikiem wywołania calculatePrice*`
//   console.log(`You have to pay ${calculatePrice(price, hasDiscount)}`);
// });

// 3. UNION TYPES
// let cos: number | string | boolean = 0;
// cos = 12;
// cos = "Error";
// cos = false;
// console.log(cos);

// 4. TYPE ALIAS
// type Name = string;
// const firstName: Name = "Sara";
// type Cos = number | string | boolean;
// let cos: Cos = 0;
// let cos2: Cos = "123";
// cos = 12;
// cos = "Error";
// cos = false;
// console.log(cos);

// 5. TYPE ALIAS + UNION TYPES: twarde ustawienie wartości

// type Category = "life" | "work" | "education" | "sport";
// const myCategory: Category = "gym";  // ERROR

// 6. TYPOWANIE OBIEKTOW

// const person: object = {
//   name: "John",
//   surname: "Smith",
//   age: 30,
// };

// a) type alias
//type Person = { name: string; surname: string; age: number };

// b) interface
interface Person {
  name: string;
  surname: string;
  age: number;
}

interface Person2 extends Person {
  married: boolean;
}
const person: Person = {
  name: "John",
  surname: "Smith",
  age: 30,
};

const person2: Person2 = {
  name: "Sara",
  surname: "Smith",
  age: 30,
  married: true,
};
