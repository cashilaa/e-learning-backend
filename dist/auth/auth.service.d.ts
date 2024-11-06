import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from './user.entity';
export declare class AuthService {
    private jwtService;
    private userModel;
    constructor(jwtService: JwtService, userModel: Model<User>);
    googleLogin(profile: any): Promise<any>;
}
