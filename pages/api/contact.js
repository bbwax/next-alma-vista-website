import { MongoClient } from 'mongodb';
import Joi from 'joi';

const schema = Joi.object({
  firstName: Joi.string().min(2).max(30).required(),
  lastName: Joi.string().min(2).max(30).required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().pattern(new RegExp('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')).required(),
  message: Joi.string().min(5).max(500).required(),
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { error, value } = schema.validate(req.body);

    if (error) {
      res.status(400).json({ message: 'Invalid input', error: error.details });
      return;
    }

    const { firstName, lastName, email, phoneNumber, message } = value;

    let client;
    
    try {
      client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();
      const db = client.db(process.env.MONGODB_DB);
      await db.collection('contacts').insertOne({ firstName, lastName, email, phoneNumber, message });
    } catch (error) {
      res.status(500).json({ message: 'Database connection failed', error: error.message });
      return;
    } finally {
      client.close();
    }

    res.status(200).json({ message: 'Contact data stored successfully!' });
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}