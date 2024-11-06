// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.entity'; 
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  // Validate user credentials (mock)
  async validateUser(email: string, password: string): Promise<User | null> {
    const mockUser: User = { 
      id: 1, 
      email: 'user@example.com', 
      password: 'password123',  // Added password here
      userType: 'student' 
    };

    if (email === mockUser.email && password === mockUser.password) {
      return mockUser;
    }
    return null;
  }

  // Login and return JWT token
  async login(user: User) {
    const payload = { email: user.email, sub: user.id, userType: user.userType };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // Google OAuth login (mock)
  async googleLogin(user: User) {
    const payload = { email: user.email, sub: user.id, userType: user.userType };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
