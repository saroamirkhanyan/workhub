import * as fs from 'fs';
import * as dotenv from 'dotenv';
import * as path from 'path';

// add .env.NODE_ENV properties to process.env
export function dotenvConfig({ envFile }) {
  const envFilePath = path.join(__dirname, envFile).trim();
  const envConfig = dotenv.parse(fs.readFileSync(envFilePath));
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
}
