import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './google.strategy';  // Import the GoogleStrategy
import { JwtModule } from '@nestjs/jwt';  // To issue JWTs

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'google' }),  // Make sure Passport is registered
    JwtModule.register({
      secret: process.env.JWT_SECRET,  // JWT secret from environment variable
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, GoogleStrategy],  // Add the strategy as a provider
  controllers: [AuthController],  // Controller that handles routes
})
export class AuthModule {}
