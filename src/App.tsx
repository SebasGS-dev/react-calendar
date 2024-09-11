import React from "react";
import EventForm from "./components/EventForm";

const App: React.FC = () => {
  return (
    <div className="App p-11">
      <h1 className="text-3xl font-bold text-center">Gestión de Eventos</h1>
      <EventForm />
    </div>
  );
};

export default App;
