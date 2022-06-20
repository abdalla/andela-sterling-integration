function getCandidateByEmailMock(email) {
  return {
    "id": "3e4f84e3-9078-4451-a8b8-5897f4f4f4e3",
    "clientReferenceId": "999124441",
    "email": "john.doe.new@example.com",
    "givenName": "John",
    "familyName": "Smith",
    "confirmedNoMiddleName": true,
    "dob": "XXXX-01-20",
    "ssn": "XXXXX4321",
    "phone": "+14041231234",
    "address": {
      "addressLine": "123 Main Street",
      "municipality": "Orlando",
      "regionCode": "US-FL",
      "postalCode": "12345",
      "countryCode": "US"
    },
    "additionalAddresses": [
      {
        "addressLine": "123 PEACHTREE PLACE",
        "municipality": "ATLANTA",
        "regionCode": "US-GA",
        "postalCode": "30005",
        "countryCode": "US",
        "validFrom": "2003-08-01",
        "validTo": "2016-07-08"
      },
      {
        "addressLine": "221B Baker Street",
        "municipality": "London",
        "regionCode": "GB-LND",
        "postalCode": "NW1 6XE",
        "countryCode": "GB",
        "validFrom": "2016-07-08",
        "validTo": "2017-10-27"
      }
    ],
    "aliases": [
      {
        "givenName": "Robert",
        "familyName": "Saur",
        "middleName": "William",
        "confirmedNoMiddleName": false
      },
      {
        "givenName": "Simon",
        "familyName": "Duck",
        "confirmedNoMiddleName": true
      }
    ],
    "educationHistory": [
      {
        "schoolName": "UW",
        "schoolType": "University",
        "degree": {
          "major": "Software Systems",
          "degreeName": "B.S.",
          "degreeType": "Bachelors",
          "graduationDate": "2010-06-01",
          "degreeCompleted": true,
          "comments": "something"
        },
        "schoolIDNumber": "UW12345",
        "address": {
          "addressLine": "University District",
          "municipality": "SEATTLE",
          "regionCode": "US-WA",
          "postalCode": "98001",
          "countryCode": "US",
          "validFrom": "2008-08-01"
        },
        "aliasGivenName": "aliasFirstName1",
        "aliasFamilyName": "aliasLastName1",
        "department": "Computer Science",
        "startDate": "2008-08-01",
        "endDate": "2010-05-01",
        "email": "uwsomeemail@uwsomeemail.com",
        "phone": "14041231234",
        "fax": "+1234567890",
        "notes": "nothing",
        "type": "default"
      }
    ],
    "employmentHistory": [
      {
        "employerName": "SomeEmployer",
        "currentEmployer": true,
        "jobTitle": "SomeJobTitle",
        "startDate": "2008-10-02",
        "endDate": "2012-10-25",
        "employmentType": "FullTime",
        "department": "IT",
        "address": {
          "addressLine": "ABC company",
          "municipality": "SEATTLE",
          "regionCode": "US-WA",
          "postalCode": "98001",
          "countryCode": "US",
          "validFrom": "2008-08-01"
        },
        "permissionToContact": true,
        "reasonForLeaving": "nothing",
        "salary": {
          "currency": "12345678",
          "startingSalary": "140,000",
          "endingSalary": "100,000"
        },
        "verification": {
          "supervisorGivenName": "supervisorFirstName",
          "supervisorFamilyName": "supervisorLastName",
          "supervisorMiddleName": "supervisorMiddleName",
          "address": {
            "addressLine": "ABC company",
            "municipality": "SEATTLE",
            "regionCode": "US-WA",
            "postalCode": "98001",
            "countryCode": "US",
            "validFrom": "2008-08-01"
          },
          "email": "abcsomeemail@abcsomeemail.com",
          "phone": "14041231234",
          "fax": "+1234567890"
        },
        "verifyEmployer": true,
        "notes": "nothing",
        "type": "default"
      }
    ],
    "licenses": [
      {
        "issuingAgency": {
          "name": "Some Institute",
          "address": {
            "addressLine": "ABC company",
            "municipality": "SEATTLE",
            "regionCode": "US-WA",
            "postalCode": "98001",
            "countryCode": "US",
            "validFrom": "2008-08-01"
          }
        },
        "number": "S12345",
        "name": "Nursing Certification",
        "startDate": "2016-01-01",
        "status": "active",
        "notes": "some notes"
      }
    ],
    "screeningIds": [
      "dc366814-90bf-4e76-a881-3430e45a8546",
      "da7c2795-a3d4-45ce-954c-deb26cfbca3d"
    ],
    "driversLicense": {
      "type": "personal",
      "licenseNumber": "S1234567",
      "issuingAgency": "CA"
    }
  }
}

function getScreeningByIdMock(id) {
  return {
    "id": "1801020638",
    "packageId": "92979",
    "trustId": "ac2eb527-a135-4290-a702-7517762d3acb",
    "accountId": "44771",
    "candidateId": "3e4f84e3-9078-4451-a8b8-5897f4f4f4e3",
    "status": "Pending",
    "result": "Pending",
    "jobPosition": "Basic Package",
    "links": {
      "admin": {
        "web": "https://sterlingcheck.app/interactive-summary/#/order/2FeG8v4MjoNYyD3AFToSd5c4YQ3PpT0jtBw7SgyHijY%3d"
      }
    },
    "callback": {
      "uri": "https://my-company.com/screenings-callback"
    },
    "reportItems": [
      {
        "id": "14499694",
        "type": "SSN Trace",
        "status": "pending",
        "result": null,
        "updatedAt": "2021-12-02T19:19:00Z",
        "estimatedCompletionTime": "2021-12-02T19:19:00Z"
      },
      {
        "id": "14499695",
        "type": "County Criminal Record",
        "status": "pending",
        "result": null,
        "updatedAt": "2021-12-06T19:19:00Z",
        "estimatedCompletionTime": "2021-12-06T19:19:00Z"
      },
      {
        "id": "14499696",
        "type": "Drivers Record",
        "status": "pending",
        "result": null,
        "updatedAt": "2021-12-06T19:19:00Z",
        "estimatedCompletionTime": "2021-12-06T19:19:00Z",
        "dlStateMismatch": true
      },
      {
        "id": "14499697",
        "type": "DOJ Sex Offender Search",
        "status": "pending",
        "result": null,
        "updatedAt": "2021-12-02T19:19:00Z",
        "estimatedCompletionTime": "2021-12-02T19:19:00Z"
      }
    ],
    "submittedAt": "2021-12-01T18:19:08Z",
    "mailReport": true,
    "updatedAt": "2021-12-06T19:19:00Z",
    "estimatedCompletionTime": "2021-12-06T19:19:00Z"
  }
}