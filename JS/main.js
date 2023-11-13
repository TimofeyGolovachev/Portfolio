const startBtn = document.querySelector('.game-menu__btn');
let gameContainer = document.querySelector('.game-container');



// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

function createNumbersArray(cards) {
  let arrayCards = [];
  for (let i = 1; i <= cards/2; i++) {
    arrayCards.push(i);
    arrayCards.push(i);
  }
  return arrayCards;
}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
  let j, temp;
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

function startGame(count) {
  let restartBtn = document.createElement('button');
  restartBtn.classList.add('restart-btn'); //Кнопка для рестарта игры
  restartBtn.textContent = 'Играть снова'
  let arrayCards = createNumbersArray(count);  //Массив с парами
  arrayCards = shuffle(arrayCards);  //Перемешанный массив
  document.querySelector('.game-menu').classList.add('display--none');  //Скрытие меню игры (раскомментировать)
  let cards = document.createElement('div'); //Создание набора карточек
  cards.classList.add('cards');
  for (let i = 0; i < arrayCards.length; i++) {  //Заполнение набора карточек
    let card = document.createElement('div');
    card.classList.add('card', 'bg-white');  //Добавление классов для стилей и скрывания значения
    card.textContent = arrayCards[i];
    cards.append(card);
  }
  gameContainer.append(cards);
  gameContainer.append(restartBtn);

  restartBtn.addEventListener('click', () => {
    cards.remove(); //Удаления контейнера с карточками
    document.querySelector('.game-menu').classList.remove('display--none') //Делаю меню видимым
    restartBtn.remove(); //Удаляю кнопку рестарта
  })


  let previousElement = ''; //Переменная для предыдущего значения
  cards.addEventListener('click', function (event) { //При клике на карточку, запуск функции проврки на равенство карточек
    let currentElement = event.target;
    currentElement.classList.remove('bg-white');  //При клике открываю цифру
    // console.log(previousElement);
    if (previousElement === '') { //Если предыдущее значение пустое, задаю ему текущие (первая итерация)
      previousElement = currentElement;
    } else if (previousElement.textContent === currentElement.textContent) { //Иначе если, прошлый и текущий элементы равны стираю их, а предущему задаю пустое значение для новой проверки
      previousElement.style.opacity = 0;
      currentElement.style.opacity = 0;
      previousElement = '';
    } else {
      previousElement.classList.add('bg-white');
      previousElement = currentElement;
    };

  })
}

startBtn.addEventListener('click', () => {
  let rows = Number(document.querySelector('.input-rows').value);
  let columns = Number(document.querySelector('.input-columns').value);
  let cards = rows * columns;
  if (cards % 2 !== 0 || cards / 2 === 0) {
    startGame(4);
  }
  else {
    startGame(cards);
  }


})
