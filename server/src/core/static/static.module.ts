import Path from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: Path.join(process.cwd(), '..', 'client', 'build'),
    }),
  ],
})
export class StaticModule {}
