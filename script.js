
// 1. Часы в заголовке вкладки
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
  const text = prompt('Введи текст:');
  if (text === null) return;

  const letters = text.toLowerCase().match(/[а-яёa-z]/g) || [];

  if (letters.length === 0) {
    alert('В тексте нет букв!');
    return;
  }

  const counts = {};

  letters.forEach(letter => {
    counts[letter] = (counts[letter] || 0) + 1;
  });

  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1]);

  alert(
    'Самая частая буква: ' + sorted[0][0] +
    '\nКоличество: ' + sorted[0][1]
  );
}


// 4. Удаление цифр и открытие результата в новом окне
function removeDigits() {
  const text = prompt('Введи текст с цифрами:');
  if (text === null) return;

  const result = text.replace(/[0-9]/g, '');
  const newWindow = window.open('', '_blank');

  if (newWindow) {
    const heading = newWindow.document.createElement('h2');
    heading.textContent = 'Текст без цифр';

    const paragraph = newWindow.document.createElement('p');
    paragraph.textContent = result;

    newWindow.document.body.append(heading, paragraph);
  } else {
    alert('Новое окно заблокировано браузером. Результат: ' + result);
  }
}


// 5. Смена цвета фона
function changeBackground(color) {
  document.body.style.backgroundColor = color;
}


// 6. Показ текущей даты
function showDate() {
  alert('Сегодня: ' + new Date().toLocaleDateString('ru-RU'));
}


// 7. Автоматическая прокрутка через 5 секунд
window.addEventListener('load', function() {
  setTimeout(function() {
    const target = document.getElementById('interactive');

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, 5000);
});
