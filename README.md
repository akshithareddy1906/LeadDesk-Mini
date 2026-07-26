# LeadDesk Mini 🚀

LeadDesk Mini is a full-stack web application developed as part of the **Digital Heroes Internship Qualification Task**.

The application allows users to submit their requirements through a public landing page. An admin can securely log in to view all submitted leads, search for specific leads, and update their status.

---

## Features

### Public Side

- Responsive landing page
- Lead submission form
- Client-side validation
- Server-side validation
- Name validation
- Email validation
- Budget selection
- Message validation
- Stores submitted data in MongoDB Atlas

### Admin Side

- Secure admin login
- View all submitted leads
- Search leads
- Update lead status

### Lead Status

- New
- Contacted
- Closed

---

## Tech Stack

### Frontend

- React.js
- Vite
- Axios
- React Router DOM

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas

### Authentication

- JWT (JSON Web Token)
- bcryptjs

### Validation

- Express Validator

---

## Project Structure

```
LeadDesk-Mini
│
├── client
├── server
├── README.md
└── package.json
```

---

## Data Model

### User

| Field | Description |
|-------|-------------|
| Email | Admin email |
| Password | Hashed password |

### Lead

| Field | Description |
|-------|-------------|
| Name | User name |
| Email | User email |
| Budget | Selected budget |
| Message | User message |
| Status | New / Contacted / Closed |
| Created At | Automatically generated |
| Updated At | Automatically generated |

---

## Authentication

The admin panel is protected using **JWT authentication**.

Passwords are securely hashed using **bcryptjs** before storing them in the database. After a successful login, a JWT token is generated and used to access protected admin routes.

---

## Deployment

### Frontend

Vercel

### Backend

Render

### Database

MongoDB Atlas

---

## Live Links

### Live Website

https://lead-desk-mini-yais.vercel.app/

### Admin Login

https://lead-desk-mini-yais.vercel.app/login

### Backend

https://leaddesk-mini-1-df7c.onrender.com/

### GitHub Repository

https://github.com/akshithareddy1906/LeadDesk-Mini

---

## Test Credentials

**Email**

akshithareddy1906@gmail.com

**Password**

YourPassword123

---

## Installation

Clone the repository

```bash
git clone https://github.com/akshithareddy1906/LeadDesk-Mini.git
```

Move into the project folder

```bash
cd LeadDesk-Mini
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm start
```

---

## Environment Variables

Create a `.env` file inside the **server** folder and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## AI Usage

AI tools were used to help with debugging deployment issues, reviewing documentation, and clarifying implementation approaches. The project development, coding, testing, deployment, and final verification were completed by me.

---

## Built For

Built for **Digital Heroes Training Task**

https://digitalheroesco.com
