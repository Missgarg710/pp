//Express App Imports
const express = require("express");
const http = require("http");
require("dotenv").config();
const connectDB = require("./db");
//Start Express App
const app = express();
const server = http.createServer(app);

const { createQuestion, getQuestions } = require("./questionController");

//Setting Environment
const PORT = process.env.PORT || 5000;
app.set("trust proxy", 1);
app.use(express.json());


app.get("/questions", getQuestions);
app.post("/questions", express.urlencoded({extended:true}),createQuestion);
app.use(express.static("frontend"));
//Function Start
async function start() {
	try {
		//Connecting to the DataBase
		await connectDB(process.env.DB_CONNECTION);

		console.log("Connected to the DataBase Sucessfully");
		server.listen(PORT, () => {
			console.log(`Server is listening on http://localhost:${PORT}`);
		});
	} catch (error) {
		console.log(`Error: ${error}`);
	}
}
start();
