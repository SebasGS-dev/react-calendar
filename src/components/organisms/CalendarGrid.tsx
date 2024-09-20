import { Box } from '@mui/material';
import DayCell from '../molecules/DayCell';
import TypographyAtom from '../atoms/TypographyAtom';

interface CalendarGridProps {
    daysOfSeptember: Date[];
    getEventsForDay: (date: Date) => Array<{
        eventName: string;
        user: string;
        priorityColor: string;
        eventDate: string;
        editLink: string;
        onDateChange: (newDate: string) => void;
        onDelete: () => void;
    }>;
}

const CalendarGrid = ({ daysOfSeptember, getEventsForDay }:CalendarGridProps) => {
    return (
        <Box sx={{ maxWidth: 'xl', p: 4 }}>
            <TypographyAtom variant="h4" text="Calendario - Septiembre 2024" align="center" />

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, mb: 2 }}>
                {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((day, index) => (
                    <TypographyAtom key={index} variant="subtitle1" text={day} fontWeight="bold" align="center" />
                ))}
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
                {/* Días en blanco */}
                {[...Array(6)].map((_, index) => (
                    <Box key={index} />
                ))}

                {/* Días del mes */}
                {daysOfSeptember.map((date, index) => (
                    <DayCell
                        key={index}
                        dayNumber={date.getDate()}
                        events={getEventsForDay(date)}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default CalendarGrid;
