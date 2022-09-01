import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaClient } from '@prisma/client';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';
import { PrismaModule } from '@application/modules/prisma.module';
import { UserModule } from '@application/modules/user.module';
import { repository, useCases } from '@application/providers/user.provider';
import { MessageModule } from '@application/modules/message.module';

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
      cors: true,
    }),
    UserModule,
    MessageModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [...repository, ...useCases, PrismaClient],
})
export class RootModule {}
