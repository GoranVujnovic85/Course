const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors());


app.get('/maintananceconfig', (req,res)=>(
  res.json({
    "maintenance": false
      })
))


app.get('/contactusconfig', (req,res)=>(
  res.json({
    "locations": [
      {
        "address": "Omladinskih brigada 65a, Novi Beograd, Serbia",
        "mapLink": "https://www.google.com/maps/place/Mega+Gym+Novi+Beograd/@44.8002934,20.4023666,17z/data=!3m1!4b1!4m6!3m5!1s0x475a6f9745555555:0xa6c1806f5dc591c2!8m2!3d44.8002934!4d20.4023666!16s%2Fg%2F11c545wzd5?hl=sr&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D",
        "visible": true
      },
      {
        "address": "Kralja Mihaila Zetskog 6, Batajnica, Serbia",
        "mapLink": "https://www.google.com/maps/place/Mega+Gym+Batajnica/@44.8944677,20.295322,19z/data=!4m6!3m5!1s0x475a678d9a9810cf:0x5d7d4bc10320b32d!8m2!3d44.894534!4d20.2955426!16s%2Fg%2F11fph42h09?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D",
        "visible": true
      },
      {
        "address": "Viline vode 47, Beograd, Serbia",
        "mapLink": "https://www.google.com/maps/place/Mega+Gym+Central/@44.8210844,20.4864223,17z/data=!3m1!4b1!4m6!3m5!1s0x475a7b432bdd60dd:0x1f3e5692bb5c074b!8m2!3d44.8210844!4d20.4864223!16s%2Fg%2F11vl5ss232?hl=sr&entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D",
        "visible": false
      },
      {
        "address": "Dimitrija Davidovica 10, Smederevo, Serbia",
        "mapLink": "https://www.google.com/maps/place/Mega+Gym+Smederevo/@44.6622306,20.9290837,17z/data=!4m6!3m5!1s0x475093f1552b8d2f:0x92ca600d0c023efd!8m2!3d44.6622962!4d20.9297847!16s%2Fg%2F11mvvqx6gg?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D",
        "visible": false
      },
      {
        "address": "Obala Mica Ljubibratica bb, Trebinje, Bosna i Hercegovina",
        "mapLink": "https://www.google.com/maps/place/Mega+Gym+Trebinje/@42.7138793,18.3481844,17z/data=!3m1!4b1!4m6!3m5!1s0x134c69f36eb2d8af:0x321edc27285b973!8m2!3d42.7138793!4d18.3481844!16s%2Fg%2F11vqtvp8t3?hl=sr&entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D",
        "visible": true
      }
    ]
  })
))


