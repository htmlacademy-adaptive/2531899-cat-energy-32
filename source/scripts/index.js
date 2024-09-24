/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-header');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-header--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-header--closed')) {
    navMain.classList.remove('main-header--closed');
    navMain.classList.add('main-header--opened');
  } else {
    navMain.classList.add('main-header--closed');
    navMain.classList.remove('main-header--opened');
  }
});
