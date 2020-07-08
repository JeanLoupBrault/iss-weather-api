\# POST /weatheratmycurrpos

[A brief description of what happens in this flow]

Obtain the International Space Station (ISS) position (latitude and longitude)
to:

1.  Tell me how far away I currently am from the ISS

2.  Tell me the temperature difference between the ISS and myself

3.  Give me detailed weather at position on earth below the ISS.

\#\# Development notes

[Any important notes about the feature]

\#\# Request schema

[The endpoint, expected parameters, and all possible response values of this
endpoint]

\#\#\# Endpoint

\`POST /weatheratmycurrentpos\`

Obtain the weather at my current position with the Weatherstack API
<http://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=fetch:ip>

Parameters required:

Key=YOUR ACCESS KEY

Query=fetch:IP

\#\#\# Body

\`\`\`json

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

\`\`\`

\#\#\#\# Parameters

Field\|Required\|description

:-----:\|:-----:\|:-----:

Request type\|yes\|Request type to get my position. Request query\|yes\|IP
address to get my position

Request language\|yes\|specifies the language used to describe the weather

Request unit\|yes\|specifies the unit used to describe the weather

Location name\|yes\|My current position’s region name

Location country\|yes\|My current position’s country name

Location region\|yes\|My current position’s province name

Location lat\|yes\|My current position’s latitude

Location lon\|yes\|My current position’s longitude

Location timezone_id\|no\|My current position’s time zone

Location localtime\|yes\|My current position’s local time

Location localtime_epoch\|no\|My current position’s local time epoch

Location utc_offset\|no\|My current position’s utc (Universal Time Coordinates)
offset

Current observation_time\|yes\|My current position’s time

Current temperature\|yes\|My current position’s temperature

Current weather_code\|yes\|My current position’s weather code

Current weather_icons\|yes\|My current position’s weather icons

Current weather_descriptions\|yes\|My current position’s weather descriptions

Current wind_speed\|yes\|My current position’s wind speed

Current wind_degree\|no\|My current position’s wind degree

Current wind_dir\|yes\|My current position’s wind direction

Current pressure\|yes\|My current position’s atmospheric pressure

Current precip\|yes\|My current position’s precipitation

Current humidity\|yes\|My current position’s humidity

Current cloudcover\|yes\|My current position’s cloud cover

Current feelslike\|yes\|My current position’s temperature feels like

Current uv_index\|yes\|My current position’s uv index

Current visibility\|yes\|My current position’s visibility

Current is_day\|no\|My current position’s day or night

\#\# Response by status

\#\#\# 1. Tell me how far away I currently am from the international space
station

\#\#\# 200 OK

If we receive both my current position and the ISS position, we calculate the
distance between both positions, and we return this payload:

\`\`\`json

{

"mycurrentpos": "latitude": "45.850", "longitude": "-73.767",

"isscurrentpos": "latitude": "-46.2072", "longitude": "14.3289",

"distancebetweenpos": "distance between the ISS and my current position": "2545
kilometers"

}

\`\`\`

\#\#\# 400 BAD REQUEST

If

\- either the ISS position or my current position is unavailable, then we will
send this payload:

\`\`\`json

{

"code": "BadRequestError",

"message": "{reason for bad request}"

}

\`\`\`

\#\#\# 2. Tell me the temperature difference between the international space
station and myself

\#\#\# 200 OK

If we receive both my current position and the ISS position, we calculate the
temperature difference between both positions, and we return this payload:

\`\`\`json

{

"mycurrentpos": "latitude": "45.850", "longitude": "-73.767",

"mycurrentpostemp": "My current position temperature": "23 degrees Celsius",

"isscurrentpos": "latitude": "-46.2072", "longitude": "14.3289",

"isscurrentpostemp": "ISS current position temperature": "19 degrees Celsius",

"tempdiffbetweenpos": "Temperature difference between the ISS and my current
position": "4 degrees Celsius"

}

\`\`\`

\#\#\# 400 BAD REQUEST

If

\- the ISS current position is too far from a meteorological station, then we
will not be able to display a temperature at the ISS position on earth, and we
will send this payload:

\-

\`\`\`json

{

"code": "BadRequestError",

"message": "{The ISS position on earth is too far from a meteorological station,
so there is no temperature available}"

}

\`\`\`

\#\#\# 3. Give me detailed weather at position on earth below the international
spaces station

\#\#\# 200 OK

If we receive the ISS position, we calculate the temperature at that position on
earth, and we return this payload:

\`\`\`json

{

"isscurrentpos": "latitude": "-46.2072", "longitude": "14.3289",

"isscurrentpostemp": "ISS current position temperature": "19 degrees Celsius",

}

\`\`\`

\#\#\# 400 BAD REQUEST

If

\- the ISS current position is too far from a meteorological station, then we
will not be able to display a temperature at the ISS position on earth, and we
will send this payload:

\-

\`\`\`json

{

"code": "BadRequestError",

"message": "{The ISS position on earth is too far from a meteorological station,
so there is no temperature available}"

}

\`\`\`
