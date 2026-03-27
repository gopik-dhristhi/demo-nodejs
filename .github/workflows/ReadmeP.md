# 🚀 Node CI Workflow

This repository uses a **GitHub Actions CI pipeline** to automate the process of installing dependencies, linting, testing, and building a Node.js application.

---

## 📌 Workflow Name
**Node CI**

---

## ⚙️ Configuration Overview

### 🌍 Environment Variables  
# We are using because of node depricated Version
FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true

Forces GitHub Actions to use Node.js 24 internally.

---

### 🔐 Permissions
contents: read  
packages: write  

- `contents: read` → Allows reading repository code  

---

## 🚀 Triggers

The workflow runs on:

- Push to                  **demo branch**
- Pull Request targeting   **main branch**

---

## 🧱 Job: build-and-test

### 🖥️ Runner
Runs on **ubuntu-latest** (Linux VM)

---

### 🔁 Node Version Matrix
Uses Node.js **v24.x**

---

## 🪜 Steps Breakdown

### 1️⃣ Checkout Repository
Fetches the repository code.

### 2️⃣ Setup Node.js
Installs Node.js and enables npm caching.

### 3️⃣ Install Dependencies
Runs:
npm ci

- Faster and reliable installation
- Requires `package-lock.json`

---

### 4️⃣ Lint (Code Quality Check)
Runs only if `lint` script exists.      

---

### 5️⃣ Test (Functionality Check)
Runs only if `test` script exists.

---

### 6️⃣ Build (Production Preparation)
Runs only if `build` script exists.

---

## 🧠 Key Features

- Safe execution (avoids failures if scripts missing)
- Smart script detection
- Fast dependency installation
- Scalable Node version setup

---

## ⚠️ Important Notes

Ensure `package-lock.json` exists for `npm ci`.

If missing:
Run `npm install` or update workflow.

---

## 🔄 Workflow Pipeline

Install → Lint → Test → Build

---

## 🚀 Future Improvements

- Docker integration
- Deployment pipeline
- Multi-node version testing

---

## 👨‍💻 Author

Your Name
