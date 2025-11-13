import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfigService } from './env-config.service';
import { join } from 'node:path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        join(__dirname, `../../../../.env.${process.env.NODE_ENV ?? 'development'}`),
      ],
    }),
  ],
  providers: [EnvConfigService],
})
export class EnvConfigModule {}
