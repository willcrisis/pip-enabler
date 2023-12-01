function cleanupVideos() {
  const nodes = document.querySelectorAll("video");
  if (!nodes.length) {
    console.log("No videos found.");
    return;
  }
  nodes.forEach((node) => {
    node.removeAttribute("disablepictureinpicture");
    console.log("Video element cleaned up!");
  });
}

chrome.action.onClicked.addListener(async (tab) => {
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: cleanupVideos,
  });
});
