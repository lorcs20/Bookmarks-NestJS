import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true, //ensures no additonal data can be injected, e.g. email and password can be inputted but say an ID cant because its not a field in the dto
    }
  ));
  await app.listen(3333); //launches server in port x e.g 3333
}
bootstrap();
