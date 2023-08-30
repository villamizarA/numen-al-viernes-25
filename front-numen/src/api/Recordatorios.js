import axios from "./axios";

export const getRecordatoriosRequest = async () => axios.get("/recordatorios");

export const createRecordatorioRequest = async (recordatorio) => axios.post("/recordatorios", recordatorio);

export const updateRecordatorioRequest = async (id, recordatorio) => axios.put(`/recordatorios/${id}`, recordatorio);

export const deleteRecordatorioRequest = async (id) => axios.delete(`/recordatorios/${id}`);

export const getRecordatorioRequest = async (id) => axios.get(`/recordatorios/${id}`);
