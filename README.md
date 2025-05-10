# 🔐 SecurePass 

Welcome to the repository for **SecurePass**! 🎉 This is a simple yet foundational password manager application I built as a project to deeply understand and demonstrate key concepts in **encryption**, **hashing**, and **secure storage practices**. Think of it as my hands-on playground for digital security principles and a direct implementation of what I learned! 💪🔒

## 📚 Table of Contents
- [✨ Introduction](#✨-introduction)
- [🌟 Features](#🌟-features)
- [📁 Project Structure](#📁-project-structure)
- [🛠️ Tech Stack](#🛠️-tech-stack)
- [🚀 Getting Started](#🚀-getting-started)
- [🔒 Security Implementation](#🔒-security-implementation)
- [🔬 Development Notes](#🔬-development-notes)
- [⚠️ Important Considerations](#⚠️-important-considerations)
- [📄 License](#📄-license)
- [👤 About Me](#👤-about-me)

## ✨ Introduction

I created **SecurePass** as a **personal project** and a **mere simulation** to explore the building blocks of secure application development and apply my cryptography course learnings. My goal was to build something practical that requires handling sensitive data, allowing me to implement and learn about modern encryption and hashing techniques, secure data storage, and structuring a full-stack application. It's been a valuable learning experience in combining **frontend (Next.js)**, **backend (NestJS)**, and **database (MongoDB)** with a focus on security patterns – essentially, bringing the concepts I studied to life! 🧠💻

## 🌟 Features

Here are some of the key features I implemented in this version of SecurePass:

*   📝 **Adding Entries**: I built the functionality to add new password entries, associating a username and the password itself with a unique label.
*   🔍 **Searching**: I included a search feature to quickly find stored passwords by their label.
*   📋 **Viewing Passwords**: Users can see a list of their saved password entries.
*   📱 **Responsive Design**: I aimed for a user interface that works reasonably well across different device sizes.
*   🌓 **Light/Dark Mode**: Added theme switching for a better user experience.

## 📁 Project Structure

I've organized the project using a monorepo structure with PNPM workspaces. Here's how I laid it out:

```bash
securepass/
├── api/                 # 🪺 My NestJS backend application
│   ├── src/             # 🏗️ Source code for the API
│   │   ├── passwords/   # 🔑 Module for handling password logic
│   │   └── shared/      # 📚 Shared utilities (like encryption!)
├── web/                 # 🌐 My Next.js frontend application
│   ├── src/             # ⚛️ Source code for the web UI
│   │   ├── app/        # 📁 App Router pages
│   │   ├── components/ # 🧩 Reusable React components
│   │   └── lib/        # 🧰 Utility functions and API client
└── docker-compose.yml   # 🐳 Configuration to run MongoDB in Docker
```

## 🛠️ Tech Stack

I chose these technologies for specific reasons, focusing on modern, robust, and efficient tools that I wanted to learn:

### Why PNPM?
I selected PNPM for managing dependencies across the monorepo because I learned:
- 📦 It saves significant disk space by sharing dependencies using hard links.
- 🚀 It offers faster installation times compared to npm/yarn.
- 🔒 Its strictness helps prevent tricky dependency issues.
- 📂 It has excellent built-in support for monorepos via workspaces.

### Frontend (`web/`)
- ⚛️ **Next.js 14 (App Router)**: I used this for a powerful, full-stack React framework.
- 🎨 **Tailwind CSS + shadcn/ui**: For rapid UI development and styling.
- 🔄 **TanStack Query**: To manage server-side data fetching and state efficiently.
- 📝 **React Hook Form**: For streamlined form handling and validation.
- 🌐 **Axios**: As the promise-based HTTP client for communicating with the backend API.

### Backend (`api/`)
- 🪺 **NestJS**: A progressive Node.js framework I used for building efficient and scalable server-side applications.
- 🔑 **Node.js Crypto**: I utilized Node's built-in module for cryptographic operations (encryption and hashing), directly applying concepts from my studies.
- 📊 **MongoDB with Mongoose**: A NoSQL database for storing data, accessed via Mongoose ODM.
- 🔄 **CORS**: Configured it for local development to allow the frontend to communicate with the backend.

### Development
- 📝 **TypeScript**: For type safety and improved developer experience across the project.
- 🎯 **ESLint + Prettier**: To enforce code style and maintain code quality.
- 🐳 **Docker**: Specifically used it for easily running a local MongoDB instance without system-wide installation.

## 🚀 Getting Started

Ready to run SecurePass on your machine? Follow the steps I used for setup! 👇

> ⚠️ **Note**: I built this project primarily for **local development and learning**. It is **not** configured or intended for production use as-is – think of it as a working example of the concepts!

### Prerequisites
Make sure you have these installed:
- Node.js version 18 or higher.
- PNPM version 8 or higher.
- Docker (needed to run the MongoDB database container).

### Installation

1.  Clone the repository to my local machine:
    ```bash
    git clone https://github.com/devharshthakur/securepass.git
    cd securepass
    ```

2.  Install the project dependencies using PNPM workspaces:
    ```bash
    pnpm install
    ```

3.  Start the MongoDB database container using Docker Compose:
    ```bash
    docker-compose up -d
    ```
    The `docker-compose.yml` file is located in the root directory where I ran the command.

4.  Start both the frontend and backend development servers using the PNPM workspace script:
    ```bash
    pnpm dev
    ```

The application components should now be running:
- Frontend (web UI): Accessible at `http://localhost:3000`
- Backend API: Running and accessible via the frontend, typically at `http://localhost:3001/api`

## 📹 Demo Video

*(Once available, I'll embed a demo video here to show SecurePass in action!)*

[Link to Demo Video (Coming Soon!)]

## 🔒 Security Implementation

A core part of this project was implementing fundamental security measures based on what I learned. Here's how I approached it in the backend:

*   🔐 **Password Encryption**: I used **AES-256-CBC** to encrypt the sensitive password data before storing it. Each encrypted password includes its own initialization vector (IV). This was a direct implementation of concepts from my cryptography course.
*   🔗 **Label Hashing**: Password labels are hashed using **SHA-256**. This allows searching by label without storing the plain text labels, adding a layer of privacy, just as I learned about hashing applications.
*   🔑 **Secure Key Derivation**: I used the **scrypt** key derivation function to generate the encryption key from a passphrase and salt. This makes brute-force attacks on the passphrase much harder, a crucial lesson in password-based key derivation.
*   💾 **Encrypted Storage**: All encrypted data (passwords, IVs) and hashed labels are stored in the **MongoDB** database.

## 🔬 Development Notes

Here are a few notes about the development setup and choices I made while building this project:

*   🌿 The project utilizes a **monorepo structure**. I used standard pnpm based monorepo features for organization.
*   ⚙️ Environment variables for configurations (like database connections or keys) are handled, but **`.env` files are not committed** for basic security practice. Please refer to a `.env.example` if provided.
*   🌐 I configured **CORS** only to allow requests from `http://localhost:3000` for my local development environment.
*   🐳 MongoDB is run in a convenient **Docker container** for easy setup during development, simplifying my setup process.

## ⚠️ Important Considerations

It's crucial to understand the current limitations and nature of this project, as I built it primarily for learning:

*   🏠 **Local Development Only**: I built and tested this project solely for use in my local development environment.
*   🚫 **Not Production-Ready**: This code **should NOT be used in a production environment** as-is. It's a **simulation** and **implementation of concepts**, not a hardened product.
*   🔑 **Hardcoded Encryption Keys**: **Crucially**, the encryption passphrase and salt are **hardcoded** in the code (`api/src/shared/utils/encryption.util.ts`). This is a significant security vulnerability in a real-world application and is done here purely for simplicity in this **learning project**. **Never do this in production!** This is an example of *how* keys can be derived and used, but the *storage* method here is insecure for anything beyond personal learning.
*   💻 **CORS Restricted**: The API is only configured to accept requests from `localhost:3000`, reflecting its local testing scope.

This project serves as a demonstration of security *concepts* in code, not a deployable, secure product. It's a snapshot of my learning journey!

## 📄 License

This project is open source and available under the **MIT License**. I believe in open access for learning, so feel free to explore and learn from it! See the [LICENSE](LICENSE) file in the root directory for full details. Feel free to learn from, modify, and distribute it according to the terms. 👍

Thanks for checking out my project! I hope exploring the code helps you learn as much as building it taught me. 😊✨
