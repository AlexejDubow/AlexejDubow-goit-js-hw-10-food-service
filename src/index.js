import menuList from './menu.json';
import markupTemplate from './template.hbs';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const ref = {
  menu: document.querySelector('.js-menu'),
};

buildMenu(menuList);

const themeSwitch = document.querySelector('.js-switch-input');
const body = document.querySelector('body');
const bodyTheme = localStorage.getItem('theme');

if (bodyTheme === 'dark-theme') {
  themeSwitch.checked = true;
  addTheme(Theme.DARK);
} else {
  themeSwitch.checked = false;
  addTheme(Theme.LIGHT);
}

themeSwitch.addEventListener('change', () => {
  // themeSwitch.checked ? addDarkTheme() : addLightTheme();
  themeSwitch.checked ? addTheme(Theme.DARK) : addTheme(Theme.LIGHT);

});

function buildMenu(menu) {
  const markupMenu = menu.map(item => markupTemplate(item)).join('');
  ref.menu.insertAdjacentHTML('beforeend', markupMenu);
}
// function addLightTheme() {
//   body.classList = '';
//   body.classList.add(Theme.LIGHT);
//   localStorage.setItem('theme', Theme.LIGHT);
// }
// function addDarkTheme() {
//   body.classList = '';
//   body.classList.add(Theme.DARK);
//   localStorage.setItem('theme', Theme.DARK);
// }
function addTheme(colorTheme) {
  body.classList = '';
  body.classList.add(colorTheme);
  localStorage.setItem('theme', colorTheme);
}
