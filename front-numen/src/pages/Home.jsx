import React, { useState } from "react";
import useSound from "use-sound";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import principal from "../assets/audios/principal.mp3";
import { Link } from "react-router-dom";
import { ButtonLink } from "../components/utiles";

function Home() {
  const [musicPlaying, setMusicPlaying] = useState(true);
  const [playSound, { stop }] = useSound(principal);

  const toggleMusic = () => {
    if (musicPlaying) {
      stop();
    } else {
      playSound();
    }
    setMusicPlaying(!musicPlaying);
  };

  return (
    <section className="flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat p-10 min-h-screen">
      <header className="bg-zinc-800 p-10">
        <h1 className="text-4xl py-2 font-bold">Recordatorio</h1>
        <p className="text-md text-slate-400">
          Te gusta Game Of Thrones? ¿Qué estás esperando!
          <br />
          Unete y ten tus recordatorios con games of thrones.
        </p>
        <br />
        <ButtonLink to="/LoginPage">¿Comenzamos?</ButtonLink>
      </header>

      <div className="my-8 mt-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <iframe
          width="360"
          height="200"
          src="https://www.youtube.com/embed/40ca06oWTZE?si=U6sAzPpGBJ_ZnYDM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <iframe
          width="360"
          height="200"
          src="https://www.youtube.com/embed/9bwcu6rewSY?si=hDPrR7I6yNHboPJ2"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <footer className="p-4 text-center">
        <div className="flex justify-center space-x-4">
          <a href="URL_DE_TU_INSTAGRAM">
            <FaInstagram
              size={24}
              className="text-pink-600 hover:text-pink-800"
            />
          </a>
          <a href="URL_DE_TU_FACEBOOK">
            <FaFacebook
              size={24}
              className="text-blue-600 hover:text-blue-800"
            />
          </a>
          <a href="URL_DE_TU_YOUTUBE">
            <FaYoutube size={24} className="text-red-600 hover:text-red-800" />
          </a>
        </div>
        <p className="mt-2 text-fuchsia-600">
          Síguenos en nuestras redes sociales para mantenerte actualizado.
        </p>
      </footer>
    </section>
  );
}

export default Home;
