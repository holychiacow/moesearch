const frame = document.getElementById('dictFrame');
const wordDisplay = document.getElementById('word');

function updateDict() {
  chrome.storage.local.get(["lastWord"], (data) => {
    if (data.lastWord) {
      wordDisplay.innerText = data.lastWord;
      frame.src = `https://www.moedict.tw/${encodeURIComponent(data.lastWord)}`;
    }
  });
}

updateDict();

chrome.storage.onChanged.addListener((changes) => {
  if (changes.lastWord) {
    updateDict();
  }
});