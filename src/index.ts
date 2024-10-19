import express from "express";
import { BookRoutes, errorhandler } from "./interface/";

const app = express();

app.use(express.json()); //converting data to json, so need to set on middleware
app.use("/api", BookRoutes);
app.use(errorhandler);

app.listen(3000, () => {
  console.log(`server is running on 3000`);
});
