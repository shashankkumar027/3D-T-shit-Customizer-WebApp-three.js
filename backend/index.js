import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import dalleRoutes from "./routes/dalle.routes.js";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json({ limig: "50mb" }));

app.use(`/api/v1/dalle`, dalleRoutes);

app.get("/", (req, res) => {
  res.send("<h1 style='color:crimson'>Hello!<br>Shashank</h1><br><h2 style='color:purple'>Server Running Fine...<hr>")
});


app.listen(port, () => {
  console.log(`* Server is running on url: http://localhost:${port}`);
});
