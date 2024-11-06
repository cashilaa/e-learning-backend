import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.entity'; // Import the User model
import { GoogleStrategy } from './google.strategy';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<User>,  // Inject User model
  ) {}

  // Google login handler
  async googleLogin(profile: any): Promise<any> {
    const { id, emails, displayName } = profile;

    // Check if the user already exists in the database
    let user = await this.userModel.findOne({ googleId: id });

    // If user doesn't exist, create a new one
    if (!user) {
      user = new this.userModel({
        googleId: id,
        email: emails[0].value,
        name: displayName,
        userType: 'student',  // You can dynamically assign userType
      });

      await user.save();  // Save the new user in the database
    }

    // Generate JWT token
    const token = this.jwtService.sign({ userId: user.id, userType: user.userType });

    return { user, token };
  }
}
