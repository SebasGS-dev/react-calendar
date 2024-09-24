import TextInput from '../atoms/TextInput';
import SelectInput from '../atoms/SelectInput';
import { useFormContext } from 'react-hook-form';
import { getAllCharactersApi } from '../../services/getAllCharactersApi';
import { useEffect, useState } from 'react';
import { characterDOM, optionsSelect } from '../../models/RicAndMortyDOM';
import { characterAdapter } from '../../adapters/RicAndMorAdap';

const EventFormFields = () => {
    const { register, formState: { errors } } = useFormContext();
    const [options, setOptions] = useState<optionsSelect[]>([]);

    const convertToSelectOption = (character:characterDOM[]) =>{
        const optionsCharacters = character.map( (character) => ({
            value: character.id.toString(),
            label: character.name,
        }));

        return optionsCharacters;
    }

    const fetchCharacters = async () => {
        const response = await getAllCharactersApi(); 
        const adaptedResponse = characterAdapter(response?.results || []);
        const optionsCharacters = convertToSelectOption(adaptedResponse);

        setOptions(optionsCharacters);
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <>
            {/* Nombre del Evento */}
            <TextInput
                label="Nombre del Evento"
                register={register("eventName", { required: "Este campo es obligatorio" })}
                error={!!errors.eventName}
                helperText={errors.eventName?.message?.toString() || ''}
            />

            {/* Fecha del Evento */}
            <TextInput
                label="Fecha del Evento"
                type="date"
                register={register("eventDate", { required: "Este campo es obligatorio" })}
                error={!!errors.eventDate}
                helperText={errors.eventName?.message?.toString() || ''}
                InputLabelProps={{ shrink: true }}
            />

            {/* Detalles del Evento */}
            <TextInput
                label="Detalles del Evento"
                multiline
                rows={4}
                register={register("eventDetails")}
            />

            {/* Usuario */}
            <SelectInput
                label="Usuario"
                options={options}
                register={register("user", { required: "Este campo es obligatorio" })}
                error={!!errors.user}
                helperText={errors.eventName?.message?.toString() || ''}
            />

            {/* Prioridad */}
            <SelectInput
                label="Prioridad"
                options={[
                    { value: "", label: "Selecciona la prioridad" },
                    { value: "Muy Alta", label: "Muy Alta" },
                    { value: "Alta", label: "Alta" },
                    { value: "Media", label: "Media" },
                    { value: "Baja", label: "Baja" },
                    { value: "Muy Baja", label: "Muy Baja" }
                ]}
                register={register("priority", { required: "Este campo es obligatorio" })}
                error={!!errors.priority}
                helperText={errors.eventName?.message?.toString() || ''}
            />
        </>
    );
};

export default EventFormFields;
