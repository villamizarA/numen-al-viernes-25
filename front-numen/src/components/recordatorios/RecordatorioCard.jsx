import { useRecordatorios } from "../../context/RecordatoriosContext";
import { Button, ButtonLink, Card } from "../../components/utiles";

function RecordatorioCard({ recordatorio }) {

  const { deleteRecordatorio } = useRecordatorios();

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{recordatorio.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
            onClick={() => deleteRecordatorio(recordatorio._id)}>Borrar</button>
          <Button>Editar</Button>
        </div>
      </header>
      <p className="text-slate-300">{recordatorio.title}</p>
      <p className="text-slate-300">{recordatorio.description}</p>
    </div>
  );
}
 
export default RecordatorioCard;
