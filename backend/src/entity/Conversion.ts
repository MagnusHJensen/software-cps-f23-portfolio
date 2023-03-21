import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";
import { Currency } from "./Currency";

@Entity()
export class Conversion {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Currency)
  @JoinColumn()
  from: Currency;

  @OneToOne(() => Currency)
  @JoinColumn()
  to: Currency;

  @Column("float")
  value: number;

  @Column("timestamp")
  timestamp: Timestamp;
}
