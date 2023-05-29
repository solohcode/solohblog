// On page load or when changing themes, best to add inline in `head` to avoid FOUC

window.onload = () => {
  setInterval(() => {
    if ((('theme' in localStorage) && localStorage?.theme === 'dark') || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, 100)
}
