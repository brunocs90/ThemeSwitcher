function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    //set to tag html the new theme
    document.documentElement.className = themeName;
}

function loadTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        checkbox.checked = true;
    } else {
        setTheme('theme-light');
        checkbox.checked = false;
    }
}

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
});

loadTheme();
