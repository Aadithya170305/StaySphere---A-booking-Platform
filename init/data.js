const sampleListings = [
    {
      "title": "Backwater Houseboat Stay",
      "description": "Experience Kerala’s serene backwaters in a premium houseboat with traditional meals.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 2200,
      "location": "Alleppey",
      "country": "India",
      "reviews": 4.6
    },

    {
      "title": "Tea Estate Bungalow",
      "description": "Stay inside a lush tea estate with beautiful valley views and guided garden walks.",
      "image": {
        "filename": "listingimage",
        "url": "https://plus.unsplash.com/premium_photo-1697730314165-2cd71dc3a6a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 1700,
      "location": "Munnar",
      "country": "India",
      "reviews": 4.5
    },

    {
      "title": "Hilltop Cottage",
      "description": "A cozy cottage offering panoramic views of the Himalayas.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1575403071235-5dcd06cbf169?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 1300,
      "location": "Manali",
      "country": "India",
      "reviews": 4.2
    },

    {
      "title": "Luxury Palace Room",
      "description": "Stay like royalty in an authentic Rajasthani palace with heritage decor.",
      "image": {
        "filename": "listingimage",
        "url": "https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 3200,
      "location": "Udaipur",
      "country": "India",
      "reviews": 4.8
    },

    {
      "title": "Valley View Homestay",
      "description": "A peaceful homestay surrounded by coffee plantations and misty hills.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1560357647-62a43d9897bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29vcmd8ZW58MHx8MHx8fDA%3D"
      },
      "price": 900,
      "location": "Coorg",
      "country": "India",
      "reviews": 4.1
    },

    {
      "title": "Beachfront Shack",
      "description": "A simple beachside hut just steps away from the waves.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 700,
      "location": "Goa",
      "country": "India",
      "reviews": 3.9
    },

    {
      "title": "Desert Safari Camp",
      "description": "Live in luxury tents in the middle of the Thar desert with camel rides.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1613169620329-6785c004d900?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 1400,
      "location": "Jaisalmer",
      "country": "India",
      "reviews": 4.3
    },

    {
      "title": "Forest Eco Retreat",
      "description": "A peaceful eco-friendly retreat in the middle of dense forest.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1540925331495-a897bc754626?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0JTIwY2FtcHxlbnwwfHwwfHx8MA%3D%3D"
      },
      "price": 1100,
      "location": "Wayanad",
      "country": "India",
      "reviews": 4.4
    },

    {
      "title": "Lakeside Wooden Cottage",
      "description": "A perfect getaway with gorgeous lake views.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 1500,
      "location": "Nainital",
      "country": "India",
      "reviews": 4.2
    },

    {
      "title": "Island Beach Villa",
      "description": "Experience luxury in a beachfront cottage on India’s most beautiful islands.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 3000,
      "location": "Andaman Islands",
      "country": "India",
      "reviews": 4.9
    },

    {
      "title": "Mountain Heritage Lodge",
      "description": "Stay in a traditional Himalayan lodge with wooden interiors and firewood heating.",
      "image": {
        "filename": "listingimage",
        "url": "https://plus.unsplash.com/premium_photo-1676319876974-3c9759cb8c4a?q=80&w=739&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 1800,
      "location": "Shimla",
      "country": "India",
      "reviews": 4.0
    },

    {
      "title": "Backpacker Hostel",
      "description": "A budget-friendly hostel for young travelers and explorers.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1712510817140-917938f92e5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJpc2hpa2VzaHxlbnwwfHwwfHx8MA%3D%3D"
      },
      "price": 500,
      "location": "Rishikesh",
      "country": "India",
      "reviews": 4.3
    },

    {
      "title": "Ganga Riverside Cottage",
      "description": "A spiritual and peaceful stay near the holy river.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1624807136278-e2973be118ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJpc2hpa2VzaHxlbnwwfHwwfHx8MA%3D%3D"
      },
      "price": 1300,
      "location": "Haridwar",
      "country": "India",
      "reviews": 4.4
    },

    {
      "title": "Jungle Treehouse Stay",
      "description": "Live up in the trees in an adventurous wooden treehouse.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 1100,
      "location": "Jim Corbett",
      "country": "India",
      "reviews": 4.6
    },

    {
      "title": "River View Resort",
      "description": "Beautiful riverfront resort with bamboo huts and boating.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1623718649591-311775a30c43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D"
      },
      "price": 1600,
      "location": "Shillong",
      "country": "India",
      "reviews": 4.2
    },

    {
      "title": "Coral Reef Beach Cottage",
      "description": "Bright cottages located near colorful coral reefs.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 2400,
      "location": "Lakshadweep",
      "country": "India",
      "reviews": 4.7
    },

    {
      "title": "Luxury Lake Palace",
      "description": "Premium lakeside stay with royal architecture.",
      "image": {
        "filename": "listingimage",
        "url": "https://plus.unsplash.com/premium_photo-1722206861426-9f8eb27b7b3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHVkYWlwdXIlMjBsYWtlfGVufDB8fDB8fHww"
      },
      "price": 5000,
      "location": "Kashmir",
      "country": "India",
      "reviews": 4.8
    },

    {
      "title": "Mountain Cliff Resort",
      "description": "Cliffside resort with unbelievable valley views.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 2100,
      "location": "Mussoorie",
      "country": "India",
      "reviews": 4.6
    },

    {
      "title": "Pink City Heritage Stay",
      "description": "Royal haveli with authentic heritage decor.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1534406589251-8bd571e55d60?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 1900,
      "location": "Jaipur",
      "country": "India",
      "reviews": 4.3
    },

    {
      "title": "Snow Cabin Retreat",
      "description": "A peaceful snowy cabin surrounded by pine trees.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1753541042311-5bd74319a227?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 2000,
      "location": "Gulmarg",
      "country": "India",
      "reviews": 4.9
    },

    {
      "title": "Ancient Fort Stay",
      "description": "Stay inside an ancient fort turned luxury heritage hotel.",
      "image": {
        "filename": "listingimage",
        "url": "https://media.istockphoto.com/id/1769404614/photo/churches-of-old-goa.jpg?s=1024x1024&w=is&k=20&c=zGF4QEN09QDc29pH2Hsy5JBd9aDIIhZ0Len7E3DuQ0I="
      },
      "price": 3500,
      "location": "Jodhpur",
      "country": "India",
      "reviews": 4.5
    },

    {
      "title": "Lighthouse Seaside Room",
      "description": "Stay next to an actual lighthouse by the sea.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1522679056866-8dbbc8774a9d?q=80&w=1247&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 1200,
      "location": "Pondicherry",
      "country": "India",
      "reviews": 4.2
    },

    {
      "title": "Temple Town Guesthouse",
      "description": "A peaceful guesthouse near ancient heritage temples.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1741003412854-bd4b264c4af3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlydXBhdGklMjB0ZW1wbGV8ZW58MHx8MHx8fDA%3D"
      },
      "price": 800,
      "location": "Tirupati",
      "country": "India",
      "reviews": 4.0
    },

    {
      "title": "Himalayan Boutique Stay",
      "description": "Gorgeous mountain views with handcrafted interiors.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 1800,
      "location": "Gangtok",
      "country": "India",
      "reviews": 4.4
    },
    {
      "title": "Arctic Igloo Stay",
      "description": "Sleep under the Northern Lights in a cozy glass igloo.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1611582785023-91a3c0999d93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWdsb298ZW58MHx8MHx8fDA%3D"
      },
      "price": 4500,
      "location": "Rovaniemi",
      "country": "Finland",
      "reviews": 4.9
    },

    {
      "title": "Rainforest Lodge",
      "description": "A deep-jungle lodge surrounded by exotic wildlife.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 2100,
      "location": "Amazon Forest",
      "country": "Brazil",
      "reviews": 4.6
    },

    {
      "title": "Sahara Desert Camp",
      "description": "Luxurious Bedouin tents under the starry Sahara sky.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1677838929227-e0fc8a5885ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc2VydCUyMGNhbXB8ZW58MHx8MHx8fDA%3D"
      },
      "price": 1600,
      "location": "Merzouga",
      "country": "Morocco",
      "reviews": 4.7
    },

    {
      "title": "Alpine Ski Resort",
      "description": "Stay at a European alpine resort ideal for winter sports.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1519659675643-e5885721661f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpJTIwcmVzb3J0fGVufDB8fDB8fHww"
      },
      "price": 3000,
      "location": "Zermatt",
      "country": "Switzerland",
      "reviews": 4.9
    },

    {
      "title": "Mediterranean Beach House",
      "description": "Beautiful coastal villa overlooking crystal blue waters.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 2700,
      "location": "Santorini",
      "country": "Greece",
      "reviews": 4.8
    },

    {
      "title": "Safari Treehouse",
      "description": "A treehouse overlooking African savannah wildlife.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      "price": 3400,
      "location": "Masai Mara",
      "country": "Kenya",
      "reviews": 4.8
    },

    {
      "title": "Northern Snow Cabin",
      "description": "A classic Scandinavian wooden cabin in snowy wilderness.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1546706442-373624e9c90b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2tpJTIwcmVzb3J0fGVufDB8fDB8fHww"
      },
      "price": 1500,
      "location": "Reykjavik",
      "country": "Iceland",
      "reviews": 4.5
    },

    {
      "title": "Skyline Penthouse",
      "description": "Luxury penthouse with stunning city skyline views.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 5000,
      "location": "Singapore",
      "country": "Singapore",
      "reviews": 4.9
    },

    {
      "title": "Beachfront Hut",
      "description": "A simple yet beautiful seaside hut on white sand beaches.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 900,
      "location": "Boracay",
      "country": "Philippines",
      "reviews": 4.4
    },

    {
      "title": "Swiss Lake Cottage",
      "description": "A peaceful cottage by pristine Swiss lakes.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 2600,
      "location": "Lugano",
      "country": "Switzerland",
      "reviews": 4.7
    },

    {
      "title": "Luxury Sky Villa",
      "description": "Sky-high villa with infinity pool and panoramic views.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 8000,
      "location": "Dubai",
      "country": "UAE",
      "reviews": 4.9
    },

    {
      "title": "Tropical Forest Bungalow",
      "description": "Stay deep inside lush tropical rainforests.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1663679508314-b68d8da82409?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyb3BpY2FsJTIwcmVzb3J0fGVufDB8fDB8fHww"
      },
      "price": 1300,
      "location": "Bali",
      "country": "Indonesia",
      "reviews": 4.5
    },

    {
      "title": "Cliffside Ocean Resort",
      "description": "A scenic cliffside resort with ocean waves crashing below.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 2800,
      "location": "Madeira",
      "country": "Portugal",
      "reviews": 4.6
    },

    {
      "title": "Wine Valley Villa",
      "description": "A peaceful villa inside lush vineyards.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 2400,
      "location": "Napa Valley",
      "country": "United States",
      "reviews": 4.7
    },

    {
      "title": "Rainforest River Lodge",
      "description": "A riverfront lodge deep inside lush tropical forests.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbmZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      "price": 1900,
      "location": "Costa Rica",
      "country": "Costa Rica",
      "reviews": 4.4
    },

    {
      "title": "Urban Capsule Pod",
      "description": "A futuristic capsule hotel for backpackers.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 400,
      "location": "Tokyo",
      "country": "Japan",
      "reviews": 4.2
    },

    {
      "title": "Rocky Mountain Lodge",
      "description": "A snowy lodge with dramatic mountain peaks.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 2100,
      "location": "Colorado",
      "country": "United States",
      "reviews": 4.6
    },

    {
      "title": "Hawaiian Beach Villa",
      "description": "A tropical villa with private beach and palm trees.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 3200,
      "location": "Maui",
      "country": "United States",
      "reviews": 4.8
    },

    {
      "title": "Countryside Stone Lodge",
      "description": "A peaceful lodge in rolling countryside hills.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 1800,
      "location": "Tuscany",
      "country": "Italy",
      "reviews": 4.5
    },

    {
      "title": "Jungle Cliff Lodge",
      "description": "A cliffside jungle lodge overlooking dense forests.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1583470790878-4f4f3811a01f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbmZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D"
      },
      "price": 1500,
      "location": "Borneo",
      "country": "Malaysia",
      "reviews": 4.3
    },

    {
      "title": "Alpine Wooden Chalet",
      "description": "A classic cozy wooden chalet in snowy Alps.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 3100,
      "location": "Innsbruck",
      "country": "Austria",
      "reviews": 4.9
    },

    {
      "title": "Ocean Cliff Resort",
      "description": "A cliff resort overlooking endless ocean views.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 2600,
      "location": "Cape Town",
      "country": "South Africa",
      "reviews": 4.6
    },
    {
      "title": "Amazon Jungle Treehouse",
      "description": "A treetop stay deep inside the Amazon jungle.",
      "image": {
        "filename": "listingimage",
        "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=60"
      },
      "price": 1900,
      "location": "Manaus",
      "country": "Brazil",
      "reviews": 4.4
    }
];
module.exports = { data: sampleListings };