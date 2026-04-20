<div align="center">

<br/>

```
 ██╗███╗   ██╗████████╗███████╗██████╗ ██╗   ██╗██╗███████╗██╗    ██╗
 ██║████╗  ██║╚══██╔══╝██╔════╝██╔══██╗██║   ██║██║██╔════╝██║    ██║
 ██║██╔██╗ ██║   ██║   █████╗  ██████╔╝██║   ██║██║█████╗  ██║ █╗ ██║
 ██║██║╚██╗██║   ██║   ██╔══╝  ██╔══██╗╚██╗ ██╔╝██║██╔══╝  ██║███╗██║
 ██║██║ ╚████║   ██║   ███████╗██║  ██║ ╚████╔╝ ██║███████╗╚███╔███╔╝
 ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚═╝╚══════╝ ╚══╝╚══╝
```

### 🤖 AI-Powered Interview Report Generator

**Upload your resume. Get your personalized 7-day interview preparation plan.**

<br/>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white)

<br/>

</div>

---

## 📌 Overview

**Interview Report Generator** is an AI-powered full-stack web application that analyzes a candidate's **resume**, **self-description**, and **target job description** to generate a comprehensive, personalized interview preparation report. Powered by **Google Gemini AI** and **LangChain**, it produces technical questions, behavioral questions, skill gap analysis, and a structured **7-day preparation plan** — all tailored specifically to the candidate and the role.

---

## ✨ Features

### 🧠 AI-Powered Analysis
- Accepts **resume upload**, **self-description**, and **job description** as input
- Processes all three inputs through **Gemini AI + LangChain** pipeline
- Generates a complete, role-specific interview preparation report

### 📋 Report Sections Generated

| Section | Description |
|---|---|
| 🔧 **Technical Questions** | Role-specific technical interview questions based on resume & JD |
| 🤝 **Behavioral Questions** | Soft-skill and situational questions tailored to the candidate |
| 📊 **Skill Gap Analysis** | Identifies gaps between current skills and job requirements |
| 📅 **7-Day Prep Plan** | Day-by-day preparation roadmap with topics and tasks |

### 📅 7-Day Preparation Plan
Each day in the plan includes:
- **Focused topic** to cover
- **Specific tasks** to complete
- **Resources and exercises** aligned to the job role
- Progressive difficulty from fundamentals to advanced concepts

### 🔐 Authentication
- Secure user registration & login
- JWT-based session management
- Report history saved per user

---

## 🗂️ Project Structure

```
interview-report-generator/
│
├── client/                        # React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── ResumeUpload.jsx
│       │   ├── ReportDisplay.jsx
│       │   ├── PrepPlanCard.jsx
│       │   └── SkillGapChart.jsx
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Dashboard.jsx
│       │   ├── Login.jsx
│       │   └── Register.jsx
│       ├── services/              # Axios API calls
│       └── App.jsx
│
├── server/                        # Node.js + Express Backend
│   ├── config/
│   │   ├── db.mongo.js            # MongoDB connection
│   │   └── db.postgres.js         # PostgreSQL connection
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── report.controller.js
│   ├── middleware/
│   │   └── auth.middleware.js     # JWT verification
│   ├── models/
│   │   ├── User.js                # MongoDB schema
│   │   └── Report.js              # MongoDB schema
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── report.routes.js
│   ├── ai/
│   │   ├── gemini.js              # Gemini AI config
│   │   ├── langchain.js           # LangChain pipeline
│   │   └── prompts.js             # Prompt templates
│   └── server.js
│
├── .env
├── .gitignore
└── README.md
```

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React.js, React Router | UI & navigation |
| **Backend** | Node.js, Express.js | REST API server |
| **Database 1** | MongoDB + Mongoose | User data & report storage |
| **Database 2** | PostgreSQL | Structured query data & analytics |
| **AI Model** | Google Gemini API | LLM for report generation |
| **AI Framework** | LangChain | Prompt chaining & pipeline |
| **Auth** | JWT + bcryptjs | Secure authentication |
| **File Handling** | Multer | Resume file upload |

---

