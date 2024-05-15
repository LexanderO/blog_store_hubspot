# HubSpot Blog Store

## Description

This MERN stack application integrates with HubSpot's APIs to view and share/store your HubSpot blog posts. It allows users to authenticate via OAuth, fetch your blogs from HubSpot, display them, and upload to a local database. This project is designed to demonstrate how to:
- Use HubSpot's OAuth and API at backend.
- A database that stores OAuth related information and results of the HubSpot API call.
- A frontend that displays the results of the API call and fetched data from the local database.

## Features

- **HubSpot OAuth Authentication**: Securely authenticate with HubSpot to access API features.
- **HubSpot Blog Fetching**: Retrieve and display your blogs from HubSpot.
- **Upload/Share**: Share your blogs with other users via MongoDB.
- **Blog Fetching**: View yours and other user's shared blogs fetched from MongoDB.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Node.js/Express**: Backend server framework to handle API requests.
- **MongoDB/Mongoose**: Database to store blog upload statuses.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: Promise-based HTTP client for making API requests.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing, allowing your frontend to interact with the backend securely when hosted on different origins.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

1. Before you begin, ensure you have the `Node.js` installed
2. Setup MongoDB Cloud Cluster
3. In HubSpot under Dev Account:
    1. Setup new App project
    2. In the new App settings uder **Auth** tab:
        - add `localhost:5000/oauth-callback` under **Redirect URLs**.
        - Click **+ Add New Scope**, search for `content` and tick the box.
4. In HubSpot under Test Account
    1. Navigate to `Content` > `Blog`
    2. Create a blog and fill out the requirements to publish it with HubSpot.

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/LexanderO/blog_store_hubspot.git
cd blog_store_hubspot
```

2. **Install dependecies**
Frontend:
```bash
cd frontend
npm install
```

Backend:
```bash
cd ../backend
npm install
```

3. **Set up environment variables**
Create a .env file in the backend directory and add the following:
```
HUBSPOT_CLIENT_ID=your_hubspot_client_id
HUBSPOT_CLIENT_SECRET=your_hubspot_client_secret
HUBSPOT_REDIRECT_URI=http://localhost:5000/oauth-callback
MONGO_URI=mongodb://localhost:27017/hubspotblogs
PORT=5000
```
Update `HUBSPOT_CLIENT_ID`, `HUBSPOT_CLIENT_SECRET` and `MONGO_URI` with your HubSpot and MongoDB info

4. **Run the application**
Start the backend server:
```bash
npm start
```

In a new terminal, start the frontend:
```bash
cd ../frontend
npm run dev
```
The application should now be running on `http://localhost:5173`.

### Usage

Navigate to `http://localhost:5173` in your browser to start using the application. You can authenticate with HubSpot using your Test Account, view your blogs fetched from HubSpot's API, upload whichever blog you choose to MongoDB and view blogs uploaded by others.

### Acknowledgments

- HubSpot API Documentation
- HubSpot Academy
- React documentation
- Node.js, Mongoose and Express online resources and documentation
- Tailwind CSS documentation