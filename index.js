import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
let counter = 0;
app.get("/", (req, res) => {
  counter++;
  console.log(`Request count: ${counter}`);
  res.json({ message: "Welcome to the application on server v1.0.0 " });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});