// src/auth/user.entity.ts
export class User {
    id: number;
    email: string;
    password?: string;  // Make password optional for Google login
    userType: string;
  }
  