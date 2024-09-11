import React from "react";
import { useForm } from "react-hook-form";

type EventFormInputs = {
    eventName: string;
    eventDate: string;
    eventDetails: string;
    user: string;
    priority: string;
};

const EventForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm <EventFormInputs> ();

    const onSubmit = (data: EventFormInputs) => {
        // Guardar el evento en el almacenamiento local
        const events = JSON.parse( localStorage.getItem("events") || "[]" );

        localStorage.setItem("events", JSON.stringify([...events, data]));

        alert("Evento guardado correctamente");
        reset(); // Limpiar el formulario después de guardar
    };

    return (
        <form onSubmit = { handleSubmit(onSubmit) } className="max-w-md mx-auto p-4 shadow-md">
            <h2 className="text-xl font-bold mb-4">Agregar Evento</h2>
    
            {/* Nombre del Evento */}
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Nombre del Evento</label>
                <input type="text"
                    {...register("eventName", { required: "Este campo es obligatorio" })}
                    className={`w-full px-3 py-2 border ${errors.eventName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                />  
                {errors.eventName && <p className="text-red-500 text-sm">{errors.eventName.message}</p>}
            </div>

            {/* Fecha del Evento */}
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Fecha del Evento</label>
                <input type="date"
                    {...register("eventDate", { required: "Este campo es obligatorio" })}
                    className={`w-full px-3 py-2 border ${errors.eventDate ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                />
                {errors.eventDate && <p className="text-red-500 text-sm">{errors.eventDate.message}</p>}
            </div>

            {/* Detalles del Evento */}
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Detalles del Evento</label>
                <textarea
                    {...register("eventDetails")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={4}
                />
            </div>

            {/* Usuarios */}
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Usuario</label>
                <select
                    {...register("user", { required: "Este campo es obligatorio" })}
                    className={`w-full px-3 py-2 border ${errors.user ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                >
                    <option value="">Selecciona un usuario</option>
                    <option value="Juan">Juan</option>
                    <option value="Camilo">Camilo</option>
                </select>
                {errors.user && <p className="text-red-500 text-sm">{errors.user.message}</p>}
            </div>

            {/* Prioridad */}
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Prioridad</label>
                <select
                    {...register("priority", { required: "Este campo es obligatorio" })}
                    className={`w-full px-3 py-2 border ${errors.priority ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                >
                    <option value="">Selecciona la prioridad</option>
                    <option value="Muy Alta">Muy Alta</option>
                    <option value="Alta">Alta</option>
                    <option value="Media">Media</option>
                    <option value="Baja">Baja</option>
                    <option value="Muy Baja">Muy Baja</option>
                </select>
                {errors.priority && <p className="text-red-500 text-sm">{errors.priority.message}</p>}
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Guardar Evento
            </button>
        </form>
    );
};

export default EventForm;
