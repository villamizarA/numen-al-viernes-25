import { useAuth } from "../context/authContext";

function Profile() {
  const { user } = useAuth();

  return (
    <div className="flex justify-center items-center h-screen text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Mi Perfil</h1>

        <p className="mb-2">Nombre de Usuario: {user.username}</p>
        <p className="mb-2">Correo Electrónico: {user.email}</p>
      </div>
    </div>
  );
}

export default Profile;

