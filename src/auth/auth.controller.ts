import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './google-auth.guard';  // Create a custom guard for Google login
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signin(@Req() req) {
    // Handle sign-in logic here, this will likely call the authService.googleLogin() method
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)  // Guard to trigger Google OAuth flow
  async googleAuth(@Req() req) {
    // Google OAuth flow will be triggered here
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Req() req, @Res() res: Response) {
    // This is where Google OAuth redirects after successful login
    const user = req.user;  // The user object after Google authentication
    const token = await this.authService.googleLogin(user);  // Generate the JWT token

    // Send token back to the frontend (you can also redirect or return JSON)
    res.json({ access_token: token.access_token, user: token.user });
  }
}
