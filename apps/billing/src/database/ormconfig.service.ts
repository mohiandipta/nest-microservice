import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";

// @Injectable()
class ConfigService {
    constructor(private env: { [k: string]: string | undefined }) { }

    public getTypeOrmConfig(databaseName: string): TypeOrmModuleOptions {
        if (databaseName === 'ms_orders') {
            return {
                type: 'mysql',
                host: this.env.DB_HOST,
                port: Number(this.env.DB_PORT),
                username: this.env.DB_USERNAME,
                password: this.env.DB_PASSWORD,
                database: this.env.DB_ORDERS,
                logging: false,
                autoLoadEntities: true,
                entities: [
                    __dirname + '../../../../apps/**/*.entity{.ts,.js}',
                ],

                migrationsTableName: 'migration',
                migrations: [join(__dirname, '..', 'migrations', '*.ts')],

                synchronize: true,
            };
        } else if (databaseName === 'ms_auth') {
            return {
                type: 'mysql',
                host: this.env.DB_HOST,
                port: Number(this.env.DB_PORT),
                username: this.env.DB_USERNAME,
                password: this.env.DB_PASSWORD,
                database: this.env.DB_AUTH,
                logging: false,

                entities: [
                    __dirname + '/../../../**/*.entity{.ts,.js}',
                ],

                migrationsTableName: 'migration',
                migrations: [join(__dirname, '..', 'migrations', '*.ts')],

                synchronize: true,
            };
        } else if (databaseName === 'ms_billing') {
            return {
                type: 'mysql',
                host: this.env.DB_HOST,
                port: Number(this.env.DB_PORT),
                username: this.env.DB_USERNAME,
                password: this.env.DB_PASSWORD,
                database: this.env.DB_BILLING,
                logging: false,

                entities: [
                    __dirname + '/../../**/*.entity{.ts,.js}',
                ],

                migrationsTableName: 'migration',
                migrations: [join(__dirname, '..', 'migrations', '*.ts')],

                synchronize: true,
            };
        } else {
            // Handle other databases or throw an error if necessary
            throw new Error(`Database configuration for ${databaseName} not found.`);
        }
    }
}

const configService = new ConfigService(process.env);

export default configService
