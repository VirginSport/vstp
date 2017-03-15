
let rankings = [];
for (let i = 0; i < 10; i++) {
  rankings.push({
    "rank": i + 1,
    "participantId": 1000 + i,
    "participantFirstName": "Jessica",
    "participantLastName": "Frey",
    "participantBibNumber": 47000 + (10 * i),
    "participantClub": "London Track Club",
    "participantTeam": "Jessie's Girls",
    "participantCategory": "FSEN",
    "participantBirthDate": "number (Unix timestamp in seconds)",
    "participantGender": "female",
    "chipTime": "1:42:55",
    "gunTime": "1:45:20",
    "disqualified": false,
    "dns": false,
    "dnf": false
  });
}

let stages = [
  {
    "id": 1,
    "name": "Start",
    "distance": 0
  },
  {
    "id": 2,
    "name": "5K",
    "distance": 5000
  },
  {
    "id": 3,
    "name": "10K",
    "distance": 10000
  },
  {
    "id": 4,
    "name": "15K",
    "distance": 15000
  },
  {
    "id": 5,
    "name": "21K",
    "distance": 21098
  }
];

let result = {
  "participantId": "OXFORD16-1",
  "eventId": "OXFORD16",
  "raceId": "OXFORD16-OXFORD16 - HM",
  "bibNumber": "UB 1",
  "firstName": "Jessica",
  "lastName": "Frey",
  "club": "London Track Club",
  "team": "Jessie Girls",
  "category": "FSEN",
  "birthDate": 580262400,
  "gender": "female",
  "country": "UK",
  "city": "bristol",
  "chipTime": "02:17:04",
  "gunTime": "04:17:08",
  "generalChipTime": 5812,
  "generalGunTime": 4409,
  "generalTotal": 12300,
  "genderChipTime": 3644,
  "genderGunTime": 3095,
  "genderTotal": 6315,
  "categoryChipTime": 2123,
  "categoryGunTime": 1835,
  "categoryTotal": 3013,
  "teamChipTime": 214,
  "teamGunTime": 120,
  "teamTotal": 300,
  "clubChipTime": 103,
  "clubGunTime": 102,
  "clubTotal": 200,
  "disqualified": false,
  "dns": false,
  "dnf": false,
  "passings": [
    {
      "uuid": "84ed8187-b244-11e6-8d0f-080027596944",
      "stageId": 1,
      "chipTime": 1476009270,
      "millisecs": 34470203
    },
    {
      "uuid": "69f128e5-b246-11e6-8d0f-080027596944",
      "stageId": 2,
      "chipTime": 1476011352,
      "millisecs": 36552804
    },
    {
      "uuid": "3b011224-b247-11e6-8d0f-080027596944",
      "stageId": 3,
      "chipTime": 1476013268,
      "millisecs": 38468447
    },
    {
      "uuid": "f2a487b5-b247-11e6-8d0f-080027596944",
      "stageId": 4,
      "chipTime": 1476015111,
      "millisecs": 40311089
    },
    {
      "uuid": "d3b92bb4-b248-11e6-8d0f-080027596944",
      "stageId": 5,
      "chipTime": 1476017494,
      "millisecs": 42694911
    }
  ]
};

export function getStages() {
  return stages;
}

export function getRankings() {
  return rankings;
}

export function getResult() {
  return result;
}
