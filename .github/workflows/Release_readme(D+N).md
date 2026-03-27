# 🚀 Release Workflow (Docker + npm)

This workflow automates the **release process** of a Node.js application by:

- Running build & tests
- Publishing the package to **npm**
- Building and pushing a **Docker image**

---

## 📌 Workflow Name
**Release (Docker + npm)**

---

## 🚀 Trigger

```yaml
on:
  push:
    tags:
      - 'v*'
```

### ✅ Runs only when:
- A tag like `v1.0.0` is pushed

---

## 🔐 Permissions

- `contents: read` → Read repository code  
- `packages: write` → Push packages  

---

## 🧱 Jobs Overview

### 1️⃣ build-and-test

Runs validation before release.

#### ✅ Key Features:
- Runs on **Ubuntu**
- Uses **Node.js 24**
- Ensures tag is from **main branch only**

---

### 🔍 Branch Validation Logic

- Fetches `main` branch
- Checks if tag commit exists in `main`
- Fails workflow if not from `main`

---

### 🪜 Steps

1. Checkout repository (full history)
2. Validate tag origin branch
3. Install dependencies (`npm ci`)
4. Run:
   - Lint (`--if-present`)
   - Test (`--if-present`)
   - Build (`--if-present`)

---

### 2️⃣ release

Runs only if build-and-test succeeds.

---

### 🪜 Steps

#### 🔹 Extract Version
Converts:
```
v1.0.0 → 1.0.0
```

---

#### 🔹 Setup Node
- Uses Node.js 24
- Configures npm registry

---

#### 🔹 Publish to npm
```bash
npm publish --access public
```

Requires:
- `NPM_TOKEN` (stored in GitHub Secrets)

---

#### 🔹 Docker Login
Uses:
- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`

---

#### 🔹 Build & Push Docker Image

```bash
docker build -t username/my-app:version .
docker push username/my-app:version
```

---

## 🔑 Required Secrets

Add these in GitHub **Settings → Secrets**:

- `NPM_TOKEN`
- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`

---

## 🔄 Workflow Flow

```text
Tag Push → Validate → Build & Test → Publish npm → Build Docker → Push Docker
```

---

## ⚠️ Important Notes

- Only tags from `main` branch are allowed
- `package-lock.json` must exist for `npm ci`
- Ensure Dockerfile is present in repo

---

## 🛠️ Troubleshooting

### ❌ Error:
```
Tag is not from main branch. Exiting.
```

### 👉 Reason:
The tag you pushed is **not pointing to a commit from the `main` branch**

---

### ✅ Fix:

Run the following commands:

```bash
git fetch origin
git checkout main
git reset --hard origin/main
```

Then create and push the tag again:

```bash
git tag v1.0.0
git push origin v1.0.0
```

---

## 📦 Example Usage

```bash
git tag v1.0.0
git push origin v1.0.0
```

---

## 🚀 Outcome

- Package published to **npm**
- Docker image pushed to **Docker Hub**

---

## 👨‍💻 Author

Gopi Krishna