import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    AuthModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || '1234saffsgtsftfst', // Store this in an env variable
      signOptions: { expiresIn: '1h' }, // Set your desired expiration
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
