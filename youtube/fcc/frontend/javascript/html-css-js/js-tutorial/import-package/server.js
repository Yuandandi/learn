import express from "experss"; // npm install express
import cors from "cors";
import reivews from "./API/reviews.route.js";

const app = express(); // load express and for create web server

app.use(cors()); // use middleware, program that express use to change How things work
app.use(express.json); // excepting in body of request, listen and receive JSON

app.use("/api/v1/reviews", reviews); // API version 1 and use the routes from this file
app.use("*", (req, res)) => res.status(404).json{errror: "not found"}; // passing Function request and responds, not found will showed up if the links not included in in this link

export default app; // export something from that file to uses import into different file
