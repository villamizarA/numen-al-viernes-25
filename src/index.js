import dotenv from 'dotenv';
import app from "./app.js";
import { connectDB } from "./db.js";

dotenv.config();  // las variables de entorno d.env

const port = process.env.PORT || 8080; 
connectDB('backend');

app.listen(port, () => {
  console.log("Server running on port", port);
});
