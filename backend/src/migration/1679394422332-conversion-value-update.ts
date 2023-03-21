import { MigrationInterface, QueryRunner } from "typeorm";

export class conversionValueUpdate1679394422332 implements MigrationInterface {
    name = 'conversionValueUpdate1679394422332'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`conversion\` DROP COLUMN \`value\``);
        await queryRunner.query(`ALTER TABLE \`conversion\` ADD \`value\` float NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`conversion\` DROP COLUMN \`value\``);
        await queryRunner.query(`ALTER TABLE \`conversion\` ADD \`value\` int NOT NULL`);
    }

}
