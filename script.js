
// 1. Часы в заголовке вкладки браузера
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('ru-RU');
  document.title = time + ' | SpinHunter';

  const clock = document.getElementById('clock');
  if (clock) {
    clock.textContent = 'TIME: ' + time;
  }
}

setInterval(updateClock, 1000);
updateClock();


// 2. Удаление слов длиннее 7 букв
function removeLongWords() {
  const text = prompt('Введи текст для обработки:');
  if (text === null) return;

  const result = text
    .split(/\s+/)
    .filter(word => word.replace(/[.,!?;:]/g, '').length <= 7)
    .join(' ');

  alert('Результат:\n' + result);
}


// 3. Поиск самой частой буквы
function findFrequentLetter() {
  const text = prompt('Введи текст для поиска самой частой буквы:');
  if (text === null) return;

  const letters = text.toLowerCase().match(/[а-яёa-z]/g) || {};
  if (!letters.length) {
    alert('В тексте нет букв!');
    return;
  }

  const counts = {};
  letters.forEach(letter => {
    counts[letter] = (counts[letter] || 0) + 1;
  });

  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1]);

  alert('Самая частая буква: ' + sorted[0][0] +
        '\nКоличество: ' + sorted[0][1]);
}


// 4. Удаление цифр и открытие результата в новом окне
function removeDigits() {
  const text = prompt('Введи текст с цифрами:');
  if (text === null) return;

  const result = text.replace(/[0-9]/g, '');
  const newWindow = window.open('', '_blank');

  if (newWindow) {
    newWindow.document.write(
      '<html lang="ru"><head><meta charset="UTF-8">' +
      '<title>Результат</title></head><body>' +
      '<h1>Текст без цифр</h1><p></p></body></html>'
    );
    newWindow.document.querySelector('p').textContent = result;
    newWindow.document.close();
  } else {
    alert('Браузер заблокировал новое окно. Результат: ' + result);
  }
}


// 5. Смена цвета фона сайта
function changeBackground(color) {
  document.body.style.backgroundColor = color;
}


// 6. Показ текущей даты
function showDate() {
  alert('Сегодня: ' + new Date().toLocaleDateString('ru-RU'));
}
