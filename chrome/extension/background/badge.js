
const fetchPrice24H = async () => {
  let response = await fetch(`https://blockchain.info/q/24hrprice`);
  let data = await response.text();
  return {
    price24H: data
  };

}

fetchPrice24H().then(data => {
  chrome.browserAction.setBadgeText( {text: data.price24H } );
});

setInterval(() => {
  fetchPrice24H().then(data => {
    chrome.browserAction.setBadgeText( {text: data.price24H } );
  });
}, 5000);
