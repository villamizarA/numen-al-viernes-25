import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ButtonLink } from "./utiles/ButtonLink";
import { HiUserCircle } from "react-icons/hi";
import { FaHome, FaBook, FaBars, FaTimes } from "react-icons/fa"; // Agregamos FaBars y FaTimes
import useSound from "use-sound";
import principal from '../assets/audios/principal.mp3';

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const [playSound, { stop }] = useSound(principal);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Estado para controlar el menú hamburguesa

  const toggleMusic = () => {
    if (musicPlaying) {
      stop();
    } else {
      playSound();
    }
    setMusicPlaying(!musicPlaying);
  };

  useEffect(() => {
    playSound();
    setMusicPlaying(true);

    return () => {
      stop();
    };
  }, []);

  // Función para alternar el estado del menú hamburguesa
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-zinc-800 my-3 p-5 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="mr-4">
            <FaHome className="text-fuchsia-500 text-xl hover:text-fuchsia-700 transition-colors duration-300" />
          </Link>
          <h1 className="text-2xl font-bold text-fuchsia-700">
            <Link to={isAuthenticated ? "/recordatorios" : "/"}>
              <FaBook className="text-fuchsia-500 text-xl hover:text-fuchsia-700 transition-colors duration-300" />
            </Link>
          </h1>
        </div>
        {/* Botón del menú hamburguesa */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Menú en dispositivos móviles */}
        <ul className={`md:flex md:gap-x-2 md:items-center ${mobileMenuOpen ? "block" : "hidden"}`}>
          {isAuthenticated ? (
            <>
              <li className="text-fuchsia-500">Bienvenido {user.username}</li>
              <li>
                <ButtonLink to="/add-recordatorio" className="border-none">Agg Recordatorio</ButtonLink>
              </li>
              <li>
                <ButtonLink to="/PersonajesCard" className="border-none">tus Personajes</ButtonLink>
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
      </div>
    </nav>
  );
}
