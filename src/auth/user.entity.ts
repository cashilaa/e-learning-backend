import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Define User as a Mongoose Schema
@Schema()
export class User extends Document {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  userType: string;

  @Prop({ required: true })
  googleId: string;  // Store Google ID for reference
}

export const UserSchema = SchemaFactory.createForClass(User);
