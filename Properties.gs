
/**
 * {
  "access_token": "",
  "token_type": "bearer",
  "expires_in": "36000"
}
*/
function saveUserCredentails(userId, data) {
  try {
    // const scriptProperties = PropertiesService.getScriptProperties();
    // Logger.log(scriptProperties.getKeys())
    const userProperties = PropertiesService.getUserProperties();
    userProperties.setProperty(userId, JSON.stringify(data));
  } catch (err) {
    Logger.log('Failed with error %s', err.message);
  }
}

function getUserAcessToken(userId) {
  try {
    const userProperties = PropertiesService.getUserProperties();
    const propertyValue = userProperties.getProperty(userId);
    const data = JSON.parse(propertyValue)
    
    return data['access_token']
  } catch (err) {
    Logger.log('Failed with error %s', err.message);
  }
}