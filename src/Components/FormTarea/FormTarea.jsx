import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormTarea = () => {
  const [tarea, setTarea] = useState("");

  const inputRef = useRef();

  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tarea.trim().length === 0) {
      inputRef.current.classList.add("is-invalid");
      alert("No es Valido");
      return;
    }
    
    inputRef.current.classList.remove("is-invalid");

    localStorage.setItem("tareas",JSON.stringify([tarea]))
    
    console.log(tarea);
  };

  return (
    <div className="p-3 bg-danger rounded">
      <h1>Ingrese una Tarea</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="fornTareas">
          <Form.Label>Tarea</Form.Label>
          <Form.Control
            value={tarea}
            onChange={handleChange}
            type="text"
            ref={inputRef}
            placeholder="Ingrese una tarea"
          />
        </Form.Group>
        <div className="text-end">
          <Button variant="secondary" type="submit">
            Guardar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormTarea;
