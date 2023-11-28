// задание 8.2
// class ClickCounter extends HTMLElement {
//   constructor() {
//     super();
//     this.clickCount = 0;
//     this.render();
//     this.log('компонент создан');
//   }

//   connectedCallback() {
//     this.render();
//     const clickButton = this.querySelector('#clickButton');
//     clickButton.addEventListener('click', this.incrementCounter.bind(this));
//     const resetButton = this.querySelector('#resetButton');
//     resetButton.addEventListener('click', this.resetCounter.bind(this));
//     this.log('Компонент подключен');
//   }

//   disconnectedCallback() {
//     const clickButton = this.querySelector('#clickButton');
//     clickButton.removeEventListener('click', this.incrementCounter.bind(this));
//     const resetButton = this.querySelector('#resetButton');
//     resetButton.removeEventListener('click', this.resetCounter.bind(this));
//     this.log('Компонент отключен');
//   }

//   attributeChangedCallback(name, oldValue, newValue) {
//     this.log(
//       `Атрибут ${name} изменен.Старое значение: ${oldValue}, новое значение: ${newValue}`
//     );
//   }

//   static get observedAttributes() {
//     return ['some-attribute']; // Замените 'some-attribute" на имя атрибута, который вы хотите отслеживать
//   }

//   render() {
//     this.innerHTML = `
// <div>
// <button id="clickButton">Кликни меня</button>
// <button id="resetButton">Сбросить</button>
// <p>Количество кликов: ${this.clickCount}</p>
// </div>
// `;
//     // Добавляем обработчики событий для кнопок

//     const clickButton = this.querySelector('#clickButton');
//     clickButton.addEventListener('click', this.incrementCounter.bind(this));
//     const resetButton = this.querySelector('#resetButton');
//     resetButton.addEventListener('click', this.resetCounter.bind(this));
//   }
//   incrementCounter() {
//     this.clickCount++;
//     this.dispatchEvent(new Event('clickCountUpdated'));
//     this.render();
//     this.log('Количество кликов увеличено');
//   }

//   resetCounter() {
//     this.clickCount = 0;
//     this.render();
//     this.log('Счетчик сброшен');
//   }

//   log(message) {
//     console.log(`[${this.tagName}] ${message}`);
//   }
// }
// customElements.define('click-counter', ClickCounter);

// задание 9.1

// customElements.define(
//   'my-paragraph',
//   class extends HTMLElement {
//     constructor() {
//       super();
//       let template = document.getElementById('my-paragraph');
//       let templateContent = template.content;

//       const shadowRoot = this.attachShadow({ mode: 'open' });
//       shadowRoot.appendChild(templateContent.cloneNode(true));
//     }
//   }
// );

// задание 9.2

// 1
// customElements.define(
//   'my-paragraph',
//   class extends HTMLElement {
//     constructor() {
//       super();
//       const template = document.getElementById('my-paragraph');
//       const container = document.querySelector('main');

//       for (let i = 0; i < 5; i++) {
//         const clone = document.importNode(template.content, true);
//         container.appendChild(clone);
//       }

//       const shadowRoot = this.attachShadow({ mode: 'open' });
//       shadowRoot.appendChild(templateContent.cloneNode(true));
//     }
//   }
// );

// 2
// customElements.define(
//   'my-paragraph',
//   class extends HTMLElement {
//     constructor() {
//       super();

//       this.attachShadow({ mode: 'open' });
//     }

//     connectedCallback() {
//       const template = document.getElementById('my-paragraph');

//       const cardsData = [
//         {
//           imageSrc: 'assets/img/133317661_4ff279ab3d_o — копия.jpg',
//           title: 'Заголовок 1',
//           description: 'Описание карточки',
//         },
//         {
//           imageSrc: 'assets/img/133317661_4ff279ab3d_o — копия.jpg',
//           title: 'Заголовок 2',
//           description: 'Описание карточки',
//         },
//         {
//           imageSrc: 'assets/img/133317661_4ff279ab3d_o — копия.jpg',
//           title: 'Заголовок 3',
//           description: 'Описание карточки',
//         },
//         {
//           imageSrc: 'assets/img/133317661_4ff279ab3d_o — копия.jpg',
//           title: 'Заголовок 4',
//           description: 'Описание карточки',
//         },
//       ];

//       cardsData.forEach((data) => {
//         const clone = document.importNode(template.content, true);
//         clone.querySelector('img').src = data.imageSrc;
//         clone.querySelector('h2').textContent = data.title;
//         clone.querySelector('p').textContent = data.description;
//         this.shadowRoot.appendChild(clone);
//       });
//     }
//   }
// );


// // кт-4
// let expenseNameInput = document.getElementById('expense-name');
// let expenseAmountInput = document.getElementById('expense-amount');
// let expenseList = document.getElementById('expense-list');
// let totalExpenses = document.getElementById('total-expenses');

