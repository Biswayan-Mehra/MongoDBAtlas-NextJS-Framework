// Adjust the import statement as needed based on your project's directory structure
import { connectToDatabase } from '../../libs/mongodb.js'; // Assuming mongodb.js is in the root/libs directory

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { db } = await connectToDatabase();
    const markdownFiles = req.body; // Expecting an array of markdown content
    const result = await db.collection('markdownFiles').insertMany(markdownFiles);
    res.json({ message: `Inserted ${result.insertedCount} files.`, ids: result.insertedIds });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
