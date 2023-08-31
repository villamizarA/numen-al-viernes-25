import express from "express";
import morgan from "morgan";
import cookieParser  from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import recordatoriosRoutes from "./routes/recordatorios.routes.js";
import cors from 'cors';

const app = express()

app.use(cors({
origin: "http://localhost:5173",
credentials: true
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", recordatoriosRoutes);

export default app;