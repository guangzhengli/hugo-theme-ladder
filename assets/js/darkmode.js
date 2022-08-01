import * as params from '@params';

const mode = document.getElementById('mode');

if (mode !== null) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute(params.darkModeTheme, '');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.removeAttribute(params.darkModeTheme);
    }
  })

  mode.addEventListener('click', () => {
    document.documentElement.toggleAttribute(params.darkModeTheme);
    localStorage.setItem('theme', document.documentElement.hasAttribute(params.darkModeTheme) ? 'dark' : 'light');
    changeCommentsTheme();
  });

  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute(params.darkModeTheme, '');
  } else {
    document.documentElement.removeAttribute(params.darkModeTheme);
  }
}

function changeCommentsTheme () {
  if (document.querySelector('.utterances-frame')) {
    let theme = 'github-light';
    if (localStorage.getItem('theme') === 'dark') {
      theme = 'github-dark'
      if (params.darkModeTheme === 'icy-dark-mode') {
        theme = 'icy-dark'
      }
    }
    const message = {
      type: 'set-theme',
      theme: theme
    };
    const iframe = document.querySelector('.utterances-frame');
    iframe.contentWindow.postMessage(message, 'https://utteranc.es');
  }
}