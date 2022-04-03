"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// const event = {
//     'summary': 'Google I/O 2015',
//     'location': '800 Howard St., San Francisco, CA 94103',
//     'description': 'A chance to hear more about Google\'s developer products.',
//     'start': {
//       'dateTime': '2022-04-02T09:00:00-07:00',
//       'timeZone': 'America/Los_Angeles',
//     },
//     'end': {
//       'dateTime': '2022-04-02T17:00:00-07:00',
//       'timeZone': 'America/Los_Angeles',
//     },
//     'attendees': [
//       {'email': 'lpage@example.com'},
//     ]
//   };
//   calendar.events.insert({
//     auth: auth,
//     calendarId: 'primary',
//     resource: event,
//   }, function(err, event) {
//     if (err) {
//       console.log('There was an error contacting the Calendar service: ' + err);
//       return;
//     }
//     console.log('Event created: %s', event.htmlLink);
//   });
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(process.env.APIKEY);
    console.log("hi");
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map