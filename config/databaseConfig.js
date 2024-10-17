import mongoose from "mongoose";
import ENV from "./config.js";  // Assuming this imports from your .env variables

async function connect() {
  const isDevelopment = process.env.NODE_ENV === 'development';

  let dbUri;
 if (isDevelopment) {
    // Use local MongoDB instance for development
    dbUri = process.env.LOCAL_URI;
    console.log("Using Local MongoDB for development");
  } else {
    // Use MongoDB Atlas for production
    dbUri = ENV.ATLAS_URI;
    console.log("Using MongoDB Atlas for production");
  }

  try {
    await mongoose.connect(dbUri);
    console.log("Database Connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

export default connect;
