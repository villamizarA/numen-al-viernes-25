import { Router } from "express";
import { authRequiered } from "../middlewares/validartoken.js";
import {
    getRecordatorios,
    createRecordatorio,
    getRecordatorio,
    updateRecordatorio,
    deleteRecordatorio,
} from "../controllers/recordatorios.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createRecordatorioSchema } from "../schemas/recordatorios.schema.js";

const router = Router();

router.get("/recordatorios", authRequiered, getRecordatorios);

router.get("/recordatorios/:id", authRequiered, getRecordatorio );

router.post("/recordatorios", validateSchema(createRecordatorioSchema),authRequiered, createRecordatorio); // 

router.delete("/recordatorios/:id", authRequiered, deleteRecordatorio);

router.put("/recordatorios/:id", authRequiered, updateRecordatorio);

export default router;