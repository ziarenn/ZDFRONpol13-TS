// 1. PODSTAWOWE TYPY DANYCH
// 1. Wybierz liste ul (klasa todos)
const todoList = document.querySelector(".todos");
// 2. Stwórz listę z kategoriami todosów.
const categories = ["life", "work", "sport", "education"];
// Otypuj odpowiednio listę categories (użyj typu Category)
// 3. Otypuj odpowiednio listę todos (stwórz interfejs Todo dla obiektów w środku listy)
const todos = [
    {
        title: "Wyrzucić śmieci",
        done: false,
        category: "life",
    },
    {
        title: "Pójść na siłke",
        done: true,
        category: "sport",
    },
    {
        title: "Nakarmić psa",
        done: false,
        category: "work",
    },
];
// 1. Stwórz funkcje render (parametry: todos (lista obiektów klasy Todo))
// W środku render:
const render = (todos) => {
    // 2. Na parametrze todos wywołaj metodę forEach (todo (obiekt klasy Todo))
    // W środku FE:
    todos.forEach((todo) => {
        // 3. Stwórz element <li>, klasę ustaw na kategorię z elementu po którym aktualnie iterujesz (1 par FE), textContent ma zawierać title i category
        const li = document.createElement("li");
        li.setAttribute("class", todo.category);
        li.textContent = `${todo.title} (${todo.category})`;
        // 4. Stwórz element <input>, type "checkbox", checked ustaw na własność done z elementy po którym aktualnie iterujesz, podepnij input do li (pkt 3)
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("checked", `${todo.done}`);
        li.appendChild(checkbox);
        checkbox.addEventListener("click", () => {
            todo.done ? (todo.done = false) : (todo.done = true);
        });
    });
};
render(todos);
export {};
// 5. Na input z pkt 4 nałóż event listener (click)
// W środku EL:
// 6. Jeżeli własność done aktulanego elementu ma wartość true, to ustaw ją na false, jeżeli ma false to ustaw true
