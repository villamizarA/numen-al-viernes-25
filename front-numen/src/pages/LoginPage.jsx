import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; 
import { Card, Message, Button, Input, Label } from "../components/utiles";
import axios from "axios"; 

function LoginPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Inicializa react-hook-form

const {signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

const onSubmit = handleSubmit((data) => {
  signin(data);
});

useEffect(() => {
  if (isAuthenticated) {
    navigate("/recordatorios");
  }
}, [isAuthenticated]);


return (
  <div className="h-screen flex flex-col justify-center items-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

    {
        signinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center" key={i}>
            {error}
          </div>
        ))
      }

      <h1 className="text-2xl text-fuchsia-600 font-bold my-2">Login</h1>
      <form
        onSubmit={onSubmit}
      >

        <input type="email" {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500">Email es requerido</p>
        )}

        <input type="password" {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">Contraseña es requerida</p>
        )}

        <Button type="submit"
        className="bg-sky-500 text-white px-4 py-2 rounded-md my-2">Login</Button>
      </form>

      <p className="text-fuchsia-500 flex gap-x-2 justify-between">
          ¿Aun no eres fan? <Link to="/RegisterPage" className="text-sky-500">Registrate</Link>
        </p>
    </div>
  </div>

)
}

export default LoginPage;
