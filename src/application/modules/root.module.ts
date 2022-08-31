import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserResolver } from '@application/api/resolver/user.resolver';
import { repository, useCases } from '@application/di/providers/user.provider';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    installSubscriptionHandlers: true,
    autoSchemaFile: true
  }),UserModule],
  controllers: [],
  providers: [...repository, ...useCases, PrismaClient, UserResolver],
})
export class RootModule {}
