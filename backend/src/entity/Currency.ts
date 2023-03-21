import {
  Code,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Country } from "./Country";

@Entity()
export class Currency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  decimals: number;

  @ManyToMany(() => Country)
  @JoinTable()
  countries: Country[];
}
