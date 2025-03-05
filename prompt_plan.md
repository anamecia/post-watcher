1. Detailed Project Blueprint
Overview
The Blog Post Notification System is a web application that allows users to add blogs they follow, receive notifications when new posts are detected, and manage notification preferences (both via push notifications and daily email summaries). Users can add blogs manually, view a dashboard of followed blogs (with recent posts), mark posts as read/unread, and adjust settings from their profile. Authentication is managed by Clerk, the database is SQLite, and notifications use the Web Push API (for push) and an email service like SendGrid/Mailgun (for email).

Key Components
User Authentication: Managed with Clerk (registration, login, password reset).
Database: SQLite with schema for Users, Blogs, Posts, and Notification Preferences.
Blog Management: API endpoints and UI forms for adding/editing blogs.
Notification System:
Push Notifications: Instant notifications via the Web Push API.
Email Notifications: Daily summary emails for new blog posts.
Dashboard & Profile: User interface to manage blogs, notifications, and account settings.
Error Handling & Testing: Comprehensive error handling with appropriate HTTP status codes, plus unit, integration, and end-to-end tests.
Deployment: Host on Vercel with responsive and mobile-friendly design.
High-Level Steps
Project Setup: Initialize a Next.js project with TypeScript; set up version control and basic project structure.
User Authentication: Integrate Clerk and build registration/login/password reset flows.
Database Setup: Configure SQLite and design the schema for Users, Blogs, Posts, and Notification Preferences.
Blog Management:
Backend: Develop API routes for CRUD operations on blogs.
Frontend: Create forms and dashboards to add and manage blogs.
Notification System:
Build an RSS feed polling service to detect new posts.
Integrate the Web Push API for instant notifications.
Set up email notifications (daily summaries) using SendGrid or Mailgun.
Dashboard & Profile UI: Develop pages for managing blogs, marking posts read/unread, and updating global notification settings.
Integration & Testing: Wire all pieces together with error handling and tests.
Deployment: Deploy to Vercel and ensure smooth operation with local SQLite storage.
2. Iterative Chunk Breakdown
Initial Setup

Create a new Next.js project with TypeScript.
Set up Git, folder structure, and install core dependencies.
Authentication

Integrate Clerk into Next.js (_app.tsx and protected routes).
Build basic sign-up, login, and password reset pages.
Database and Schema

Set up SQLite and create the required tables: Users, Blogs, Posts, and Notification Preferences.
Write migration scripts or initialization code.
Backend: Blog Management API

Create Next.js API routes for creating, reading, updating, and deleting blogs.
Add validation and error handling.
Frontend: Blog Management UI

Build a form for adding blogs and a dashboard for listing them.
Wire the form to the API endpoints.
RSS Feed Polling Service

Implement a service (or cron job) to poll RSS feeds for new posts.
Parse feeds and update the database with new posts.
Push Notifications Integration

Integrate the Web Push API to send notifications.
Create a service that sends notifications based on new posts.
Email Notifications Integration

Set up an email service (SendGrid/Mailgun) and write code to send daily summaries.
Schedule daily jobs (e.g., with a cron task) to generate and send emails.
Dashboard and Profile UI

Build the user dashboard to display followed blogs and recent posts.
Create a profile page for global settings and account management.
Final Integration, Error Handling & Testing

Wire all components together, ensuring proper error handling in both UI and API.
Write unit tests, integration tests, and end-to-end tests.
Prepare for deployment on Vercel.
3. Series of Prompts for a Code-Generation LLM
Each prompt below is intended to be a self-contained instruction that builds on previous work. They are small, iterative chunks that end with wiring components together.

Prompt 1: Project Setup
text
Copy
Edit
Task: Initialize the project.

1. Create a new Next.js project with TypeScript. Ensure that the initial project structure includes the following directories: 
   - /pages (for page components)
   - /components (for reusable UI components)
   - /api (for API routes)
2. Initialize a Git repository and add an appropriate .gitignore file.
3. Install core dependencies including Next.js, React, TypeScript, and any necessary types.
4. Set up a basic README.md describing the project.
5. Verify that the project runs correctly in development mode.

