import dotenv from "dotenv";
import express from "express";
import conn from "./db.js";
import pageRoute from "./routes/pageRoute.js";
import photoRoute from "./routes/photoRoute.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

conn();

const app = express();
const port = process.env.PORT || 3000;

// ejs template engine
app.set("view engine", "ejs");

// static files middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
// app.get('/', (req, res) => {
//   res.render('index')
// })
// app.get('/about', (req, res) => {
//   res.render('about')
// })

app.use("/", pageRoute);
app.use("/photos", photoRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Application running on port: ${port}`);
});
