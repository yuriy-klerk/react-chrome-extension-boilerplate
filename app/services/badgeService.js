
export default class Badge  {

    setChrome(value) {
        chrome.browserAction.setBadgeText({ text: typeof value == 'string' ? value : '' });
    }
}
