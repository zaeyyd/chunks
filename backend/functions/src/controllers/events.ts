import { Response, Request } from "express";
import * as functions from "firebase-functions";
import { google, calendar_v3 } from "googleapis";

const { OAuth2 } = google.auth;

const oAuth2Client = new OAuth2(
  process.env.WEB_CLI_ID,
  process.env.WEB_CLI_SEC
);

oAuth2Client.setCredentials({
});

const cal = google.calendar({ version: "v3", auth: oAuth2Client });

const NewEvent = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    console.log(name);

    const start = new Date()
    start.setDate(start.getDate())
    
    const end = new Date()
    end.setDate(end.getDate())
    end.setMinutes(end.getMinutes() + 20)

    const event: calendar_v3.Schema$Event = {
      summary: name,
      description: "playing around with google api",
      start: {
        dateTime: start.toISOString(),
        timeZone: "America/Toronto",
      },
      end: {
        dateTime: end.toISOString(),
        timeZone: "America/Toronto",
      },
      colorId: "2",
    };

    cal.events.insert(
      {
        calendarId: "primary",
        requestBody: event
      }, (err: any, event: any) => {

        if (err) {
          console.log('There was an error contacting the Calendar service: ' + err);
          res.status(500).json(err) 
          return;
        }
        console.log('Event created');
        res.status(200).json(event) 
        return
      }
    );
  } catch (err) {
    // TODO: resolve err type
    if (err instanceof Error) {
      res.status(500).json(err.message);
      functions.logger.error(err.message, { structuredData: true });
    } else {
      res.status(500).json({ error: "Unknown Error" });
      functions.logger.error(err, { structuredData: true });
    }
  }
};

export { NewEvent };
