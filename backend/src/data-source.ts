import "reflect-metadata";
import { DataSource } from "typeorm";
import { Conversion } from "./entity/Conversion";
import { Country } from "./entity/Country";
import { Currency } from "./entity/Currency";
import { initial1679392985323 } from "./migration/1679392985323-initial";
import { conversionValueUpdate1679394422332 } from "./migration/1679394422332-conversion-value-update";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [Currency, Conversion, Country],
  migrations: [initial1679392985323, conversionValueUpdate1679394422332],
  subscribers: [],
});
