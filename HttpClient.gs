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
const BASE_URL = 'https://api.us.int.sterlingcheck.app/v2'
/**
 * curl -X POST \
    -H "Authorization: Basic <basic auth token>" \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'grant_type=client_credentials' \
    https://api.us.int.sterlingcheck.app/v2/oauth
 */
function login() {
  Logger.log("Starting login...")
  const url = `${BASE_URL}/oauth`
  const blob = Utilities.newBlob("client_id:client_secret")
  const grantBase64 = Utilities.base64Encode(blob.getBytes());
  const data = {
    'grant_type': grantBase64
  }
  const basicAuthToken = '<basic auth token>'
  const options = {
    'headers': {
      'Authorization': `Basic ${basicAuthToken}`
      //'Content-Type': 'application/x-www-form-urlencoded'
    },
    'method': 'post',
    'contentType': 'application/x-www-form-urlencoded',
    // Convert the JavaScript object to a JSON string.
    'payload': JSON.stringify(data)
  };
  // const response = UrlFetchApp.fetch(url, options);
  // saveUserCredentails('bill', response)
  saveUserCredentails('bill', {'access_token': '1234'})
}


function doLoginIfNecessary() {
  token = getUserAcessToken('bill')
  if (token == null) {
    login()
    return
  }

  if(isTokenExpired(token)) {
    login()
  }
}

/**
 * curl --location --request GET 'https://api.us.int.sterlingcheck.app/v2/packages' \
    --header 'Authorization: Bearer {{bearer_token}}'
 */
function getPackages() {
  const url = `${BASE_URL}/packages`
  const token = getUserAcessToken('bill')
  const options = {
    'headers': {
      ...buildAuthorizationHeader(token)
      //'Content-Type': 'application/json'
    },
  }
  Logger.log(options)
  // const response = UrlFetchApp.fetch(url, options);
}

/**
 * curl --location --request POST 'https://api.us.int.sterlingcheck.app/v2/candidates' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{bearer_token}}' \
--data-raw '{...}'
 */
function createCandidate() {
  const url = `${BASE_URL}/candidates`
  const token = getUserAcessToken('bill')
  const data = {} // we need put the required fields returned in getPackages()
  const options = {
    'headers': {
      ...buildAuthorizationHeader(token)
      //'Content-Type': 'application/json'
    },
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(data)
  }
  Logger.log(options)
  // const response = UrlFetchApp.fetch(url, options);
}

function buildAuthorizationHeader(token) {
  return {
    'Authorization': `Bearer ${token}`
  }
}

/**
 * Find candidate by email
 */
function findCandidateByEmail(email) {
  doLoginIfNecessary()
  const url = `${BASE_URL}/candidates?email=${email}`
  const token = getUserAcessToken('bill')
  const options = {
    'headers': {
      ...buildAuthorizationHeader(token)
      //'Content-Type': 'application/json'
    },
    'method': 'get',
  }
  // Logger.log(options)
  // const response = UrlFetchApp.fetch(url, options);
  return getCandidateByEmailMock(email)
}

/**
 * Find screening by id
 */
function findScreeningById(id) {
  doLoginIfNecessary()
  const url = `${BASE_URL}/screenings/${id}`
  const token = getUserAcessToken('bill')
  const options = {
    'headers': {
      ...buildAuthorizationHeader(token)
      //'Content-Type': 'application/json'
    },
    'method': 'get',
  }
  // Logger.log(options)
  // const response = UrlFetchApp.fetch(url, options);
  return getScreeningByIdMock(id)
}

