var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    console.log(req.url)
    if (req.url === '/maintananceconfig') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            "maintenance": false
        }));
        return;
    }

    if (req.url === '/contactusconfig') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(
            {
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
            }));
            return;
    }


    if (req.url === '/sendEMAIL') {

        console.log('SEND EMAIL')
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        "message": 'WELCOME'
    }));


}).listen(8080); //the server object listens on port 8080