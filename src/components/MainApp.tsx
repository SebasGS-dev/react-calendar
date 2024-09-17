import EventForm from "./EventForm";
import Calendar from "./Calendar";

interface Event {
    eventName: string;
    eventDate: string;
    eventDetails: string;
    user: string;
    priority: string;
    id: number;
}

interface MainAppProps {
    addEvent: (newEvent: Event) => void
    events: Event[];
    deleteEvent: (event: Event) => void;
    updateEventDate: (event: Event, newDate: string) => void;
}

const MainApp = ({addEvent, events, deleteEvent, updateEventDate}: MainAppProps) => {
    return (
        <div className="App p-11">
            <h1 className="text-3xl font-bold text-center mb-10">
                Gestión de Eventos
            </h1>
            <div className="flex flex-row gap-4 w-full">
                {/* Columna izquierda (Formulario) */}
                <div className="w-1/3">
                    <EventForm addEvent={addEvent} />
                </div>

                {/* Columna derecha (Calendario) */}
                <div className="w-2/3">
                    <Calendar
                        events={events}
                        deleteEvent={deleteEvent}
                        updateEventDate={updateEventDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainApp;
