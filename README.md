# 📚 GyaniGig - Empowering Students through Learning and Opportunities

Welcome to **GyaniGig**, an all-in-one platform designed to connect students with the **right courses**, **internships**, and **career guidance**. Whether you're a learner looking to upskill or seeking real-world internship experience, GyaniGig brings everything together under one intuitive interface.

---

## 🚀 Features

### ✅ Authentication
- JWT-based secure login & registration
- Protected routes for authenticated users

### 📊 Student Dashboard
- View enrolled courses
- Visual progress chart with Chart.js
- List of available internships and companies
- Company-wise course offerings

### 🏢 Internships
- Browse internships from top companies
- Each listing includes company name and opportunity details

### 📘 Courses
- Explore courses offered by companies
- View and access content from various domains

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router
- Axios
- Chart.js
- Bootstrap & Material UI for styling

**Backend:**
- Node.js
- Express.js
- MongoDB (with Mongoose)

---


To start the backend : 
cd backend
npm install
npm run dev


To start the Frontend : 
cd ../frontend
npm install
npm start

NOTE- Make sure your backend runs on http://localhost:5002 and frontend on http://localhost:3000

🙌 Future Improvements
Role-based dashboards (Students, Companies, Mentors)

Real-time chat and mentorship booking

EduCredit system and microfunding integration

Admin dashboard for managing users and courses

🎨 UI Highlights
Fully responsive layout

Gradient Navbar with logo and route links

Dashboard includes a Chart.js bar chart for course completion

Conditional rendering based on authentication status

🛡️ Authentication
GyaniGig uses JWT tokens for authentication. Tokens are stored in localStorage and sent via headers on protected routes such as the dashboard.

Project Structure: 
GyaniGig/ ├── backend/ │ ├── routes/ │ │ └── student.js │ ├── models/ │ └── server.js ├── frontend/ │ ├── src/ │ │ ├── pages/ │ │ │ ├── Dashboard.jsx │ │ │ ├── Login.jsx │ │ │ ├── Register.jsx │ │ │ ├── CompanyCourses.jsx │ │ │ └── Internships.jsx │ │ ├── assets/ │ │ │ └── logo.png │ │ └── App.js ├── README.md └── package.json

![Screenshot 2025-04-06 at 4 13 25 PM](https://github.com/user-attachments/assets/bb022692-b57b-4d0a-91de-1fc50e58ef0f)
![Screenshot 2025-04-06 at 4 13 11 PM](https://github.com/user-attachments/assets/c48094c4-895e-4b8e-a172-90445c6c5e97)
![Screenshot 2025-04-06 at 4 11 38 PM](https://github.com/user-attachments/assets/a9b6993a-99c5-4979-87f4-ca1a9b99dd86)
![Screenshot 2025-04-06 at 4 11 24 PM](https://github.com/user-attachments/assets/d5289247-c30a-402c-b8a0-299e0941bde2)
![Screenshot 2025-04-06 at 4 11 07 PM](https://github.com/user-attachments/assets/df78b18e-8c14-41e1-9cdf-63b6cfe05b40)


