let theme = localStorage.getItem('theme');
if (theme == null) {
  setTheme('light');
} else {
  setTheme(theme);
}

let themeDot = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDot.length > i; i++) {
  themeDot[i].addEventListener('click', function () {
    let mode = this.dataset.mode;
    console.log('option clicked:', mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == 'light-mode') {
    document.getElementById('theme-style').href = 'style.css';
  }

  if (mode == 'black-mode') {
    document.getElementById('theme-style').href = 'black.css';
  }

  if (mode == 'maroon-mode') {
    document.getElementById('theme-style').href = 'maroon.css';
  }

  if (mode == 'green-mode') {
    document.getElementById('theme-style').href = 'green.css';
  }

  localStorage.setItem('theme', mode);
}
