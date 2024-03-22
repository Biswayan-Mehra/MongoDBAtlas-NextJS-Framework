import { connectToDatabase } from 'libs/mongodb.js';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const data = await db
    .collection('markdown_data')
    .find({})
    .toArray();

  res.json(data);
}
