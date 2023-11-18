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