Output should include:
- The Next.js project setup with TypeScript configured.
- The basic folder structure and configuration files.
- A working “Hello World” page that confirms the project is running.
Prompt 2: Clerk Authentication Integration
text
Copy
Edit
Task: Integrate user authentication using Clerk.

1. Install and configure the Clerk package for Next.js.
2. Modify the _app.tsx file to wrap your application with the ClerkProvider.
3. Create basic pages for user registration, login, and password reset.
4. Ensure that protected routes (e.g., a dashboard page) require a valid session.
5. Add simple navigation to access these authentication pages.
6. Verify that the authentication flows (sign up, login, logout, password reset) work correctly.

Output should include:
- Integration of Clerk in _app.tsx.
- Implemented authentication pages with basic styling.
- A protected dashboard page that only authenticated users can access.
Prompt 3: SQLite Database and Schema Setup
text
Copy
Edit
Task: Set up the SQLite database and create the necessary schema.

1. Install the SQLite package (or an ORM if preferred, e.g., Prisma with SQLite) for database interaction.
2. Define the schema with the following tables:
   - Users: id, email, password (or external Clerk id), global notification settings.
   - Blogs: id, userId (foreign key), blog name, blog URL, blog author (optional), RSS feed URL, notification settings.
   - Posts: id, blogId (foreign key), title, excerpt, date, read/unread status.
   - NotificationPreferences: id, userId (foreign key), global settings (instant vs. daily), and any per-blog mute statuses.
3. Write a migration or initialization script that creates these tables.
4. Test the database connection by writing a simple query that inserts and retrieves a record.

Output should include:
- The SQLite configuration and connection code.
- SQL scripts or ORM schema definitions for all required tables.
- A simple script that verifies the database is working as expected.
Prompt 4: Backend API for Blog Management
text
Copy
Edit
Task: Implement backend API routes for blog management.

1. Create Next.js API routes to perform CRUD operations for blogs:
   - POST /api/blogs: To add a new blog.
   - GET /api/blogs: To retrieve the list of blogs for the authenticated user.
   - PUT /api/blogs/[id]: To update blog details.
   - DELETE /api/blogs/[id]: To remove a blog.
2. Include input validation and error handling in each endpoint.
3. Ensure that each API route checks for proper authentication (using Clerk) before performing any database operation.
4. Test each API endpoint using sample data and verify proper HTTP status codes (200 for success, 400 for invalid input, 401 for unauthorized access, 500 for internal errors).
5. End the prompt with wiring the API routes into the main application so they can be consumed by the frontend.

Output should include:
- API route implementations with full CRUD functionality.
- Error handling logic and authentication checks.
- Examples or tests showing that each route works as expected.
Prompt 5: Frontend UI for Blog Management
text
Copy
Edit
Task: Build the frontend for managing blogs.

1. Create a form component that allows users to add a new blog. The form should capture:
   - Blog Name
   - Blog URL
   - Blog Author (optional)
   - RSS Feed URL
   - Notification Settings (enabled/disabled)
2. Develop a dashboard page that fetches and displays the list of blogs for the authenticated user. Each blog entry should show:
   - Blog name, URL, and latest three posts (if available).
   - Options to edit blog details, delete the blog, or mute notifications.
3. Connect the form to the backend API (from Prompt 4) for adding a blog.
4. Ensure that after adding or updating a blog, the dashboard refreshes to show the latest data.
5. Verify proper error messaging and validation on the form.
6. Wire the frontend with the backend API so that the complete flow (add → view → update → delete) is functional.

Output should include:
- A fully functional form for blog addition.
- A dashboard page that displays the blog list and integrates with the API.
- Proper UI feedback and form validation.
Prompt 6: RSS Feed Polling and Post Detection
text
Copy
Edit
Task: Implement a background service to poll RSS feeds for new blog posts.

1. Create a service (or scheduled function) that:
   - Iterates through the list of blogs stored in the database.
   - Polls each blog’s RSS feed URL at a configurable interval.
   - Parses the RSS feed to detect new posts that aren’t already stored in the Posts table.
