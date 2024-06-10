import app from "./server.js" // import the server.js file
import MongoDB from "MongoDB";
import ReviewDAO from "./dao/reviewsDAO.js";

const MongoClient = mongodb.MongoClient
const mongo_username = process.env["MONGO_USERNAME"];
const mongo_password = process.env["MONGO_PASSWORD"];

const uri = `mongodb+srv://<username>:<password>@cluster0.wveowic.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
