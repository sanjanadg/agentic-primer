
# Agentic Primer

This project is a simple web application that allows users to generate and view database entries. It consists of a **frontend** built with React and a **backend** powered by FastAPI.

---

## Features

- **Frontend**: Displays a list of database entries and allows users to generate new entries. The user can also delete all entries in the database.
- **Backend**: Handles API requests to fetch and generate entries.

---

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (for the frontend)
- **Python 3.9+** (for the backend)
- **npm** or **yarn**
- **pip**

This project uses Font Awesome for icons. Ensure the following dependencies are installed:

```bash
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
```

---

## Setup & Directions:

- Open the unzipped agent-primer project in an IDE
- Open two terminals and cd to the location of the agentic-primer projects
- Setup the backend:
  - cd backend
  - pip install -r requirements.txt
  - uvicorn main:app --reload
- Setup the frontend:
  - cd frontend
  - npm install
  - npm run dev
- View and test:
  - Open the local host link in a web browser (likely http://localhost:5173/)
  - Click "Generate Random Entry" button to generate random entries into the database and view them on the frontend
  - Click "Clear Database" to clear the database

