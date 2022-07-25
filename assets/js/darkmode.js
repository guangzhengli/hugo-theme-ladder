const mode = document.getElementById('mode');

if (mode !== null) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {

    if (event.matches) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-dark-mode', '');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.removeAttribute('data-dark-mode');
    }
  })

  mode.addEventListener('click', () => {
    document.documentElement.toggleAttribute('data-dark-mode');
    localStorage.setItem('theme', document.documentElement.hasAttribute('data-dark-mode') ? 'dark' : 'light');
    changeCommentsTheme();
  });

  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-dark-mode', '');
  } else {
    document.documentElement.removeAttribute('data-dark-mode');
  }
}

function changeCommentsTheme () {
  if (document.querySelector('.utterances-frame')) {
    const theme = localStorage.getItem('theme') === 'dark' ? 'github-dark' : 'github-light'
    const message = {
      type: 'set-theme',
      theme: theme
    };
    const iframe = document.querySelector('.utterances-frame');
    iframe.contentWindow.postMessage(message, 'https://utteranc.es');
  }
}