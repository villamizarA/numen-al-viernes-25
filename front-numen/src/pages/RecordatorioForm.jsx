import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Input, Label } from "../components/utiles";
import { useRecordatorios } from "../context/RecordatoriosContext";
import { Textarea } from "../components/utiles/Textarea";
import { useForm } from "react-hook-form";

function RecordatorioForm() {
  const { createRecordatorio, getRecordatorio, updateRecordatorio } = useRecordatorios();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
  } = useForm();

  useEffect(() => {
    async function loadRecordatorio() {
      if (params.id) {
        const recordatorio = await getRecordatorio(params.id);
        console.log(recordatorio)
        setValue("title", recordatorio.title);
        setValue("description", recordatorio.description);
      }
    }
    loadRecordatorio();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      updateRecordatorio(params.id, data);
    } else {
       createRecordatorio(data);
    }
    navigate("/recordatorios");
  });


  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <form onSubmit={onSubmit}>
        <label htmlFor="title" className="text-white">Título</label>
        <input
          type="text"
          name="title"
          placeholder="Título"
          {...register("title", { required: true })}
          className='w-full bg-zinc-700 text-white px-2 py-2 rounded-md my-2'
          autoFocus
        />
  
        <label htmlFor="description" className="text-white">Descripción</label>
        <textarea
          rows="3"
          placeholder="Descripción"
          {...register("description", { required: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
        ></textarea>
  
        <Button>Guardar</Button>
      </form>
    </div>
  </div>
    )
  }
  
  export default RecordatorioForm;