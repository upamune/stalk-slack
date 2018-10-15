browser.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion)
})

chrome.webRequest.onBeforeRequest.addListener(function(details) {
  const url = details.url;
  if  (url.indexOf("conversations.join") > -1) {
    console.log("Blocked Join request!")
    return { cancel: true }
  }
},  {
  urls: ["*://*.slack.com/api/*"],
  types: ["xmlhttprequest"]
},
[
  "blocking"
]);
