import mongoose from 'mongoose';
import app from './app';

const port: number = 5000;

// database connection
main().catch(err => console.log(err));

async function main() {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');

    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`)
    });

    console.log('Database connection successful');
  }catch(err){
    console.log('Failed to connect database', err);
  }
}