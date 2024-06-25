import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Headers from "./components/Headers";
import Footers from "./components/Footers";
import Home from "./components/Home";
import SideNav from "./components/SideNav";

import Turnos from './pages/Turnos';
import Reportes from './pages/Reportes';
import Ticket from './pages/Ticket';
import Mensajes from './pages/Mensajes';

const App = () => {
  return (
    <div className="">
      <Router>
        <SideNav />
        <div className="main-content">
        <Headers />
          <Home>
            <Routes>
              <Route path="/turnos" element={<Turnos />} />
              <Route path="/reportes" element={<Reportes />} />
              <Route path="/ticket" element={<Ticket />} />
              <Route path="/mensajes" element={<Mensajes />} />
              {/* Ruta para la página de inicio */}
              <Route path="/" element={<div>Bienvenido a la página de inicio</div>} />
            </Routes>
          </Home>
        </div>
      </Router>

      {/* <Footers /> */}
    </div>
  );
}


  // const [salida, setSalida] = useState(null); // Inicializa como null

  // const getData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/getData");
  //     console.log('Respuesta Axios:::', response.data);
  //     setSalida(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // return (
  //   <div className="container">
  //     <label>Respuesta</label>
  //     {salida ? (
  //       <div>
  //         <p>Status: {salida.status}</p>
  //         <ul>
  //           {salida.students && salida.students.map((student, index) => (
  //             <li key={index}>
  //               <p>ID: {student.id}</p>
  //               <p>Name: {student.name}</p>
  //               <p>Email: {student.email}</p>
  //               <p>Phone: {student.phone}</p>
  //               <p>Language: {student.language}</p>
  //               <p>Created At: {student.created_at}</p>
  //               <p>Updated At: {student.updated_at}</p>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     ) : (
  //       <p>Loading...</p> // Mensaje de carga mientras los datos se obtienen
  //     )}
  //   </div>
  // );

export default App;