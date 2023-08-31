import express from "express";
import morgan from "morgan";
import cookieParser  from "cookie-parser";
import cors from 'cors';
import authRoutes from "./routes/auth.routes.js";
import recordatoriosRoutes from "./routes/recordatorios.routes.js";

const app = express()
app.use(cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials:true,
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", recordatoriosRoutes);

export default app;