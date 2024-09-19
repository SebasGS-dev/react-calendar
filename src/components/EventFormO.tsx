import React from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, TextareaAutosize, Select, MenuItem, Button, FormControl, InputLabel, FormHelperText } from '@mui/material';

type EventFormInputs = {
    eventName: string;
    eventDate: string;
    eventDetails: string;
    user: string;
    priority: string;
    id: number;
};

interface EventFormProps {
    addEvent: (newEvent: EventFormInputs) => void;
}

const EventForm: React.FC<EventFormProps> = ({ addEvent }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<EventFormInputs>();

    const onSubmit = (data: EventFormInputs) => {
        // Llamar a la función addEvent para agregar el nuevo evento
        addEvent(data);
        reset(); // Limpiar el formulario después de agregar el evento
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ maxWidth: 'md', mx: 'auto', p: 4, boxShadow: 3 }}>
                <h2 className="text-xl font-bold mb-4">Agregar Evento</h2>

                {/* Nombre del Evento */}
                <FormControl fullWidth sx={{ mb: 4 }} error={!!errors.eventName}>
                    <TextField
                        label="Nombre del Evento"
                        variant="outlined"
                        fullWidth
                        {...register("eventName", { required: "Este campo es obligatorio" })}
                    />
                    {errors.eventName && <FormHelperText>{errors.eventName.message}</FormHelperText>}
                </FormControl>

                {/* Fecha del Evento */}
                <FormControl fullWidth sx={{ mb: 4 }} error={!!errors.eventDate}>
                    <TextField
                        label="Fecha del Evento"
                        type="date"
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}  // Para que el label se mantenga arriba del campo
                        fullWidth
                        {...register("eventDate", { required: "Este campo es obligatorio" })}
                    />
                    {errors.eventDate && <FormHelperText>{errors.eventDate.message}</FormHelperText>}
                </FormControl>

                {/* Detalles del Evento */}
                <FormControl fullWidth sx={{ mb: 4 }}>
                    <TextField
                        label="Detalles del Evento"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        {...register("eventDetails")}
                    />
                </FormControl>

                {/* Usuario */}
                <FormControl fullWidth sx={{ mb: 4 }} error={!!errors.user}>
                <InputLabel id="user-label">Usuario</InputLabel>
                <Select
                    labelId="user-label"
                    label="Usuario"
                    {...register("user", { required: "Este campo es obligatorio" })}
                >
                    <MenuItem value=""><em>Selecciona un usuario</em></MenuItem>
                    <MenuItem value="Juan">Juan</MenuItem>
                    <MenuItem value="Camilo">Camilo</MenuItem>
                </Select>
                {errors.user && <FormHelperText>{errors.user.message}</FormHelperText>}
                </FormControl>

                {/* Prioridad */}
                <FormControl fullWidth sx={{ mb: 4 }} error={!!errors.priority}>
                <InputLabel id="priority-label">Prioridad</InputLabel>
                <Select
                    labelId="priority-label"
                    label="Prioridad"
                    {...register("priority", { required: "Este campo es obligatorio" })}
                >
                    <MenuItem value=""><em>Selecciona la prioridad</em></MenuItem>
                    <MenuItem value="Muy Alta">Muy Alta</MenuItem>
                    <MenuItem value="Alta">Alta</MenuItem>
                    <MenuItem value="Media">Media</MenuItem>
                    <MenuItem value="Baja">Baja</MenuItem>
                    <MenuItem value="Muy Baja">Muy Baja</MenuItem>
                </Select>
                {errors.priority && <FormHelperText>{errors.priority.message}</FormHelperText>}
                </FormControl>

                <Button variant="contained" type="submit" fullWidth sx={{ py: 2 }}>
                Guardar Evento
                </Button>
            </Box>
        </form>
    );
};

export default EventForm;
