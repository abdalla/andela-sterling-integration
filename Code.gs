function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Sterling Integration')
    .addItem('Get infos', 'greet')
    .addToUi();
}

function onChange(e) {
  for (i in e)
    Logger.log(i);
}

function gretting() {
  // pick up the search term from the Google Sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  let selectedRow = sheet.getCurrentCell().getRow()
  let name = sheet.getRange(selectedRow, 1).getValue();

  let greet = `Hello ${name}`


  // sheet.getRange(selectedRow,12).setValue([greet]);
  // sheet.getRange(selectedRow,13).setValue([greet]);
  // sheet.getRange(selectedRow,14).setValue([greet]);

  return greet
}

function greet() {

  // pick up the search term from the Google Sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  let selectedRow = sheet.getCurrentCell().getRow()
  let name = sheet.getRange(selectedRow, 1).getValue();

  console.log(name)
  console.log(selectedRow)

  // clear any previous content
  sheet.getRange(selectedRow, 11).clearContent();

  let greet = gretting(name)

  // set value
  sheet.getRange(selectedRow, 11).setValue([greet]);
  sheet.getRange(selectedRow, 12).setValue([greet]);
  sheet.getRange(selectedRow, 13).setValue([greet]);
  sheet.getRange(selectedRow, 14).setValue([greet]);

  // formatting
  sheet.getRange(selectedRow, 11).setVerticalAlignment("middle");
  sheet.getRange(selectedRow, 11).setHorizontalAlignment("center");
  sheet.getRange(selectedRow, 11).setWrap(true);
}

function givenEmailFillColumns(columnWithEmail) {
  email = 'fake@email.com' // TODO change it by column data
  candidate = findCandidateByEmail('fake@email.com')
  screeningIds = candidate['screeningIds']
  screeningDetails = screeningIds.map(id => findScreeningById(id))

  map = {}

  screeningDetails.forEach(v => {
    id = v['candidateId']
    reportItems = []
    v['reportItems'].forEach(i => {
      type = i['type']

      switch (type) {
        case 'SSN Trace':
          reportItems.push({ type: 'SSN_TRACE', value: i })
          break
        default:
          break
      }
    })

    map = {
      ...map,
      [id]: reportItems
    }
  })

  Logger.log(JSON.stringify(map))
  //TODO fill columns by type
}
