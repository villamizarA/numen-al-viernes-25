import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./ProtectedRoute";

import Home from "./pages/Home";
import ActoresGame from "./components/ActoresGame";
import RegisterPage from "./pages/RegisterPage";
import Profile from "./pages/Profile";
import LoginPage from "./pages/LoginPage";
import RecordatorioForm from "./pages/RecordatorioForm";
import Recordatorios from "./pages/Recordatorios";
import { RecordatorioProvider } from "./context/RecordatoriosContext";
import backgroundImage from "./assets/img/Tronos2.jpg";
import "./assets/css/estilos.css";


function App() {
  return (
    <AuthProvider>
      <RecordatorioProvider>
        <BrowserRouter>
          <div
            className="bg-cover bg-no-repeat bg-center h-screen"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <main className="container content-container mx-auto px-0 md:px-0">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/PersonajesCard" element={<ActoresGame />} />
                <Route path="/LoginPage" element={<LoginPage />} />
                <Route path="/RegisterPage" element={<RegisterPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/recordatorios" element={<Recordatorios />} />
                  <Route
                    path="/add-recordatorio"
                    element={<RecordatorioForm />}
                  />
                  <Route
                    path="/recordatorio/:id"
                    element={<RecordatorioForm />}
                  />
                </Route>
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </RecordatorioProvider>
    </AuthProvider>
  );
}

export default App;
