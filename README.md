# 💬 QuickChat - Connect Instantly, Chat Swiftly

![QuickChat Thumbnail](/client/public/QuickChat-Thumbnail.png)

Login Page : 

![QuickChat Login Thumbnail](/client/public/quickchat-login-thumbnail.png)

---

**Quick Chat** A modern, full-stack **Real-time** messaging platform built with the **MERN Stack** and **Socket.io**. This application enables users to **communicate Instantly**, **manage profiles**, and **share media** in a **responsive, secure environment**.

---

## 🚀 Overview

The application enables users to :

- Register and authenticate securely

- Send and receive real-time messages

- Share media files

- View online/offline status

- Experience instant updates via Socket.io

---

## 🧱 What is a Quick Chat App?

Quick Chat App is a MERN Stack web application that uses :

- MongoDB → NoSQL database for storing users and messages

- Express.js → Backend framework for APIs

- React (with Vite) → Frontend UI

- Node.js → Server runtime

Real-time communication is handled using Socket.io, enabling instant bi-directional message updates between users.

---

## ✨ Key Features

- 🔐 Secure Authentication (JWT-based)

- 🔑 Password Hashing with bcryptjs

- 💬 Real-Time Messaging with Socket.io

- 🟢 Online / Offline User Status

- 📎 Media Upload Support (Cloudinary)

- 🔔 Toast Notifications (react-hot-toast)

- 📱 Fully Responsive UI

- 🎨 Modern UI using Tailwind CSS

- 🔄 Protected Routes with react-router-dom

- 🌐 RESTful API Integration using Axios

- ⚡ Optimized Development Workflow with Nodemon

- 🛡️ CORS-enabled secure cross-origin communication (Vercel ↔ Render)

---

## 🏗️ Tech Stack
### 🖥️ Frontend

- **React (Vite)** : For a lightning-fast development experience and optimized builds.

- **Tailwind CSS** : Utility-first styling for a modern, responsive UI.

- **React Router DOM** : Handling client-side navigation.

- **Axios** : For asynchronous API requests.

- **React Hot Toast** : Elegant notifications for success/error messages.

### 🧠 Backend

- **Node.js & Express.js** : Robust server-side runtime and framework.

- **MongoDB** : NoSQL database for flexible data modeling and persistence.

- **JWT (jsonwebtoken)** : Secure, stateless authentication.

- **bcryptjs** : Industry-standard password hashing.

- **CORS** : secure frontend-backend communication.

- **Socket.io** : Enabling bidirectional, event-based communication.

### ☁️ Cloud & Media

- **Cloudinary** : Cloud-based image and file management.

### 🔧 Development Tools

- **Nodemon** : For automatic server restarts during development.

- dotenv (Environment Variables)

---

## ⚙️ Architecture Overview

```bash
Client (Vercel - React + Vite)
        ↕
REST APIs (Axios)
        ↕
Backend (Render - Node.js + Express + Socket.io)
        ↕
MongoDB Atlas
        ↕
Cloudinary (Media CDN)
```

### Authentication Flow:

1. User registers/login

2. Password hashed using bcryptjs

3. JWT issued and stored securely

4. Protected routes verify token before access

### Messaging Flow:

1. User connects via Socket.io

2. Server tracks active users

3. Messages emitted in real-time

4. Messages saved in MongoDB

5. Receiver instantly receives message

---

### 🔐 Security Features

- Password hashing with bcryptjs

- JWT-based stateless authentication

- Protected backend routes

- Secure file uploads via Cloudinary

- Cross-origin CORS configuration (Vercel ↔ Render)    

---

## 📦 Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/ErUsAnsari/MERN-Chat-app.git
cd MERN-Chat-app
```

---

### 2️⃣ Install Dependencies

**Backend** : 

```bash
cd server
npm install
```
**Frontend** :

```bash
cd client
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env` file inside `/server`

Then, fill in your credentials:

```env
PORT=5000
MONGODB_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

### 4️⃣ Run Development Servers

**Backend** :

```bash
nodemon server
```

**Frontend** :

```bash
npm run dev
```

---

## 🚀 Future Enhancements

- ✅ Message read receipts

- ✅ Typing indicators

- ✅ Group chats

- ✅ Message deletion/editing

- ✅ File & document sharing

- ✅ Push notifications

- ✅ Deployment with Docker

- ✅ End-to-end encryption

---

## 🌍 Production Deployment

The application is deployed using a split production architecture :

**🚀 Frontend**

- Hosted on Vercel

- Optimized static & dynamic React (Vite) build

- Environment-based API configuration

**🧠 Backend**

- Deployed on Render

- Persistent Node.js + Express server

- Real-time WebSocket handling via Socket.io

- Secure CORS configuration for cross-origin communication

**🗄️ Database & Media**

- MongoDB Atlas (cloud database)

- Cloudinary CDN for media storage and optimization


Live Demo :

```bash
https://mern-chat-app-lake-seven.vercel.app
```

---

## 🎯 Learning Outcomes

This project demonstrates:

- Full-stack architecture design

- Real-time communication using Socket.io

- Secure authentication handling

- REST API development

- Cloud media integration

- State management and protected routing

- Production-ready project structuring