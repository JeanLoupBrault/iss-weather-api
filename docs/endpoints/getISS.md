\# GET /issposition

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

\`GET /issposition\`

\#\#\# Body

\`\`\`json

{

"message": "success",

"timestamp": 1593545207,

"iss_position": {

"longitude": "14.3289",

"latitude": "-46.2072"

}

}

\`\`\`

\#\#\#\# Parameters

Field\|Required\|description

:-----:\|:-----:\|:-----:

message\|yes\|Gives the status on getting the ISS position. timestamp\|yes\|Unix
time stamp indicating that the ISS position was calculated at that time

iss_position\|yes\|ISS calculated position on earth

longitude\|yes\|ISS longitude on earth

latitude\|yes\|ISS latitude on earth

\#\# Response by status

\#\#\# 200 OK

The API <http://api.open-notify.org/iss-now.json> has returned the ISS position
correctly.

If we receive the ISS position, we calculate the temperature at that position on
earth, and we return this payload:

\`\`\`json

{

"isscurrentpos": "latitude": "-46.2072", "longitude": "14.3289",

}

\`\`\`
