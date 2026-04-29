let active = true;

chrome.storage.sync.get("state", (res) => {
    if (res.state !== undefined) active = res.state;
});

chrome.storage.onChanged.addListener((changes) => {
    if (changes.state) active = changes.state.newValue;
});

window.addEventListener("keydown", (e) => {
    if (!active) return;
    
    if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        e.stopPropagation();
    }
}, { capture: true, passive: false });