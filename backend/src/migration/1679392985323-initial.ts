import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1679392985323 implements MigrationInterface {
    name = 'initial1679392985323'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`country\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`currency\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`code\` varchar(255) NOT NULL, \`decimals\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`conversion\` (\`id\` int NOT NULL AUTO_INCREMENT, \`value\` int NOT NULL, \`timestamp\` timestamp NOT NULL, \`fromId\` int NULL, \`toId\` int NULL, UNIQUE INDEX \`REL_8c3c849d96088bfb8c2ed04e73\` (\`fromId\`), UNIQUE INDEX \`REL_c8f2210daf8cdbb643c3c21d54\` (\`toId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`currency_countries_country\` (\`currencyId\` int NOT NULL, \`countryId\` int NOT NULL, INDEX \`IDX_6da32ccd72564cf28c3df4b91a\` (\`currencyId\`), INDEX \`IDX_d097ca009217b13a3b5715a748\` (\`countryId\`), PRIMARY KEY (\`currencyId\`, \`countryId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`conversion\` ADD CONSTRAINT \`FK_8c3c849d96088bfb8c2ed04e733\` FOREIGN KEY (\`fromId\`) REFERENCES \`currency\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`conversion\` ADD CONSTRAINT \`FK_c8f2210daf8cdbb643c3c21d548\` FOREIGN KEY (\`toId\`) REFERENCES \`currency\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`currency_countries_country\` ADD CONSTRAINT \`FK_6da32ccd72564cf28c3df4b91a8\` FOREIGN KEY (\`currencyId\`) REFERENCES \`currency\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`currency_countries_country\` ADD CONSTRAINT \`FK_d097ca009217b13a3b5715a748b\` FOREIGN KEY (\`countryId\`) REFERENCES \`country\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`currency_countries_country\` DROP FOREIGN KEY \`FK_d097ca009217b13a3b5715a748b\``);
        await queryRunner.query(`ALTER TABLE \`currency_countries_country\` DROP FOREIGN KEY \`FK_6da32ccd72564cf28c3df4b91a8\``);
        await queryRunner.query(`ALTER TABLE \`conversion\` DROP FOREIGN KEY \`FK_c8f2210daf8cdbb643c3c21d548\``);
        await queryRunner.query(`ALTER TABLE \`conversion\` DROP FOREIGN KEY \`FK_8c3c849d96088bfb8c2ed04e733\``);
        await queryRunner.query(`DROP INDEX \`IDX_d097ca009217b13a3b5715a748\` ON \`currency_countries_country\``);
        await queryRunner.query(`DROP INDEX \`IDX_6da32ccd72564cf28c3df4b91a\` ON \`currency_countries_country\``);
        await queryRunner.query(`DROP TABLE \`currency_countries_country\``);
        await queryRunner.query(`DROP INDEX \`REL_c8f2210daf8cdbb643c3c21d54\` ON \`conversion\``);
        await queryRunner.query(`DROP INDEX \`REL_8c3c849d96088bfb8c2ed04e73\` ON \`conversion\``);
        await queryRunner.query(`DROP TABLE \`conversion\``);
        await queryRunner.query(`DROP TABLE \`currency\``);
        await queryRunner.query(`DROP TABLE \`country\``);
    }

}
