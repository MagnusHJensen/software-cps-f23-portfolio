import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import * as dotenv from "dotenv";
import ConversionRouter from "./routes/ConversionRouter";
dotenv.config();

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    app.use("/conversions", ConversionRouter);

    // start express server
    app.listen(process.env.APP_PORT);

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/users to see results"
    );
  })
  .catch((error) => console.log(error));
