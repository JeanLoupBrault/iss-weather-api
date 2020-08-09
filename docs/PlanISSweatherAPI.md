ISS weather API Planning

I want to build an app that can do 3 things:

-   Tell me how far away I currently am from the international space station

-   Tell me the temperature difference between the international space station
    and myself

-   Give me detailed weather at position on earth below the international spaces
    station

This project is about planning, so before writing any code I'd like to see a
plan of how we'll use these APIs to achieve the above requirements. This plan
needs to include:

-   The endpoints you'll need to build

-   What you'll send to and get back from those endpoints

-   A small diagram of the flow of data (you can use draw.io or lucidchart.com
    to make that)

The endpoints I will need to build

1.  To tell how far away I currently am from the ISS, I need these endpoints:

    1.  An endpoint to get the ISS Position (use the ISS-location-now API)

    2.  An endpoint to get the weather at my current position (use the
        Weatherstack API to get the latitude and longitude of my current
        position)

Use a function to calculate the distance between my current position and the ISS
position

1.  To tell the temperature difference between the ISS and myself, I need these
    endpoints:

2.1) An endpoint to get the weather at my current position (use the Weatherstack
API to get the latitude and longitude of my current position)

2.2) An endpoint to get the ISS Position (use the ISS-location-now API)

2.3) An endpoint to get the weather at the ISS position

Use a function to calculate the temperature difference between my current
position and the ISS position

To give detailed weather at position on Earth below the ISS, I need these
endpoints:

3.1)

From the ISS API, we get the ISS position:

GET http://api.open-notify.org/iss-now.json

The response is:

{

"message": "success",

"timestamp": 1593545207,

"iss_position": {

"longitude": "14.3289",

"latitude": "-46.2072"

}

}

From the weather API, we get the weather at our location:

<http://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=fetch:ip>

The response is:

{

"request": {

"type": "IP",

"query": "96.23.47.30",

"language": "en",

"unit": "m"

},

"location": {

"name": "Laurentides",

"country": "Canada",

"region": "Quebec",

"lat": "45.850",

"lon": "-73.767",

"timezone_id": "America\\/Toronto",

"localtime": "2020-06-30 15:59",

"localtime_epoch": 1593532740,

"utc_offset": "-4.0"

},

"current": {

"observation_time": "07:59 PM",

"temperature": 22,

"weather_code": 176,

"weather_icons": [

"https:\\/\\/assets.weatherstack.com\\/images\\/wsymbols01_png_64\\/wsymbol_0009_light_rain_showers.png"

],

"weather_descriptions": [

"Patchy rain possible"

],

"wind_speed": 19,

"wind_degree": 52,

"wind_dir": "NE",

"pressure": 1015,

"precip": 0,

"humidity": 79,

"cloudcover": 48,

"feelslike": 25,

"uv_index": 5,

"visibility": 10,

"is_day": "yes"

}

}

We can pass longitude and latitude to the query parameter, so we can locate the
ISS. But I tried with latitude 14.3289 and longitude -46.2072 (obtained from the
ISS API), and I get an error code 615 Your API request failed. I tried another
latitude and longitude coordinates coming from the ISS API, and I get the same
error code 615.

query = 40.7831,-73.9712 (New York)

![https://www.draw.io/?open=G133mBVI-U3NmN6b5XU6YlOi6AuAiP53Dg&local-data=%7B%22type%22%3A%22Drive%22%2C%22id%22%3A%22133mBVI-U3NmN6b5XU6YlOi6AuAiP53Dg%22%2C%22lastModifiedDate%22%3A%222020-07-02T15%3A06%3A14.849Z%22%2C%22pageId%22%3A%22C5RBs43oDa-KdzZeNtuy%22%2C%22layers%22%3A%5B0%5D%7D](media/3508456c87f8acd29a90751e628504fe.png)