## ⚙️ How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER INPUTS                              │
│   📄 Resume Upload  +  📝 Self Description  +  💼 Job Description│
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                    LANGCHAIN PIPELINE                           │
│   Input Parsing → Prompt Construction → Gemini AI → Parsing    │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                    GENERATED REPORT                             │
│  🔧 Technical Qs  │  🤝 Behavioral Qs  │  📊 Skill Gap          │
│                   📅 7-Day Prep Plan                            │
│         Day 1 → Day 2 → Day 3 → ... → Day 7                    │
│      (Each day: Topic + Tasks + Focus Areas)                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [PostgreSQL](https://www.postgresql.org/) (local or cloud)
- [Google Gemini API Key](https://makersuite.google.com/app/apikey)
- [Git](https://git-scm.com/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/shahbaz00000/interview-report.git
cd interview-report
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside `/server`:

```env
# Server
PORT=5000

# MongoDB
MONGO_URI=your_mongodb_connection_string

# PostgreSQL
PG_HOST=localhost
PG_PORT=5432
PG_USER=your_pg_username
PG_PASSWORD=your_pg_password
PG_DATABASE=interview_report_db

# JWT
JWT_SECRET=your_super_secret_jwt_key

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key
```

Start the backend:

```bash
npm run dev
```

> Server runs on `http://localhost:5000`

---

### 3. Frontend Setup

```bash
cd client
npm install
npm start
```

> React app runs on `http://localhost:3000`

---

## 🔐 API Endpoints

### Auth Routes — `/api/auth`

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `POST` | `/register` | Register new user | Public |
| `POST` | `/login` | Login & receive JWT | Public |

### Report Routes — `/api/report`

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `POST` | `/generate` | Upload inputs & generate AI report | Private 🔒 |
| `GET` | `/history` | Get all past reports for user | Private 🔒 |
| `GET` | `/:id` | Get a specific report by ID | Private 🔒 |
| `DELETE` | `/:id` | Delete a report | Private 🔒 |

---

## 📅 Sample 7-Day Prep Plan Output

```
📅 DAY 1 — Foundations & Core Concepts
   ✅ Topic : Core CS fundamentals & data structures
   ✅ Task 1: Review Arrays, Linked Lists, HashMaps
   ✅ Task 2: Solve 3 easy LeetCode problems

📅 DAY 2 — Technical Deep Dive
   ✅ Topic : Job-specific frameworks & tools
   ✅ Task 1: Review your resume projects in detail
   ✅ Task 2: Prepare explanations for each project

📅 DAY 3 — Skill Gap Focus
   ✅ Topic : Cover identified gaps from AI report
   ✅ Task 1: Watch 1–2 focused tutorials
   ✅ Task 2: Build a small proof-of-concept

📅 DAY 4 — Algorithms & Problem Solving
   ✅ Topic : DSA patterns & problem solving
   ✅ Task 1: Practice medium-level problems
   ✅ Task 2: Focus on Two Pointers, Sliding Window

📅 DAY 5 — System Design Basics
   ✅ Topic : REST API & database design
   ✅ Task 1: Study REST API design principles
   ✅ Task 2: Practice explaining system architecture

📅 DAY 6 — Behavioral Preparation
   ✅ Topic : Soft skills & STAR method
   ✅ Task 1: Prepare answers for all behavioral Qs
   ✅ Task 2: Record yourself answering 3 questions

📅 DAY 7 — Mock Interview & Final Review
   ✅ Topic : Full simulation & revision
   ✅ Task 1: Full mock interview simulation
   ✅ Task 2: Revise all technical concepts
```

---

## 📸 Screenshots

> _Add screenshots of your app here_

| Page | Preview |
|------|---------|
| Input Form (Resume + JD + Description) | _(screenshot)_ |
| Generated Report View | _(screenshot)_ |
| 7-Day Prep Plan | _(screenshot)_ |
| Skill Gap Analysis | _(screenshot)_ |
| Dashboard / Report History | _(screenshot)_ |

---

## 🔮 Future Enhancements

- [ ] PDF export of full report
- [ ] Resume parsing with OCR support
- [ ] Mock interview with AI voice feedback
- [ ] Progress tracker for 7-day plan
- [ ] Email report delivery
- [ ] Docker containerization & CI/CD pipeline

---

## 👨‍💻 Author

**Shahbaz**
B.Tech — AI & Data Science | GNIOT, Greater Noida

[![GitHub](https://img.shields.io/badge/GitHub-shahbaz00000-181717?style=for-the-badge&logo=github)](https://github.com/shahbaz00000)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/your-linkedin)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

⭐ **If this project helped you prepare for interviews, give it a star!** ⭐

*Built with ❤️ using MERN + PostgreSQL + Gemini AI + LangChain*

</div>
