import mongoose from "mongoose";

const conn = () => {
  mongoose
    .connect(process.env.DB_URL, {
      dbName: "lenslight",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log(`DB connection error: ${err.message}`);
    });
};

export default conn;
