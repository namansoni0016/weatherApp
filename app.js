import express from "express";
import { config } from "dotenv";

const app = express();

// For environment variables
config({ path: ".env" });

app.get("/", (req, res) => {
    res.send("Weather App");
});

// Starting Server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})