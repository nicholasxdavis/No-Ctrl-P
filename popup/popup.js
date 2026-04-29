document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('blocker');
    const status = document.getElementById('status');

    chrome.storage.sync.get(['state'], (res) => {
        const active = res.state !== false;
        input.checked = active;
        status.textContent = active ? 'On' : 'Off';
    });

    input.addEventListener('change', (e) => {
        const active = e.target.checked;
        chrome.storage.sync.set({ state: active });
        status.textContent = active ? 'On' : 'Off';
    });
});