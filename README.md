# Project Setup

## Description

This project consists of a backend service built using Node.js, Apollo Server, and GraphQL, and a frontend application built with Next.js and Tailwind CSS. The backend interacts with external APIs (e.g., NASA API) and provides data to the frontend through GraphQL endpoints. The frontend showcases a user-friendly interface for browsing Mars Rover images.

---

### 1. Clone the Repository

```bash
git clone https://github.com/somir1/samir-weaviate-project.git

```

### 2. Backend setup
```bash
npm i to install all dependecies
Create .env file and add the 2 env varibles.
NASA_IMAGE_URL=https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos
NASA_API_KEY=your_api_key(please reach out for a key or get one from api.nasa.gov)
npm run start:dev

```

### 2. Frontend setup
```bash
cd ../frontend
npm install
npm run dev to start

```
