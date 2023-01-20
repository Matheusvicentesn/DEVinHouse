import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 3333,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        synchronize: true,
        entities: [__dirname + '/../../**/**/*.entity{.ts,.js}'],
      });
      return dataSource.initialize();
    },
  },
];
