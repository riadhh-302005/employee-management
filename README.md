# Employee Management System - DevOps Project

## 📄 Project Report
👉 [View Full Project Report](https://docs.google.com/document/d/1NO22O3CBw4PAToC6f1wSGC2yG-w0ZfyP/edit?usp=sharing&ouid=100011117500704333433&rtpof=true&sd=true)

---

## 📌 Project Overview
This project demonstrates the implementation of a DevOps CI/CD pipeline for an Employee Management System using GitHub, Jenkins, Docker, Node.js, Express.js, and MongoDB.

The project automates the build and deployment process using Jenkins pipelines and Docker containerization.

---

## 🚀 Features
- Add Employee
- View Employees
- Delete Employee
- MongoDB Database Integration
- REST API Backend
- Docker Containerization
- Jenkins CI/CD Pipeline
- Automated Deployment

---

## 🛠️ Technologies Used
- Git & GitHub
- Jenkins
- Docker
- Node.js
- Express.js
- MongoDB
- HTML
- CSS
- JavaScript

---

## ⚙️ DevOps Workflow
1. Code is pushed to GitHub repository
2. Jenkins pulls latest code automatically
3. Docker builds application image
4. Existing container is stopped and removed
5. New Docker container is deployed
6. Application runs on localhost:5000
7. MongoDB stores employee data

---

## 🐳 Docker Commands

### Build Docker Image
```bash
docker build -t employee-management-app .
