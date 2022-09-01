import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserResolver } from '@application/api/resolver/user.resolver';
import { repository, useCases } from '@application/di/providers/user.provider';
import { PrismaClient } from '@prisma/client';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';
import { PrismaModule } from '@application/modules/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      debug: false,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault({
          embed: true,
        }),
      ],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [...repository, ...useCases, PrismaClient, UserResolver],
})
export class RootModule {}
