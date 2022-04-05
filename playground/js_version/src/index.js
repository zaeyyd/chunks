const express = require("express")
const app = express()
const port = 3000
require('dotenv').config()


// google stuff
const { google } = require("googleapis")
const { OAuth2 } = google.auth

const oauth2Client = new OAuth2(
    process.env.WEB_CLI_ID, process.env.WEB_CLI_SEC
)

oauth2Client.setCredentials({
})

const cal = google.calendar({ version: 'v3', auth: oauth2Client})

const start = new Date()
start.setDate(start.getDate())

const end = new Date()
end.setDate(end.getDate())
end.setMinutes(end.getMinutes() + 20)

const event = {
    summary: "test event",
    description: "playing around with google api",
    start: {
        dateTime: start,
        timezone: 'America/Toronto',
    },
    end: {
        dateTime: end,
        timezone: 'America/Toronto',
    },
    colorId: 2,
}

// app.get('/test', (req, res) => {
//     return console.log(cal.calendarList)
// }


app.get('/', (req, res) => {
    console.log('creating')
    console.log(event)

  cal.events.insert({
      calendarId: 'primary',
      resource: event
    }, function(err, event) {
        if (err) {
          console.log('There was an error contacting the Calendar service: ' + err);
          res.status(500).json(err) 
          return;
        }
        console.log('Event created');
        res.status(200).json(event) 
        return
      })
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})