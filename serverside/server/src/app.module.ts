import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { datasourceoptions } from 'db/data-source';
import { UsersModule } from './users/users.module';
import { MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CurrentUserMiddleware } from './utility/middlewares/current-user.middleware';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [TypeOrmModule.forRoot(datasourceoptions), UsersModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CurrentUserMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
