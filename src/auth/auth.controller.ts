// src/auth/auth.controller.ts
import { Controller, Post, Body, Param, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './user.entity';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin/:userType')
  async login(
    @Param('userType') userType: string,
    @Body() body: { email: string; password: string },
    @Res() res
  ) {
    const { email, password } = body;
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = await this.authService.login(user);
    return res.status(200).json({ token });
  }

  @Post('google/:userType')
  async googleLogin(
    @Param('userType') userType: string,
    @Req() req,
    @Res() res
  ) {
    // Mock Google login user
    const user: User = { 
      id: 1, 
      email: 'user@example.com', 
      password: 'mockpassword123',  // Mock password for now
      userType 
    };

    const token = await this.authService.googleLogin(user);
    return res.status(200).json({ token });
  }
}