app.get('/locker', (req,res)=>(
  res.json({
    "results": {
        "tags": [
            {
                "id": 65,
                "is_active": true,
                "is_linked": true,
                "name": "Daily Snack",
                "type": "packages",
                "createdAt": "2024-11-07T18:27:37.000Z",
                "updatedAt": "2024-11-09T00:15:02.000Z"
            },
            {
                "id": 64,
                "is_active": true,
                "is_linked": true,
                "name": "Daily Base",
                "type": "packages",
                "createdAt": "2024-11-07T18:27:37.000Z",
                "updatedAt": "2024-11-07T18:27:37.000Z"
            },
            {
                "id": 63,
                "is_active": true,
                "is_linked": true,
                "name": "Daily Dessert",
                "type": "packages",
                "createdAt": "2024-11-07T18:27:37.000Z",
                "updatedAt": "2024-11-09T00:15:02.000Z"
            },
            {
                "id": 62,
                "is_active": true,
                "is_linked": true,
                "name": "Daily Side",
                "type": "packages",
                "createdAt": "2024-11-07T18:27:37.000Z",
                "updatedAt": "2024-11-07T18:27:37.000Z"
            },
            {
                "id": 61,
                "is_active": true,
                "is_linked": true,
                "name": "Daily Main",
                "type": "packages",
                "createdAt": "2024-11-07T18:27:37.000Z",
                "updatedAt": "2024-11-07T18:27:37.000Z"
            },
            {
                "id": 60,
                "is_active": true,
                "is_linked": true,
                "name": "Dessert",
                "type": "category",
                "createdAt": "2024-10-10T09:54:23.000Z",
                "updatedAt": "2024-10-25T00:15:01.000Z"
            },
            {
                "id": 59,
                "is_active": true,
                "is_linked": true,
                "name": "Side",
                "type": "category",
                "createdAt": "2024-10-10T09:54:11.000Z",
                "updatedAt": "2024-10-19T00:15:02.000Z"
            },
            {
                "id": 58,
                "is_active": true,
                "is_linked": true,
                "name": "Main",
                "type": "category",
                "createdAt": "2024-10-10T09:54:07.000Z",
                "updatedAt": "2024-10-19T00:15:02.000Z"
            },
            {
                "id": 57,
                "is_active": true,
                "is_linked": true,
                "name": "Base",
                "type": "category",
                "createdAt": "2024-10-10T09:54:01.000Z",
                "updatedAt": "2024-10-23T19:39:29.000Z"
            },
            {
                "id": 56,
                "is_active": true,
                "is_linked": true,
                "name": "Snack",
                "type": "category",
                "createdAt": "2024-10-10T09:53:55.000Z",
                "updatedAt": "2024-11-05T00:15:02.000Z"
            },
            {
                "id": 55,
                "is_active": true,
                "is_linked": false,
                "name": "Bronze Sandwiches",
                "type": "packages",
                "createdAt": "2024-10-10T09:53:34.000Z",
                "updatedAt": "2024-10-10T09:53:34.000Z"
            },
            {
                "id": 54,
                "is_active": true,
                "is_linked": false,
                "name": "Bronze",
                "type": "packages",
                "createdAt": "2024-10-10T09:53:15.000Z",
                "updatedAt": "2024-10-10T09:53:15.000Z"
            },
            {
                "id": 53,
                "is_active": true,
                "is_linked": false,
                "name": "Silver",
                "type": "packages",
                "createdAt": "2024-10-10T09:53:08.000Z",
                "updatedAt": "2024-10-10T09:53:08.000Z"
            },
            {
                "id": 52,
                "is_active": true,
                "is_linked": false,
                "name": "Gold",
                "type": "packages",
                "createdAt": "2024-10-10T09:53:01.000Z",
                "updatedAt": "2024-10-10T09:53:01.000Z"
            },
            {
                "id": 34,
                "is_active": true,
                "is_linked": true,
                "name": "Product Launch",
                "type": "event",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 33,
                "is_active": true,
                "is_linked": true,
                "name": "Team Building",
                "type": "event",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 35,
                "is_active": true,
                "is_linked": true,
                "name": "Training Session",
                "type": "event",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 36,
                "is_active": true,
                "is_linked": true,
                "name": "Networking Event",
                "type": "event",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 37,
                "is_active": false,
                "is_linked": true,
                "name": "Summer Party",
                "type": "event",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 38,
                "is_active": true,
                "is_linked": true,
                "name": "Seasonal Party",
                "type": "event",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 39,
                "is_active": true,
                "is_linked": true,
                "name": "Eid",
                "type": "calendar",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 40,
                "is_active": true,
                "is_linked": true,
                "name": "Diwali",
                "type": "calendar",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 41,
                "is_active": true,
                "is_linked": true,
                "name": "Halloween",
                "type": "calendar",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 42,
                "is_active": false,
                "is_linked": true,
                "name": "Christmas",
                "type": "calendar",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 43,
                "is_active": false,
                "is_linked": true,
                "name": "Valentines",
                "type": "calendar",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 44,
                "is_active": true,
                "is_linked": true,
                "name": "Thanksgiving",
                "type": "calendar",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 45,
                "is_active": true,
                "is_linked": true,
                "name": "Birthdays",
                "type": "calendar",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 46,
                "is_active": true,
                "is_linked": true,
                "name": "Chinese New Year",
                "type": "calendar",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 47,
                "is_active": false,
                "is_linked": true,
                "name": "St. Patrick Day",
                "type": "calendar",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 48,
                "is_active": false,
                "is_linked": true,
                "name": "Easter",
                "type": "calendar",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 49,
                "is_active": true,
                "is_linked": true,
                "name": "Mothers Day",
                "type": "calendar",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 50,
                "is_active": true,
                "is_linked": true,
                "name": "New Year",
                "type": "calendar",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 51,
                "is_active": false,
                "is_linked": true,
                "name": "International Womans Day",
                "type": "calendar",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 32,
                "is_active": false,
                "is_linked": true,
                "name": "Fundraiser",
                "type": "event",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 11,
                "is_active": true,
                "is_linked": true,
                "name": "Organic",
                "type": "category",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 12,
                "is_active": true,
                "is_linked": true,
                "name": "Canapés",
                "type": "category",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 13,
                "is_active": true,
                "is_linked": true,
                "name": "Desserts",
                "type": "category",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 14,
                "is_active": false,
                "is_linked": true,
                "name": "Snacks",
                "type": "category",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 15,
                "is_active": true,
                "is_linked": true,
                "name": "Finger Food",
                "type": "category",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 16,
                "is_active": true,
                "is_linked": true,
                "name": "Afternoon Tea",
                "type": "category",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 17,
                "is_active": false,
                "is_linked": true,
                "name": "Dinner",
                "type": "category",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 18,
                "is_active": true,
                "is_linked": true,
                "name": "Breakfast",
                "type": "category",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 19,
                "is_active": true,
                "is_linked": true,
                "name": "Lunch",
                "type": "category",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 20,
                "is_active": true,
                "is_linked": true,
                "name": "Platters",
                "type": "category",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 21,
                "is_active": false,
                "is_linked": true,
                "name": "Bundles",
                "type": "category",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 23,
                "is_active": false,
                "is_linked": true,
                "name": "Pastries",
                "type": "category",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 24,
                "is_active": true,
                "is_linked": true,
                "name": "Cakes",
                "type": "category",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 25,
                "is_active": true,
                "is_linked": true,
                "name": "Cocktails / Bar",
                "type": "category",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 26,
                "is_active": false,
                "is_linked": true,
                "name": "Tea / Coffee",
                "type": "category",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 27,
                "is_active": true,
                "is_linked": true,
                "name": "Corporate Event",
                "type": "event",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 28,
                "is_active": true,
                "is_linked": true,
                "name": "Meeting",
                "type": "event",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 29,
                "is_active": true,
                "is_linked": true,
                "name": "Celebration",
                "type": "event",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 30,
                "is_active": false,
                "is_linked": true,
                "name": "Treat",
                "type": "event",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 31,
                "is_active": true,
                "is_linked": true,
                "name": "Workshop",
                "type": "event",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 22,
                "is_active": true,
                "is_linked": true,
                "name": "Sweets",
                "type": "category",
                "createdAt": "2024-04-16T05:44:23.000Z",
                "updatedAt": "2024-04-16T05:44:23.000Z"
            },
            {
                "id": 2,
                "is_active": true,
                "is_linked": true,
                "name": "Vegan",
                "type": "dietry",
                "createdAt": "2024-04-16T05:44:22.000Z",
                "updatedAt": "2024-04-16T05:44:22.000Z"
            },
            {
                "id": 3,
                "is_active": false,
                "is_linked": true,
                "name": "Gluten-free",
                "type": "dietry",
                "createdAt": "2024-04-16T05:44:22.000Z",
                "updatedAt": "2024-04-16T05:44:22.000Z"
            },
            {
                "id": 4,
                "is_active": true,
                "is_linked": true,
                "name": "Nut-Free",
                "type": "dietry",
                "createdAt": "2024-04-16T05:44:22.000Z",
                "updatedAt": "2024-04-16T05:44:22.000Z"
            },
            {
                "id": 5,
                "is_active": true,
                "is_linked": true,
                "name": "Halal",
                "type": "dietry",
                "createdAt": "2024-04-16T05:44:22.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 6,
                "is_active": true,
                "is_linked": true,
                "name": "Kosher",
                "type": "dietry",
                "createdAt": "2024-04-16T05:44:22.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 7,
                "is_active": false,
                "is_linked": true,
                "name": "Dairy-Free",
                "type": "dietry",
                "createdAt": "2024-04-16T05:44:22.000Z",
                "updatedAt": "2024-04-16T05:44:22.000Z"
            },
            {
                "id": 8,
                "is_active": true,
                "is_linked": true,
                "name": "Low-Carb",
                "type": "dietry",
                "createdAt": "2024-04-16T05:44:22.000Z",
                "updatedAt": "2024-04-16T05:44:22.000Z"
            },
            {
                "id": 9,
                "is_active": true,
                "is_linked": true,
                "name": "High-Protein",
                "type": "dietry",
                "createdAt": "2024-04-16T05:44:22.000Z",
                "updatedAt": "2024-06-24T04:24:06.000Z"
            },
            {
                "id": 10,
                "is_active": true,
                "is_linked": true,
                "name": "Keto",
                "type": "dietry",
                "createdAt": "2024-04-16T05:44:22.000Z",
                "updatedAt": "2024-04-16T05:44:22.000Z"
            },
            {
                "id": 1,
                "is_active": false,
                "is_linked": true,
                "name": "Vegetarian",
                "type": "dietry",
                "createdAt": "2024-04-16T05:44:21.000Z",
                "updatedAt": "2024-04-16T05:44:21.000Z"
            }
        ],
        "paginate": {
            "total": 65,
            "limit": 100,
            "offset": 0,
            "order": [
                [
                    "createdAt",
                    "DESC"
                ]
            ]
        }
    }
})
))


