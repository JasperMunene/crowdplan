# Crowd Plan

Crowd Plan is a simple and efficient platform designed to streamline event creation and discovery. Built using **Next.js**, **Clerk** for authentication, and **JSON Server** for managing a lightweight database (`db.json`), this MVP enables organizers to create events and participants to explore them with ease.

---

## Features

- **Event Creation**: Organizers can create events with relevant details.
- **Event Discovery**: Participants can search for and view events based on their interests.
- **User Authentication**: Secure and seamless sign-up and login using Clerk.
- **Lightweight Database**: Uses `db.json` powered by JSON Server for storing event and user data.

---

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) – React framework for server-rendered apps.
- **Authentication**: [Clerk](https://clerk.dev/) – Secure and user-friendly authentication.
- **Database**: [JSON Server](https://github.com/typicode/json-server) – Quick mock API for `db.json`.

---

## Installation

### Prerequisites
- Node.js installed (v14 or later)
- npm or yarn installed

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/JasperMunene/crowdplan.git
   cd crowdplan
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Clerk**
   - Sign up at [Clerk](https://clerk.dev/) and create a project.
   - Copy your Clerk API keys and configure them in your `.env.local` file:
     ```env
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-frontend-api>
     CLERK_SECRET_KEY=<your-clerk-backend-api-key>
     ```

4. **Run JSON Server**
   - Ensure you have `db.json` in the root directory with the following structure:
     ```json
     {
       "events": []
       "users": []
     }
     ```
   - Start the JSON Server:
     ```bash
     npm json-server --watch db.json --port 3000
     ```

5. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Access the app at `http://localhost:3000`.

---

## Usage

1. **Sign Up and Log In**: Use Clerk's secure authentication to create an account.
2. **Create Events**: Once logged in, navigate to the event creation page to add new events.
3. **Discover Events**: Explore events through a user-friendly interface.

---

## Development

### Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the application for production.
- **`npm run start`**: Run the production build.
- **`json-server --watch db.json --port 3000`**: Start the JSON Server.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## License

The content of this site is licensed under the MIT license Copyright (c) 2024.

