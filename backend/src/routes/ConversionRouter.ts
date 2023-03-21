import * as express from "express";
import { AppDataSource } from "../data-source";
import { Conversion } from "../entity/Conversion";
const ConversionRouter = express.Router();

const conversionRepository = AppDataSource.getRepository(Conversion);

ConversionRouter.get(
  "/",
  async (req: express.Request, res: express.Response) => {
    const conversions = await conversionRepository.find();

    res.status(200).json(conversions);
  }
);

export default ConversionRouter;
