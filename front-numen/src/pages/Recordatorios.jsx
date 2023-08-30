import { useEffect } from "react";
import { useRecordatorios } from "../context/RecordatoriosContext";
import  RecordatorioCard  from "../components/recordatorios/RecordatorioCard";

 function Recordatorios() {
  const { getRecordatorios, recordatorios  } = useRecordatorios();

  useEffect(() => {
    getRecordatorios();
  }, []);

  if (recordatorios.length === 0) return (<h1 className="text-center text-5xl font-bold text-zinc-600 mt-40">Tus recordatorios agendados</h1>);
 
  return (

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
      <h1 className="text-center text-xl font-bold text-zinc-600 mt-10">Tu recordatorios guardados</h1>
      {recordatorios.map((recordatorio) => (
        <RecordatorioCard recordatorio={recordatorio} key={recordatorio._id} />

      ))}
    </div>
   
  );
}

export default Recordatorios;