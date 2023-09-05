import { createContext, useContext, useState } from "react";
import {createRecordatorioRequest,
  getRecordatoriosRequest,
  deleteRecordatorioRequest,
  getRecordatorioRequest,
  updateRecordatorioRequest,
} from "../api/Recordatorios";

const RecordatorioContext = createContext();

export const useRecordatorios = () => {
  const context = useContext(RecordatorioContext);
  if (!context) {
    throw new Error(
      "useRecordatorios must be used within a RecordatorioProvider"
    );
  }

  return context;
};

export function RecordatorioProvider({ children }) {
  const [recordatorios, setRecordatorios] = useState([]);

  const getRecordatorios = async () => {
    try {
      const res = await getRecordatoriosRequest();
      setRecordatorios(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createRecordatorio = async (recordatorio) => {
    const res = await createRecordatorioRequest(recordatorio);
    console.log(res);
  };

  const deleteRecordatorio = async (id) => {
    try {
      const res = await deleteRecordatorioRequest(id);
      if (res.status === 204)
        setRecordatorios(
          recordatorios.filter((recordatorio) => recordatorio._id !== id)
        );
    } catch (error) {
      console.log(error);
    }
  };

  const getRecordatorio = async (id) => {
    try {
      const res = await getRecordatorioRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateRecordatorio = async (id, recordatorio) => {
    try {
      await updateRecordatorioRequest(id, recordatorio);
    } catch (error) {
      console.error(error);
    }
  };

  return <RecordatorioContext.Provider
      value={{
        recordatorios,
        getRecordatorios,
        deleteRecordatorio,
        createRecordatorio,
        getRecordatorio,
        updateRecordatorio
      }}
>
      {children}
    </RecordatorioContext.Provider>
}
