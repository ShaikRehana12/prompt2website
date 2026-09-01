
# 🚀 Prompt2Website

**Prompt2Website** is an AI-powered full-stack engine that transforms a single text prompt and user-selected tech stacks into structured, downloadable web application architectures. Built with an enterprise Spring Boot backend and a modern Angular frontend, it bridges the gap between rapid ideation and production-ready scaffolding.

---

## 🛠️ Technology Stack

* **Frontend:** Angular (Standalone Architecture), TypeScript, HTML5, CSS3, FormsModule, HttpClient
* **Backend:** Spring Boot (Java), Spring Data JPA, REST Controllers
* **Database:** H2 In-Memory Database / MySQL (for persistence and history logging)
* **Tools & Hosting:** Vercel (Frontend), Git/GitHub (Version Control), Postman (API Testing)

---

## ✨ Key Features

1. **Multi-Step Tech Stack Selection:** Choose your preferred Frontend framework (Angular, React, Vue, etc.), Backend API layer (Spring Boot, Node.js, FastAPI, etc.), and Database (MySQL, PostgreSQL, H2).
2. **AI Prompt Engine:** Input custom business descriptions or feature prompts to automatically design project file architectures.
3. **Real-Time Compilation UI:** Dynamic loading states, progress bars, and structured file-tree response displays.
4. **History & Record Management:** Secure data logging and project tracking via the Spring Boot backend.

---

## 🏗️ Project Architecture

```text
Prompt2Website/
│
├── prompt2website-frontend/   # Angular SPA Dashboard UI
│   └── src/app/components/dashboard/ # Component, HTML, and CSS files
│
└── Prompt2website-backend/    # Spring Boot REST API Engine
    └── backend/src/main/java/com/prompt2website/backend/
        ├── controller/        # REST Endpoints (/api/generate)
        ├── model/             # Entity & Request Payloads
        ├── repository/        # Database Repositories (JPA)
        └── service/           # Project Generation Core Logic

---

## ⚙️ Running the Project Locally

### 1. Run the Spring Boot Backend

1. Navigate to the backend directory:
```bash
cd Prompt2website-backend/backend

```


2. Start the Spring Boot application using Maven:
```bash
mvn spring-boot:run

```


*(The backend API will run on `http://localhost:8081`)*

### 2. Run the Angular Frontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.20.

1. Navigate to the frontend directory:
```bash
cd prompt2website-frontend

```


2. Install dependencies:
```bash
npm install

```


3. Start the local development server:
```bash
ng serve

```


*(Open your browser at `http://localhost:4200/dashboard`. The application will automatically reload whenever you modify source files.)*

---

## 🧪 Additional Angular CLI Commands

* **Code Scaffolding:** Generate new components, directives, or pipes:
```bash
ng generate component component-name

```


* **Building for Production:** Compile your project into the `dist/` directory:
```bash
ng build

```


* **Running Unit Tests:** Execute unit tests with [Vitest](https://vitest.dev/):
```bash
ng test

```



---

## 📚 Additional Resources

For more information on using the Angular CLI, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

```

```
