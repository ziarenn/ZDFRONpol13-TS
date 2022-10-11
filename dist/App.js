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
const add = (num1, num2) => {
    return num1 + num2;
};
const outcome = add(1, 2);
const multiply = (num1, num2) => {
    console.log(num1 * num2);
};
// Zad 1.
// Napisz funkcje która będzie obliczała cenę w zależności czy zniżka jest przyznana, czy nie.
// Nazwa calculatePrice
// Parametry: originalPrice (liczba), hasDiscount (ttrue/false)
// Funkcjonalność: Jeżeli parametr hasDicount jest równy true, zwróc liczbę originalPrice pomniejszoną o 20%, jeżeli hasDiscount jest równe false, zwróć po prostu originalPrice
const calculatePrice = (originalPrice, hasDicount) => hasDicount ? originalPrice * 0.8 : originalPrice;
// const price = 20;
// const discount = true;
// console.log(calculatePrice(price, discount));
const button = document.querySelector("button");
const categoryList = document.querySelector(".categories");
button.addEventListener("click", () => {
    // 1. W jakiś sposób wylosuj czy użytkownik ma zniżke czy nie i zapisz do zmiennej true albo false
    const hasDiscount = Math.random() > 0.5 ? true : false;
    // 2. Ściągnij wartość z inputu textowego (id "name").
    const price = +document.querySelector("input").value;
    // 3. Wykonaj console loga `You have to pay *tu cena, która jest wynikiem wywołania calculatePrice*`
    console.log(`You have to pay ${calculatePrice(price, hasDiscount)}`);
});
