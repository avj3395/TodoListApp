import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todo.js";

const app = express();
app.use(bodyParser.json());

app.use("/api", todoRoutes);

mongoose.set("strictQuery", false);
app.listen(5000, () => {
  console.log("server is running on 5000...");
  mongoose
    .connect(
      "mongodb+srv://akshay3395:Processor3395@cluster0.wspfhr1.mongodb.net/TodoListApp?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
      }
    )
    .then(() => {
      console.log("MDB connection successful===");
    })
    .catch((err) => {
      console.log("no connection=======", err);
    });
});
