import * as functions from "firebase-functions";
import * as express from "express";

import { NewEvent } from "./controllers/events"

const router = express.Router();

router.get("/ping", (req, res) => res.status(200).send("yeooo"));

router.post("/event", NewEvent)

const app = express();
app.use(router);
exports.api = functions.https.onRequest(app);

// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
