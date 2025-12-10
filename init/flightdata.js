const sampleListings=[
     {
    "airline": "SpiceJet",
    "flightNumber": "SP288",
    "departure": "Tokyo",
    "arrival": "Mumbai",
    "departureTime": "14:30",
    "arrivalTime": "17:30",
    "duration": "4h 15m",
    "price": 18605,
    "reviews": 3.6,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/hi/f/fa/SpiceJet_logo.png"
    }
  },
  {
    "airline": "SpiceJet",
    "flightNumber": "SP956",
    "departure": "Mumbai",
    "arrival": "Doha",
    "departureTime": "04:15",
    "arrivalTime": "02:15",
    "duration": "14h 45m",
    "price": 35030,
    "reviews": 4.7,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/hi/f/fa/SpiceJet_logo.png"
    }
  },
  {
    "airline": "Singapore Airlines",
    "flightNumber": "SI316",
    "departure": "Hyderabad",
    "arrival": "Bengaluru",
    "departureTime": "16:00",
    "arrivalTime": "16:00",
    "duration": "4h 30m",
    "price": 25825,
    "reviews": 4.5,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/525px-Singapore_Airlines_Logo_2.svg.png?20241130133239"
    }
  },
  {
    "airline": "Qatar Airways",
    "flightNumber": "QA867",
    "departure": "Dubai",
    "arrival": "Frankfurt",
    "departureTime": "04:45",
    "arrivalTime": "16:15",
    "duration": "7h 30m",
    "price": 43153,
    "reviews": 4.3,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/2560px-Qatar_Airways_Logo.svg.png"
    }
  },
  {
    "airline": "Air India",
    "flightNumber": "VI828",
    "departure": "Frankfurt",
    "arrival": "Hyderabad",
    "departureTime": "06:15",
    "arrivalTime": "17:15",
    "duration": "12h 15m",
    "price": 23287,
    "reviews": 4.5,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Air_India_2023.svg/2560px-Air_India_2023.svg.png"
    }
  },
  {
    "airline": "Qatar Airways",
    "flightNumber": "QA956",
    "departure": "Tokyo",
    "arrival": "Bengaluru",
    "departureTime": "07:30",
    "arrivalTime": "04:30",
    "duration": "13h 0m",
    "price": 34445,
    "reviews": 4.2,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/2560px-Qatar_Airways_Logo.svg.png"
    }
  },
  {
    "airline": "Air India",
    "flightNumber": "AI623",
    "departure": "New York",
    "arrival": "Chennai",
    "departureTime": "23:45",
    "arrivalTime": "18:45",
    "duration": "11h 15m",
    "price": 25314,
    "reviews": 4.8,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Air_India_2023.svg/2560px-Air_India_2023.svg.png"
    }
  },
  {
    "airline": "Akasa Air",
    "flightNumber": "AK390",
    "departure": "London",
    "arrival": "Paris",
    "departureTime": "03:30",
    "arrivalTime": "12:15",
    "duration": "14h 15m",
    "price": 15414,
    "reviews": 4.8,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/commons/2/22/Akasa_Air_logo_with_slogan.png"
    }
  },
  {
    "airline": "SpiceJet",
    "flightNumber": "SP956",
    "departure": "Singapore",
    "arrival": "Frankfurt",
    "departureTime": "10:00",
    "arrivalTime": "08:00",
    "duration": "13h 30m",
    "price": 12720,
    "reviews": 4.3,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/hi/f/fa/SpiceJet_logo.png"
    }
  },
  {
    "airline": "Qatar Airways",
    "flightNumber": "QA727",
    "departure": "New York",
    "arrival": "Chennai",
    "departureTime": "05:30",
    "arrivalTime": "11:30",
    "duration": "7h 15m",
    "price": 20359,
    "reviews": 4.3,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/2560px-Qatar_Airways_Logo.svg.png"
    }
  },
  {
    "airline": "Akasa Air",
    "flightNumber": "AK773",
    "departure": "London",
    "arrival": "Frankfurt",
    "departureTime": "23:30",
    "arrivalTime": "08:45",
    "duration": "9h 0m",
    "price": 33628,
    "reviews": 4.0,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/commons/2/22/Akasa_Air_logo_with_slogan.png"
    }
  },
  {
    "airline": "Singapore Airlines",
    "flightNumber": "SI525",
    "departure": "Mumbai",
    "arrival": "Delhi",
    "departureTime": "11:00",
    "arrivalTime": "14:15",
    "duration": "5h 45m",
    "price": 19727,
    "reviews": 4.5,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/525px-Singapore_Airlines_Logo_2.svg.png?20241130133239"
    }
  },
  {
    "airline": "Lufthansa",
    "flightNumber": "LU592",
    "departure": "Bengaluru",
    "arrival": "Mumbai",
    "departureTime": "05:30",
    "arrivalTime": "17:45",
    "duration": "1h 15m",
    "price": 42126,
    "reviews": 4.4,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lufthansa_Logo_2018.svg/2560px-Lufthansa_Logo_2018.svg.png"
    }
  },
  {
    "airline": "Emirates",
    "flightNumber": "EM587",
    "departure": "Singapore",
    "arrival": "Frankfurt",
    "departureTime": "09:00",
    "arrivalTime": "06:00",
    "duration": "12h 30m",
    "price": 32243,
    "reviews": 4.8,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg"
    }
  },
  {
    "airline": "IndiGo",
    "flightNumber": "IN498",
    "departure": "Hyderabad",
    "arrival": "Bengaluru",
    "departureTime": "16:30",
    "arrivalTime": "14:00",
    "duration": "14h 15m",
    "price": 7820,
    "reviews": 3.9,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IndiGo.svg/2560px-IndiGo.svg.png"
    }
  },
  {
    "airline": "Singapore Airlines",
    "flightNumber": "SI521",
    "departure": "Dubai",
    "arrival": "Delhi",
    "departureTime": "23:45",
    "arrivalTime": "14:45",
    "duration": "8h 45m",
    "price": 31927,
    "reviews": 4.4,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/525px-Singapore_Airlines_Logo_2.svg.png?20241130133239"
    }
  },
  {
    "airline": "Air India",
    "flightNumber": "AI588",
    "departure": "Tokyo",
    "arrival": "Frankfurt",
    "departureTime": "11:30",
    "arrivalTime": "06:00",
    "duration": "8h 30m",
    "price": 8153,
    "reviews": 3.7,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Air_India_2023.svg/2560px-Air_India_2023.svg.png"
    }
  },
  {
    "airline": "IndiGo",
    "flightNumber": "IN770",
    "departure": "New York",
    "arrival": "Paris",
    "departureTime": "15:00",
    "arrivalTime": "02:45",
    "duration": "12h 45m",
    "price": 28634,
    "reviews": 4.3,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IndiGo.svg/2560px-IndiGo.svg.png"
    }
  },
  {
    "airline": "Qatar Airways",
    "flightNumber": "QA113",
    "departure": "Mumbai",
    "arrival": "Doha",
    "departureTime": "09:15",
    "arrivalTime": "21:00",
    "duration": "2h 0m",
    "price": 14041,
    "reviews": 3.5,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/2560px-Qatar_Airways_Logo.svg.png"
    }
  },
  {
    "airline": "Akasa Air",
    "flightNumber": "AK883",
    "departure": "Paris",
    "arrival": "Dubai",
    "departureTime": "07:30",
    "arrivalTime": "16:00",
    "duration": "1h 45m",
    "price": 39263,
    "reviews": 3.7,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/commons/2/22/Akasa_Air_logo_with_slogan.png"
    }
  },
  {
    "airline": "Qatar Airways",
    "flightNumber": "QA577",
    "departure": "Chennai",
    "arrival": "Doha",
    "departureTime": "09:45",
    "arrivalTime": "15:45",
    "duration": "13h 30m",
    "price": 36640,
    "reviews": 4.5,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/2560px-Qatar_Airways_Logo.svg.png"
    }
  },
  {
    "airline": "Qatar Airways",
    "flightNumber": "QA529",
    "departure": "Paris",
    "arrival": "Tokyo",
    "departureTime": "00:30",
    "arrivalTime": "06:15",
    "duration": "9h 0m",
    "price": 18373,
    "reviews": 4.1,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/2560px-Qatar_Airways_Logo.svg.png"
    }
  },
  {
    "airline": "SpiceJet",
    "flightNumber": "SP998",
    "departure": "New York",
    "arrival": "Mumbai",
    "departureTime": "05:30",
    "arrivalTime": "19:45",
    "duration": "13h 15m",
    "price": 32076,
    "reviews": 4.8,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/hi/f/fa/SpiceJet_logo.png"
    }
  },
  {
    "airline": "Singapore Airlines",
    "flightNumber": "SI922",
    "departure": "Mumbai",
    "arrival": "Tokyo",
    "departureTime": "14:30",
    "arrivalTime": "19:45",
    "duration": "11h 45m",
    "price": 31230,
    "reviews": 4.8,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/525px-Singapore_Airlines_Logo_2.svg.png?20241130133239"
    }
  },
  {
    "airline": "Air India",
    "flightNumber": "AI705",
    "departure": "Tokyo",
    "arrival": "Dubai",
    "departureTime": "10:30",
    "arrivalTime": "08:15",
    "duration": "11h 30m",
    "price": 40053,
    "reviews": 3.9,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Air_India_2023.svg/2560px-Air_India_2023.svg.png"
    }
  },
  {
    "airline": "Air India",
    "flightNumber": "AI112",
    "departure": "Frankfurt",
    "arrival": "Bengaluru",
    "departureTime": "21:15",
    "arrivalTime": "11:45",
    "duration": "2h 0m",
    "price": 19845,
    "reviews": 4.6,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Air_India_2023.svg/2560px-Air_India_2023.svg.png"
    }
  },
  {
    "airline": "IndiGo",
    "flightNumber": "IN511",
    "departure": "Mumbai",
    "arrival": "Bengaluru",
    "departureTime": "13:45",
    "arrivalTime": "01:15",
    "duration": "5h 30m",
    "price": 40808,
    "reviews": 4.8,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IndiGo.svg/2560px-IndiGo.svg.png"
    }
  },
  {
    "airline": "Air India",
    "flightNumber": "AI873",
    "departure": "Singapore",
    "arrival": "Bengaluru",
    "departureTime": "21:00",
    "arrivalTime": "20:15",
    "duration": "12h 0m",
    "price": 27435,
    "reviews": 4.4,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Air_India_2023.svg/2560px-Air_India_2023.svg.png"
    }
  },
  {
    "airline": "Lufthansa",
    "flightNumber": "LU476",
    "departure": "Doha",
    "arrival": "Chennai",
    "departureTime": "03:15",
    "arrivalTime": "04:00",
    "duration": "1h 15m",
    "price": 20246,
    "reviews": 3.7,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lufthansa_Logo_2018.svg/2560px-Lufthansa_Logo_2018.svg.png"
    }
  },
  {
    "airline": "Lufthansa",
    "flightNumber": "LU589",
    "departure": "Mumbai",
    "arrival": "Paris",
    "departureTime": "10:00",
    "arrivalTime": "06:30",
    "duration": "6h 15m",
    "price": 6514,
    "reviews": 4.5,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lufthansa_Logo_2018.svg/2560px-Lufthansa_Logo_2018.svg.png"
    }
  },
  {
    "airline": "Emirates",
    "flightNumber": "EM444",
    "departure": "Bengaluru",
    "arrival": "London",
    "departureTime": "18:45",
    "arrivalTime": "00:30",
    "duration": "6h 15m",
    "price": 9258,
    "reviews": 4.5,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg"
    }
  },
  {
    "airline": "Akasa Air",
    "flightNumber": "AK490",
    "departure": "London",
    "arrival": "Doha",
    "departureTime": "15:15",
    "arrivalTime": "08:45",
    "duration": "5h 45m",
    "price": 28686,
    "reviews": 3.8,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/commons/2/22/Akasa_Air_logo_with_slogan.png"
    }
  },
  {
    "airline": "Qatar Airways",
    "flightNumber": "QA405",
    "departure": "Doha",
    "arrival": "Delhi",
    "departureTime": "01:15",
    "arrivalTime": "02:00",
    "duration": "8h 45m",
    "price": 16945,
    "reviews": 4.4,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/2560px-Qatar_Airways_Logo.svg.png"
    }
  },
  {
    "airline": "Emirates",
    "flightNumber": "EM735",
    "departure": "London",
    "arrival": "Singapore",
    "departureTime": "01:15",
    "arrivalTime": "14:15",
    "duration": "9h 0m",
    "price": 11882,
    "reviews": 4.6,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg"
    }
  },
  {
    "airline": "SpiceJet",
    "flightNumber": "SP625",
    "departure": "Delhi",
    "arrival": "Bengaluru",
    "departureTime": "04:15",
    "arrivalTime": "23:30",
    "duration": "11h 0m",
    "price": 35228,
    "reviews": 4.3,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/hi/f/fa/SpiceJet_logo.png"
    }
  },
  {
    "airline": "Singapore Airlines",
    "flightNumber": "SI208",
    "departure": "Doha",
    "arrival": "Bengaluru",
    "departureTime": "13:30",
    "arrivalTime": "03:45",
    "duration": "4h 45m",
    "price": 42034,
    "reviews": 4.4,
    "logo": {
      "filename": "flightlogo",
      "url": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/525px-Singapore_Airlines_Logo_2.svg.png?20241130133239"
    }
  },
]
module.exports={data:sampleListings};
