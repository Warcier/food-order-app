import mongoose from 'mongoose';

export default async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('>>> DB is connected <<<');
  }
    catch (error) {
        console.log('Something went wrong connecting to the DB:');
        console.log(error);
    }
}