import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI;

let isConnected = false;

export async function connectToDatabase() {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: 'test',
    });

    isConnected = true;

    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to database: ', error);
  }
}
