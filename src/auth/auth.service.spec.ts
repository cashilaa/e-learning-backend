// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';  // Import JwtService
import { User } from './user.entity';  // Import User entity

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}  // Inject JwtService here

  // Create a JWT for the user
  async login(user: User) {
    const payload = { email: user.email, sub: user.id, userType: user.userType };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // Google login (mock)
  async googleLogin(user: User) {
    const payload = { email: user.email, sub: user.id, userType: user.userType };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
