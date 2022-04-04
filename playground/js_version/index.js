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
    refresh_token: "1//04AC9MWkHamtPCgYIARAAGAQSNwF-L9Irzuy3GCJRZUyzq4COcbsSMR09NseTdxJ6vcZ3SMVHitvynJmcOnV2Cb-BZWzeuulLfCs"
})

const cal = google.calendar({ version: 'v3', auth: oauth2Client})

const start = new Date()
start.setDate(start.getDay())

const end = new Date()
end.setDate(end.getDay())
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
          return;
        }
        return console.log('Event created: %s', event.htmlLink);
      })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})