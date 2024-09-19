import React from 'react';
import { Box } from '@mui/material';
import TypographyAtom from '../atoms/TypographyAtom';
import ButtonAtom from '../atoms/ButtonAtom';
import TextFieldAtom from '../atoms/TextFieldAtom';

interface EventItemProps {
    eventName: string;
    user: string;
    priorityColor: string;
    eventDate: string;
    onDateChange: (newDate: string) => void;
    onDelete: () => void;
    editLink: string;
}

const EventItem = ({ eventName, user, priorityColor, eventDate, onDateChange, onDelete, editLink }:EventItemProps) => {
    return (
        <Box sx={{ mt: 2, p: 1, borderRadius: 2, backgroundColor: priorityColor, color: 'black' }}>
            <TypographyAtom variant="subtitle2" text={eventName} fontWeight="bold" />
            <TypographyAtom variant="body2" text={user} />

            <TextFieldAtom
                type="date"
                value={eventDate}
                onChange={(e) => onDateChange(e.target.value)}
            />

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                <ButtonAtom label="Editar" linkTo={editLink} />
                <ButtonAtom label="Borrar" color="error" onClick={onDelete} />
            </Box>
        </Box>
    );
};

export default EventItem;
