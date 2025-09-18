import dotenv from 'dotenv';

dotenv.config();

export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "password";
export const DB_DATABASE = process.env.DB_DATABASE || "database_name";

export const GCP_PROJECT_ID = process.env.GCP_PROJECT_ID || "your_project_id";
export const GCP_REGION = process.env.GCP_REGION || "your_region";
export const INSTANCE_NAME = process.env.INSTANCE_NAME || "your_instance_name";

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "your_jwt_secret";
export const JWT_TOKEN_EXPIRES_IN = process.env.JWT_EXPIRATION || "1h";
export const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS) || 10;

export const CLERK_WEBHOOK_SIGNING_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET || "your_clerk_webhook_secret";

export const MP_PUBLIC_KEY = process.env.MP_PUBLIC_KEY || "your_mp_public_key";
export const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN || "your_mp_access_token";

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
export const PORT = process.env.PORT || 5000;
export const NODE_ENV = process.env.NODE_ENV || "development";