// // Массив для хранения всех расходов
// let expenses = [];

// // Функция для отображения расходов и обновления общей суммы
// function updateExpenses() {
//     expenseList.innerHTML = ''; // Очищаем список расходов

//     let total = 0; // Переменная для хранения общей суммы

//     // Проходимся по каждому расходу и создаем элемент списка
//     expenses.forEach(function (expense) {
//         let li = document.createElement('li');
//         li.textContent = expense.name + ' - ' + expense.amount;

//         // Кнопка для удаления расхода
//         let deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Удалить';
//         deleteButton.addEventListener('click', function () {
//             // Удаляем расход из массива и обновляем отображение
//             expenses.splice(expenses.indexOf(expense), 1);
//             updateExpenses();
//         });

//         li.appendChild(deleteButton);
//         expenseList.appendChild(li);

//         total += expense.amount; // Добавляем сумму расхода к общей сумме
//     });

//     totalExpenses.textContent = 'Общая сумма расходов: ' + total;
// }

// // Обработчик отправки формы
// document.querySelector('form').addEventListener('submit', function (event) {
//     event.preventDefault(); // Отменяем перезагрузку страницы

//     let name = expenseNameInput.value;
//     let amount = parseInt(expenseAmountInput.value);

//     if (name && amount) { // Проверка на заполнение полей
//         // Создаем новый объект с данными расхода и добавляем его в массив
//         expenses.push({
//             name: name,
//             amount: amount
//         });

//         // Очищаем поля ввода
//         expenseNameInput.value = '';
//         expenseAmountInput.value = '';

//         updateExpenses(); // Обновляем отображение
//     }
// });

// // Инициализируем отображение расходов
// updateExpenses();



// задание 14
// class ExpenseTrackerLite extends HTMLElement {
//     constructor() {
//         super();
//         this.expenses = [];
//         this.total = 0;

//         this.attachShadow({ mode: 'open' });
//         this.render();
//         this.setupEventListeners();
//     }

//     render() {
//         this.shadowRoot.innerHTML = `
//         <div id="app">
//             <label for="expense-name">Название покупки:</label>
//             <input type="text" id="expense-name" required>

//             <label for="expense-amount">Стоимость:</label>
//             <input type="number" id="expense-amount" required>
//             <button id="add-expense">Добавить покупку</button>

//             <ul id="expense-list"></ul>
//             <p>Общая сумма: <span id="total-amount">0</span></p>
//         </div> `;
//     }

//     setupEventListeners() {
//         const addButton = this.shadowRoot.getElementById('add-expense');

//         addButton.addEventListener('click', () => {
//             this.addExpense();
//         });
//     }

//     addExpense() {
//         const nameInput = this.shadowRoot.getElementById('expense-name');
//         const amountInput = this.shadowRoot.getElementById('expense-amount');
//         const expenseList = this.shadowRoot.getElementById('expense-list');
//         const totalAmount = this.shadowRoot.getElementById('total-amount');

//         const name = nameInput.value;
//         const amount = parseFloat(amountInput.value);

//         if (name && !isNaN(amount)) {
//             this.expenses.push({ name, amount });
//             this.total += amount;

//             this.renderExpenses();
//             totalAmount.textContent = this.total.toFixed(2);

//             nameInput.value = '';
//             amountInput.value = '';
//         }
//     }

//     renderExpenses() {
//         const expenseList = this.shadowRoot.getElementById('expense-list');
//         const li = document.createElement('li');
//         const lastExpense = this.expenses[this.expenses.length - 1];
//         li.textContent = `${lastExpense.name}: ${lastExpense.amount.toFixed(2)}`;
//         expenseList.appendChild(li);
//     }
// }

// customElements.define('expense-tracker-lite', ExpenseTrackerLite);

// задание 15

// class CustomInput extends HTMLElement {
//     constructor() {
//         super()
//         const shadow = this.attachShadow({ mode: 'open' })
//         const style = document.createElement('style')
//         style.textContent = `
//         :host{
//             display:block;
//         }

//         input {
//             width: 100%;
//             padding: 8px;
//             border: 1px solid var(--input-text-color);
//             border-radius: var(--input-border-radius);
//             background-color: var(--input-backround);
//             color: var(--input-text-color);
//             box-sizing: border-box;
//             font-size: 16px;
//         }

//         ::placeholder{
//             color: var(--placeholder-color);
//         }
//         `
//         const input = document.createElement('input')
//         input.setAttribute('type', 'text');
//         input.setAttribute('placeholder', 'Напиши что-то тут')
//         shadow.appendChild(style)
//         shadow.appendChild(input)
//     }
// }
// customElements.define('custom-input', CustomInput)