# 🔐 SecurePass - A simple Password Manager

A simple yet secure password manager application demonstrating encryption, hashing, and secure storage practices.

## 📁 Project Structure

```bash
securepass/
├── api/                 # NestJS backend
│   ├── src/
│   │   ├── passwords/   # Password management module
│   │   └── shared/      # Shared utilities
├── web/                 # Next.js frontend
│   ├── src/
│   │   ├── app/        # Next.js app router pages
│   │   ├── components/ # React components
│   │   └── lib/        # Utilities and API functions
└── docker-compose.yml   # MongoDB container setup
```

## 🛠️ Tech Stack

### Why PNPM?
- 📦 Efficient disk space usage through hard linking
- 🚀 Faster installation than npm/yarn
- 🔒 Strict dependency resolution
- 📂 Built-in monorepo support with workspaces

### Frontend
- ⚛️ Next.js 14 (App Router)
- 🎨 Tailwind CSS + shadcn/ui
- 🔄 TanStack Query for data fetching
- 📝 React Hook Form for form handling
- 🌐 Axios for API communication

### Backend
- 🪺 NestJS framework
- 🔑 Node.js Crypto for encryption/hashing
- 📊 MongoDB with Mongoose
- 🔄 CORS enabled for local development

### Development
- 📝 TypeScript
- 🎯 ESLint + Prettier
- 🐳 Docker for MongoDB

## 🚀 Getting Started

> ⚠️ **Note**: This project is configured for local development only and is not production-ready.

### Prerequisites
- Node.js 18+
- PNPM 8+
- Docker (for MongoDB) or a local instance

### Installation

1. Clone the repository:
```bash
git clone https://github.com/devharshthakur/securepass.git
cd securepass
```

2. Install dependencies:
```bash
pnpm install
```

3. Start MongoDB using Docker:
```bash
docker-compose up -d
```
The `docker-compose.yml` file is located in the root directory of the project.

4. Start the development servers:
```bash
pnpm dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001/api

## 🔒 Security Features

- AES-256-CBC encryption for password storage
- SHA-256 hashing for password labels
- Secure key derivation using scrypt
- Encrypted data stored in MongoDB
- CORS protection for API endpoints

## 🌟 Features

- 📝 Add new password entries
- 🔍 Search passwords by label
- 📋 View all stored passwords
- 📱 Responsive design
- 🌓 Light/Dark mode support

## 🧪 Testing

Run the test suites:
```bash
pnpm test
```

## 📝 Development Notes

- The project uses a monorepo structure with PNPM workspaces
- Environment variables are not committed (check .env.example)
- API is CORS-configured for localhost only
- MongoDB runs in a Docker container for development
- Encryption keys are currently hardcoded (not production-ready)

## ⚠️ Important Notes

This project is:
- 🏠 Designed for local development only
- 🚫 Not production-ready
- 🔑 Using hardcoded encryption keys (unsafe for production)
- 💻 CORS-configured for localhost only

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Harsh Thakur
- GitHub: [@devharshthakur](https://github.com/devharshthakur)
```

This README is based on the codebase analysis, particularly:

1. Project structure from the workspace configuration:

```1:3:pnpm-workspace.yaml
packages:
  - "api"
  - "web"
```


2. Security implementation from:

```1:28:api/src/shared/utils/encryption.util.ts
import * as crypto from 'crypto';

export class EncryptionUtil {
  private readonly algorithm = 'aes-256-cbc';
  private readonly key: Buffer;

  constructor() {
    const password = 'your-secret-password';
    const salt = 'your-salt-value';
    this.key = crypto.scryptSync(password, salt, 32);
  }

  encrypt(text: string): string {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);
    const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
  }

  decrypt(encryptedText: string): string {
    const [ivHex, encryptedHex] = encryptedText.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const encrypted = Buffer.from(encryptedHex, 'hex');
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, iv);
    const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    return decrypted.toString('utf8');
  }
}
```


3. Local development configuration from:

```7:12:api/src/main.ts
  // Enable cors
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  });
```


4. MongoDB setup from:

```1:10:docker-compose.yaml
version: '3.9'
services:
  mongo:
    image: mongo:latest
    container_name: securepass-mongo
    ports:
      - "27017:27017"
    volumes:
      - /Volumes/Crucial1TB/Docker/Volumes/mongo-data:/data/db
    restart: unless-stopped
```


The README accurately reflects the local-only development nature of the project and its current security implementation details.
