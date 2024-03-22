// pages/api/getMarkdown.js
import { connectToDatabase } from 'libs/mongodb.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { db } = await connectToDatabase();

    const markdownFiles = await db.collection('markdownFiles').find({}).toArray();

    res.json(markdownFiles);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
