# BLiP 💬

A real-time chat application built with **MERN stack + Socket.IO**.  
Users can sign up, log in, update their profiles, and chat instantly with others in real time.

---

## 🚀 Features
- 🔐 User authentication (JWT + cookies)
- 👤 Profile management (name, email, profile picture)
- 💬 Real-time messaging with **Socket.IO**
- 🖼️ Send text & image messages
- 🟢 Online/offline user status
- 📱 Responsive UI with **React + Tailwind + DaisyUI**
- 🌐 Production-ready backend with **Express.js**

---

## 🛠️ Tech Stack
**Frontend:** React, Vite, TailwindCSS, DaisyUI, Zustand, Axios  
**Backend:** Node.js, Express, MongoDB, Mongoose, Socket.IO  
**Other Tools:** Cloudinary (image upload), JWT, dotenv, cookie-parser, cors  

---

## Create a .env file inside backend/:

PORT=5696
MONGO_URI=...
JWT_SECRET=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

## Build the app

npm run build

## Start the app
npm start


## 📂 Project Structure
BLiP/
├── backend/ # Express + Socket.IO server
│ ├── src/
│ │ ├── controllers/
│ │ ├── middleware/
│ │ ├── models/
│ │ ├── routes/
│ │ └── lib/
│ └── index.js
├── frontend/ # React + Vite client
│ ├── src/
│ │ ├── components/
│ │ ├── store/
│ │ ├── pages/
│ │ └── lib/
│ └── index.html
└── README.md

🤝 Contributing
Pull requests are welcome. For major changes, open an issue first to discuss.

📜 License
This project is licensed under the MIT License.