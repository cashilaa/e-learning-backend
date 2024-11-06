import { Model } from 'mongoose';
import { User } from './user.entity';
import { AuthService } from './auth.service';
declare const GoogleStrategy_base: new (...args: any[]) => any;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private userModel;
    private authService;
    constructor(userModel: Model<User>, authService: AuthService);
    validate(accessToken: string, refreshToken: string, profile: any): Promise<any>;
}
export {};
