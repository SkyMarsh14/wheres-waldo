# Where’s Waldo – Photo Tagging App

A full-stack interactive “Where’s Waldo” style game built with **React**, **Node.js**, **Express**, **Prisma**, and **PostgreSQL**.  
Users search for hidden characters on detailed maps, and the app records how long it takes them to complete each level.

---

## 🚀 Features

- 🖱️ **Interactive map clicking** – Users click anywhere on the image to guess a character’s location
- 🎯 **Server-side coordinate validation** Coordinate will be corrected and verfied. Different screensize produces different coordinate, so I have generalized the coordinate accordingly.
- ⏱️ **Session-based timer** that tracks how long each user takes
- 🏆 **Leaderboard** for each map
- 🔐 **Session management** It stores session id on localStorage, and send it with Authorization Header. Login feature is not being implemented, aiming for casual plays.
- 🌐 **CORS-friendly API** for cross-domain frontend/backend
- 📦 Modular backend routes and controllers with RESTAPI
- 🗺️ Prisma schema includes:
  - Maps
  - Targets
  - Leaderboards

---

## 🧱 Tech Stack

### **Frontend**

- React
- Vite
- Styled-components

### **Backend**

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- express-session
- PrismaSessionStore

---

### **Database Structure**

```prisma
model Target {
id Int @id @default(autoincrement())
name String @unique
url String @unique
coordinateX Int
coordinateY Int
mapId Int
map Map @relation(fields: [mapId], references: [id])
}

model Map {
id Int @id @default(autoincrement())
name String
url String @unique
targets Target[]
leaderboards Leaderboard[]
}

model Leaderboard {
id Int @id @default(autoincrement())
timeSeconds Decimal @db.Decimal(10, 2)
username String
mapId Int
map Map @relation(fields: [mapId], references: [id])

@@unique([mapId, username])
}
```

---

### How to run locally?

The following enviromental variables are required to run it locally.
On backend, `DATABASE_URL` for DB api, and `MODE` which excepts you to set `development` for running it locally.
On the frontend, you should set the `VITE_BACKEND_URL` for server api.
Once you create `.env` file, and set these variables, run the following commands.

## Backend setup

```
cd backend
npm install
npx prisma migrate dev
npm start
```

## Frontend setup

```
cd frontend
npm install
npm run dev
```
