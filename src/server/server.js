import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import locationRoutes from './routers/locationRoutes';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/location', locationRoutes);


const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Mongoose is connected to the database');
  })
  .catch((error) => {
    console.error('Mongoose connection error:', error);
  });

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
