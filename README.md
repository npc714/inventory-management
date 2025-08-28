# Inventory Management / Point of Sale App

A full-stack inventory management and point of sale (POS) system with real-time updates using **Vue 3 (Vite)** for the frontend, **Node.js + Express** for the backend, and **MongoDB** for the database.

This is my **second fullstack project**, so some features (like staff/inventory update or delete) weren't implemented.

---

## Features

### 🔑 Authentication
- Role-based login system (`admin` and `sales`)
- Heartbeat system to track online status
- Password for **all accounts** is `1234`
- Pre-seeded accounts:
  - **Admins**: `stf001`, `stf004`
  - **Sales**: `stf002`, `stf003`, `stf005`
- Only **admins** can create new staff

### 📊 Admin Dashboard
- Metrics: Total Revenue, Total Sales, Average Order, Low Stock
- Recent Activity feed (login, add staff, logout, sale) for the current day
- Staff Overview: Shows all registered staff with their total orders and revenue for the current day

### 💸 Sales Dashboard
- Product Catalog: Select products + quantity for sale
- Metrics: Total Revenue, Orders, Avg Order, Total Items Sold
- Recent Daily Sales feed
- Catalog updates instantly after a sale

### ⚡ Real-Time Updates
- All metrics, online status, and catalog changes are updated instantly with **WebSockets**

---

## Project Structure

```
inventory-management/
├── client/          # Vue 3 + Vite frontend
├── server/          # Node.js + Express backend
└── files/           # Required folder (sibling of client & server)
```

---

## Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- **MongoDB Community Server** (must be installed locally)

---

## Environment Setup

### Client (`.env` in client folder)

```env
VITE_API_BASE_URL=http://localhost:5000
```
*Replace 5000 if you change the backend port.*

### Server (`.env` in server folder)

```env
DATABASE_NAME=INVENTORY-MANAGEMENT
DATABASE_URI=mongodb://127.0.0.1:4000/
FRONTEND_ORIGIN=http://localhost:5173
JWT_SECRET=8e19d1c79b9e4e76a923467b6a1c3dc4f8434735a8a647ad7f6448e4c0c69c24
PORT=5000
```

---

## Installation & Running

### 1. Install Dependencies

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### 2. Run the Database Server

Make sure MongoDB Community Server is installed locally.
Then, from the server folder, run:

```bash
database-server.bat
```

### 3. Run the Backend

```bash
nodemon server.js
# or
node server.js
```

### 4. Run the Frontend

```bash
cd ../client
npm run dev
```

---

## Notes

- This project does not include update/delete functionality for staff or inventory
- Only admins can add new staff or inventory
- Pre-seeded database includes 2 admins and 5 sales staff
- All account passwords are `1234`
- To view, edit, or remove records (including seeded data), download and use MongoDB Compass or the corresponding VS Code MongoDB extension

---

## Contact

If you encounter issues, reach out on Twitter: [@imnotuche](https://twitter.com/imnotuche)