2. When a new post is detected:
   - Insert the new post details (title, excerpt, date, blog association) into the Posts table.
   - Flag the post as unread.
3. Wire this service into the backend so that it runs on schedule (e.g., using cron jobs or serverless scheduled functions).
4. Ensure error handling is in place for failed feed fetches or parsing errors.
5. End with wiring this new post detection service so that it triggers notification processes (which will be implemented in later steps).

Output should include:
- A service or script that polls RSS feeds and parses them.
- Database insertion logic for new posts.
- Proper error handling and logging for feed polling.
Prompt 7: Push Notifications Integration
text
Copy
Edit
Task: Integrate push notifications using the Web Push API.

1. Set up the Web Push API integration:
   - Configure the service to generate and manage push notification subscriptions for authenticated users.
   - Develop a service function that sends a push notification containing:
     - Blog Name
     - Post Title
     - Author Name
     - Post Excerpt (if available)
     - Link to the post
2. Ensure that the notification is only sent if the user has enabled instant notifications (global and per-blog settings).
3. Create a frontend component that registers the user’s browser for push notifications.
4. Test the push notifications on both desktop and mobile browsers.
5. End with wiring the push notification service to trigger automatically when the RSS feed polling (from Prompt 6) detects a new post.

Output should include:
- Backend and frontend code for push notification subscription and delivery.
- A service function that sends notifications based on new posts.
- Integration ensuring that push notifications respect user settings.
Prompt 8: Email Notifications Integration
text
Copy
Edit
Task: Implement daily email notifications using an email service.

1. Integrate an email service (such as SendGrid or Mailgun) into your project.
2. Write a service function that:
   - Aggregates all new blog posts from the day for each user.
   - Formats the posts into an email-friendly layout (including blog name, post title, excerpt, and link).
3. Schedule the service function to run daily (using a cron job or serverless scheduled function) to send out the summary emails.
4. Include error handling for failed email sends.
5. End with wiring the email notification service so that it complements the push notification system and respects the user’s global setting for daily summaries.

Output should include:
- The email service integration and configuration.
- A daily job script that aggregates posts and sends formatted emails.
- Error handling and logging for email send failures.
Prompt 9: Dashboard and User Profile UI
text
Copy
Edit
Task: Build the comprehensive user dashboard and profile page.

1. Develop a dashboard page that displays:
   - The list of blogs the user is following.
   - The latest three posts from each blog (with options to mark as read/unread).
   - Notification status (enabled/disabled) for each blog.
   - Buttons/controls to edit blog details or mute notifications.
2. Create a user profile page where the user can:
   - Update their email and password.
   - Modify global notification preferences (instant vs. daily).
3. Integrate these pages with the previously built authentication, API routes, and database.
4. Ensure that the UI is responsive and mobile-friendly.
5. End with wiring the dashboard and profile pages so that all components (blog management, notifications, authentication) work together seamlessly.

Output should include:
- Fully functional dashboard and profile pages.
- Integration with the backend for dynamic data fetching and updates.
- Proper navigation between pages and secure access.
Prompt 10: Final Integration, Error Handling, and Testing
text
Copy
Edit
Task: Wire all components together, add robust error handling, and write tests.

1. Review and integrate all previous components:
   - Ensure the authentication (Clerk) works with the dashboard and API routes.
   - Verify that the blog management UI and API routes are fully connected.
   - Confirm that the RSS polling, push notifications, and email notifications work in harmony.
2. Implement comprehensive error handling:
   - Use proper HTTP status codes (200, 400, 401, 500) for API responses.
   - Validate all form inputs on the frontend and backend.
   - Log errors for debugging.
3. Write unit tests for key functionalities:
   - Authentication flows.
   - Blog CRUD operations.
   - Notification services (both push and email).
4. Write integration and end-to-end tests to simulate complete user workflows (e.g., user registration, blog addition, receiving notifications).
5. End with ensuring the project is ready for deployment by running all tests and resolving any issues.

Output should include:
- Integrated code with error handling and logging.
- Test scripts and instructions for running the tests.
- Final confirmation that all parts of the project are wired together and functioning as expected.
