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

\`POST /weatheratmycurrentpos?lat.lon\`

Obtain the weather at my current position with the Weatherstack API
<http://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=fetch:ip>

Parameters required:

Lat=My current position latitude

Lon=My current position longitude

\#\#\# Body

\`\`\`json

{

"lat": "45.850",

"lon": "-73.767",

}

\`\`\`

\#\#\#\# Parameters

Field\|Required\|description

:-----:\|:-----:\|:-----:

Location lat\|yes\|My current position’s latitude

Location lon\|yes\|My current position’s longitude

\#\# Response by status

\#\#\# 200 OK

If we receive the weather at my current position, we return this payload:

\`\`\`json

{

"mycurrentpos": "latitude": "45.850", "longitude": "-73.767",

"mycurrentpostemp": "My current position temperature": "23 degrees Celsius",

"weather_description": "Patchy rain possible",

"feelslike": "25",

"uv_index": "5"

}

\`\`\`

\#\#\# 404 NOT FOUND

If

\- my current position is unavailable, then we will send this payload:

\`\`\`json

{

"code": "BadRequestError",

"message": "{reason for bad request}"

}

\`\`\`
