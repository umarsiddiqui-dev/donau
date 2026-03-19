# Donau API Documentation

This document outlines the expected API endpoints and data structures for the Donau backend.

## Base URL
The frontend expects the API to be available at the URL defined in `js/config.js` (default: `http://localhost:3000/api`).

## Authentication Endpoints

### 1. User Registration
`POST /auth/register`
- **Description**: Creates a new user account (Brand or Manufacturer).
- **Request Body**:
  ```json
  {
    "companyName": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: `201 Created` with user object or JWT.

### 2. User Login
`POST /auth/login`
- **Description**: Authenticates a user.
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: `200 OK` with JWT.

## Contact Endpoints

### 1. Send Contact Message
`POST /contact`
- **Description**: Submits a message from the contact form.
- **Request Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "message": "string",
    "company": "string" (optional)
  }
  ```
- **Response**: `200 OK`.

## Briefs Endpoints

### 1. Get All Briefs
`GET /briefs`
- **Description**: Returns all live product briefs.
- **Response**: Array of brief objects.

### 2. Get Brief by ID
`GET /briefs/:id`
- **Description**: Returns details for a specific brief.
- **Response**: Brief object.

---

## Technical Integration Details
- **Headers**: All requests should include `Content-Type: application/json`.
- **Error Handling**: The frontend expects standard HTTP status codes (400, 401, 500) for error states.
- **Authentication**: Token-based authentication (JWT) is recommended. The `js/api.js` file is prepared to include an `Authorization` header.
