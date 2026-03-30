chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));
  
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "TEXT_SELECTED") {
    chrome.storage.local.set({ lastWord: message.text });
    chrome.sidePanel.setOptions({
      tabId: sender.tab.id,
      path: 'sidepanel.html',
      enabled: true
    });
  }
});