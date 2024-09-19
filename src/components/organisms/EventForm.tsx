import { Box } from '@mui/material';
import { useForm, FormProvider } from "react-hook-form";
import EventFormFields from '../molecules/EventFormFields';
import SubmitButton from '../atoms/SubmitButton';

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

const EventForm = ({ addEvent }:EventFormProps ) => {
    const methods = useForm<EventFormInputs>();
    const { handleSubmit, reset } = methods;

    const onSubmit = (data: EventFormInputs) => {
        addEvent(data);
        reset();
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ maxWidth: 'md', mx: 'auto', p: 4, boxShadow: 3 }}>
                    <h2 className="text-xl font-bold mb-4">Agregar Evento</h2>

                    {/* Campos del formulario */}
                    <EventFormFields />

                    {/* Botón de enviar */}
                    <SubmitButton label="Guardar Evento" />
                </Box>
            </form>
        </FormProvider>
    );
};

export default EventForm;
