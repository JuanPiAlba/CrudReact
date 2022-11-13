import { useState } from "react";
import FormTarea from "./Components/FormTarea/FormTarea";
import ListadoTareas from "./Components/ListadoTareas/ListadoTareas";

const App = () => {
  const [tareas, setTareas] = useState([]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <FormTarea tareas={tareas} setTareas={setTareas} />
      <ListadoTareas tareas={tareas}  setTareas={setTareas}/>
    </div>
  );
};

export default App;
