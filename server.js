import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
// import imageRoutes from "./routes/images.js";
// import userRoutes from "./routes/user.js";

const app = express();
app.use(bodyParser.json());

// app.use("/image", imageRoutes);
// app.use("/api", userRoutes);
// app.use("/uploads", express.static("uploads"));

app.listen(5000, () => {
  console.log("server is running on 5000...");
  mongoose.connect(
    "mongodb+srv://akshay3395:Processor@3395@cluster0.wspfhr1.mongodb.net/TodoListApp?retryWrites=true&w=majority",
    (err, db) => {
      console.log("mongoose connected...");
    }
  );
});
