# Portfolio Backend

A robust RESTful API providing the backend services for a personal portfolio website, including project management, contact processing, and technical stack details.

## Features

- **Project Management**: CRUD operations for projects with image hosting.
- **Contact Form**: Secure submission and automated email delivery.
- **Tech Stack Info**: Dynamic serving of technical skills and tools.
- **About Info**: Management of professional biography and information.
- **Image Hosting**: Integration with Cloudinary for asset management.
- **Secure Configuration**: Environment-based configuration and error handling.

## Tech Stack (High-Level Only)

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (Mongoose)

## Documentation References

For a detailed explanation of the project structure and architecture, see [ARCHITECTURE.md](ARCHITECTURE.md).

## Installation

1.  **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd portfolio-backend
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## Running the Project

1.  **Development Mode (Hot Reload)**:

    ```bash
    npm run dev
    ```

2.  **Build and Start**:

    ```bash
    npm run build
    npm start
    ```

3.  **Run Tests**:
    ```bash
    npm test
    ```

## Environment Variables

The application requires a `.env` file in the root directory. Use the following template:

```env
PORT=3000
MONGODB_URI=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MAIL_USER=your_email_address
MAIL_PASS=your_email_password
FRONTEND_URL=your_frontend_url
NODE_ENV=development
```
