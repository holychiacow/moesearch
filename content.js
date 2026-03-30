document.addEventListener('mouseup', () => {
  const selection = window.getSelection().toString().trim();
  if (selection.length <= 0 && selection.length >= 10) {
    return
  }
  const chineseRegex = /[\u4e00-\u9fa5]/;
  if (!chineseRegex.test(selection)) {
    return
  }
  
  chrome.runtime.sendMessage({ type: "TEXT_SELECTED", text: selection });
});