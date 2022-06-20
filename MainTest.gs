function mainTest() {
  login()

  Logger.log(getUserAcessToken('bill'))

  candidate = findCandidateByEmail('fake@email.com')
  screeningIds = candidate['screeningIds']

  screeningDetails = screeningIds.map(id => findScreeningById(id))

  screeningDetails.forEach((v) => Logger.log(v["reportItems"]))
}
