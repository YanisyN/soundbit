function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    const activeScreen = document.getElementById(screenId);
    if (activeScreen) {
        activeScreen.classList.add('active');
    }
}

function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    if (tabName === 'rub') {
        document.querySelectorAll('.tab')[0].classList.add('active');
        document.getElementById('tab-rub').classList.add('active');
    } else if (tabName === 'charms') {
        document.querySelectorAll('.tab')[1].classList.add('active');
        document.getElementById('tab-charms').classList.add('active');
    }
}
