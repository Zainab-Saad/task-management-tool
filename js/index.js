function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return 'dark';
  }

  return 'light';
}

const localStorageTheme = localStorage.getItem('theme');
const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)');
const systemSettingLight = window.matchMedia('(prefers-color-scheme: light)');

let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

// target the button using the data attribute we added earlier
const button = document.querySelector('[data-theme-toggle]');

button.addEventListener('click', () => {
  const newTheme = currentThemeSetting === 'dark' ? 'light' : 'dark';

  const themeIcon = document.querySelector('.theme-icon');

  if (newTheme === 'light') {
    console.log('heyyyyyyyyyyyy');
    themeIcon.className = 'fa-solid fa-toggle-off fa-2x theme-icon';
  } else if (newTheme === 'dark') {
    console.log('heheh');
    themeIcon.className = 'fa-solid fa-toggle-on fa-2x theme-icon';
  }

  // update theme attribute on HTML to switch theme in CSS
  document.querySelector('html').setAttribute('data-theme', newTheme);

  // update in local storage
  localStorage.setItem('theme', newTheme);

  // update the currentThemeSetting in memory
  currentThemeSetting = newTheme;
});
