# MongoDB Atlas & Next.js Framework

This project demonstrates how to integrate Next.js with MongoDB Atlas for storing and retrieving markdown files. Follow the instructions below to set up the project and run it on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- A MongoDB Atlas account and a cluster set up. For setting up MongoDB Atlas, follow the [MongoDB Atlas setup tutorial](https://docs.atlas.mongodb.com/getting-started/).

## Setup Instructions

### 1. Clone the Repository

First, clone this repository to your local machine and navigate into the project directory:

```bash
git clone https://github.com/Biswayan-Mehra/MongoDBAtlas-NextJS-Framework.git
cd MongoDBAtlas-NextJS-Framework
```

### 2. Install Dependencies

Install the necessary project dependencies by running:

```bash
npm install
```

### 3. Configure `.env.local`

Create a `.env.local` file in the root directory of your project. Add your MongoDB Atlas connection string and database name as follows:

```env
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB=your_database_name
```

Replace `your_mongodb_connection_string` and `your_database_name` with the appropriate values from your MongoDB Atlas dashboard.

## Running the Development Server

To start the Next.js development server, run:

```bash
npm run dev
```

The application will then be accessible at [http://localhost:3000](http://localhost:3000).

## Working with Markdown Files

### Uploading Markdown Files to MongoDB Atlas

To upload markdown files to your MongoDB Atlas database, execute:

```bash
node pushMarkdownData.js
```

Ensure your markdown files are prepared and structured as expected by the script.

### Fetching Markdown Data from MongoDB Atlas

To retrieve your markdown data from MongoDB Atlas and output it into a `markdownData.json` file, run:

```bash
node fetchMarkdownData.js
```

The `markdownData.json` file will be saved in your project directory, containing the fetched data.

## Note

Follow the MongoDB Atlas setup guide closely to ensure a successful connection to your database. Refer to the source code comments or this README for additional guidance on structuring your markdown files or further details on the scripts.