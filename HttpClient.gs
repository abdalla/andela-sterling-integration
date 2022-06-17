function getScreen(name) {
  // Call the iTunes API
  var response = UrlFetchApp.fetch("https://itunes.apple.com/search?term=coldplay");

  // Parse the JSON reply
  var json = response.getContentText();
  var data = JSON.parse(json);

  Logger.log(data);
  Logger.log(data["results"]);
  Logger.log(data["results"][0]);
  Logger.log(data["results"][0]["artistName"]);
  Logger.log(data["results"][0]["collectionName"]);
  Logger.log(data["results"][0]["artworkUrl60"]);
  Logger.log(data["results"][0]["previewUrl"]);

}

// https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#advanced-parameters

/**
 * curl -X POST \
    -H "Authorization: Basic <basic auth token>" \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'grant_type=client_credentials' \
    https://api.us.int.sterlingcheck.app/v2/oauth
 */
function login() {
  var url = 'https://api.us.int.sterlingcheck.app/v2/oauth'
  var blob = Utilities.newBlob("client_id:client_secret")
  var grantBase64 = Utilities.base64Encode(blob.getBytes());
  var data = {
    'grant_type': grantBase64
  }
  var basicAuthToken = '<basic auth token>'
  var options = {
    'headers': {
      'Authorization': `Basic ${basicAuthToken}`
      //'Content-Type': 'application/x-www-form-urlencoded'
    },
    'method': 'post',
    'contentType': 'application/x-www-form-urlencoded',
    // Convert the JavaScript object to a JSON string.
    'payload': JSON.stringify(data)
  };
  Logger.log(options)
  // UrlFetchApp.fetch(url, options);
}

function exampleBase64() {
  // Instantiates a blob here for clarity
  var blob = Utilities.newBlob("A string here");

  // Writes 'QSBzdHJpbmcgaGVyZQ==' to the log.
  var encoded = Utilities.base64Encode(blob.getBytes());
  Logger.log(encoded);
}