app.get('/images', (req,res)=>(
  res.json({
    "results": [
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTHfnEchYsyIq0gszHjw_YlnHOQZgwJi7H1g&s",
            "active": true,
            "createdAt": "Mon Nov 25 2024 11:26:46 GMT+0100 (Central European Standard Time)"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEDWXN2HCrILDZs7KohSkWSrlFjjy7pQ8gw&s",
            "active": true,
            "createdAt": "Mon Nov 25 2024 12:26:46 GMT+0100 (Central European Standard Time)"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYbc3UIpc890hsef7pXt5ss1aKDJKZsmF73Q&s",
            "active": true,
            "createdAt": "Mon Nov 25 2024 10:26:46 GMT+0100 (Central European Standard Time)"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWrcRwq19nWTNmT5XeXLzgj7NRGnvoQuYWA&s",
            "active": false,
            "createdAt": "Mon Nov 25 2024 13:26:46 GMT+0100 (Central European Standard Time)"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdvVHQNHVLXbHNSGzyYNykt5tmSn9dog42Q&s",
            "active": true,
            "createdAt": "Mon Nov 25 2024 14:26:46 GMT+0100 (Central European Standard Time)"
        },
        {
            "image": "https://nwscdn.com/media/catalog/product/cache/h265xw265/c/o/commercial_dumbbell_rack_main.jpg",
            "active": false,
            "createdAt": "Mon Nov 25 2024 15:26:46 GMT+0100 (Central European Standard Time)"
        },
        {
            "image": "https://cdn.prod.website-files.com/6463557675a28f1b150ff1b2/6554e34f69897531f9d5c3ac_Gym-2-M.png",
            "active": true,
            "createdAt": "Mon Nov 25 2024 16:26:46 GMT+0100 (Central European Standard Time)"
        },
        {
            "image": "https://j6q3t7s5.delivery.rocketcdn.me/wordpress/wp-content/uploads/2022/03/health-club-commercial-gym-design.jpg",
            "active": true,
            "createdAt": "Mon Nov 25 2024 17:26:46 GMT+0100 (Central European Standard Time)"
        },
        {
            "image": "https://www.thirdspace.london/wp-content/uploads/2024/09/Third_Space_Mayfair_25.11.21_Main-Floor_005.jpg",
            "active": false,
            "createdAt": "Mon Nov 25 2024 18:26:46 GMT+0100 (Central European Standard Time)"
        },
        {
           "image": "https://cdn.prod.website-files.com/6463557675a28f1b150ff1b2/6525150e689a245e52a0d8a6_Soho%20-%20gym%20(1).png",
            "active": false,
            "createdAt": "Mon Nov 25 2024 19:26:46 GMT+0100 (Central European Standard Time)"
        }
    ]
  })
))


app.get('/worktimedata', (req,res)=>(
    res.json({
        "workTime": {
          "mondayFriday": {
            "en": "Monday - Friday: 08:00 - 22:00",
            "rs": "Ponedeljak - Petak: 08:00 - 22:00"
          },
          "saturday": {
            "en": "Saturday: 09:00 - 18:00",
            "rs": "Subota: 09:00 - 18:00"
          },
          "sunday": {
            "en": "Sunday: Closed",
            "rs": "Nedelja: Zatvoreno"
          }
        },
        "notice": {
          "en": "New Year Holidays from 01.01. to 09.01.",
          "rs": "Nova godina neradni dani od 01.01. do 09.01.",
          "active": false
        }
      })
  ))


app.get('/', (req,res)=>(
  res.json({
    "message": 'nigga you are either on start page or you typed something gibberish'
      })
))


app.listen('8080', () =>{
  console.log('I am listening on localhost:8080')
})