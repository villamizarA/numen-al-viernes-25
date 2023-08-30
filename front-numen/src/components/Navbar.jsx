import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./utiles/ButtonLink";
import { HiUserCircle } from "react-icons/hi";
import { FaPlay, FaPause } from "react-icons/fa";
import useSound from "use-sound";
import principal from '../assets/audios/principal.mp3';

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const [playSound, { stop }] = useSound(principal);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const toggleMusic = () => {
    if (musicPlaying) {
      stop();
    } else {
      playSound();
    }
    setMusicPlaying(!musicPlaying);
  };

  return (
    <nav className="bg-zinc-800 my-3 flex justify-between items-center py-5 px-10 rounded-lg">
      <div className="flex items-center">
        {/* Agrega el botón de detener/reproducir música */}
        <button onClick={toggleMusic} className="mr-2">
          {musicPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <h1 className="text-2xl font-bold text-fuchsia-700">
          <Link to={isAuthenticated ? "/recordatorios" : "/"}>
            Tus Recordatorios{" "}
          </Link>
        </h1>
      </div>
      <ul className="flex gap-x-2 items-center">
        {isAuthenticated ? (
          <>
            <li className="text-fuchsia-500">Bienvenido {user.username}</li>
           
            <li>
              <ButtonLink to="/add-recordatorio">Agg Recordatorio</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/PersonajesCard">tus Personajes</ButtonLink>
            </li>
            <li>
              <Link to="/profile" className="rounded-full border-none">
                <HiUserCircle className="text-fuchsia-500 text-xl" />
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => logout()} className="text-fuchsia-500">
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink to="/PersonajesCard">Thrones</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/loginPage">Login</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/registerPage">Registrate</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
