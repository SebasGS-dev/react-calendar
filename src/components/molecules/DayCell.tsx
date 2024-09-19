import { Paper } from '@mui/material';
import TypographyAtom from '../atoms/TypographyAtom';
import EventItem from './EventItem';

interface DayCellProps {
    dayNumber: number;
    events: Array<{
        eventName: string;
        user: string;
        priorityColor: string;
        eventDate: string;
        editLink: string;
        onDateChange: (newDate: string) => void;
        onDelete: () => void;
    }>;
}

const DayCell = ({ dayNumber, events }: DayCellProps) => {
    return (
        <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, position: 'relative' }}>
            <TypographyAtom variant="h6" text={dayNumber.toString()} fontWeight="bold" align="center" />
            
            {events.map((event, index) => (
                <EventItem
                    key={index}
                    eventName={event.eventName}
                    user={event.user}
                    priorityColor={event.priorityColor}
                    eventDate={event.eventDate}
                    editLink={event.editLink}
                    onDateChange={event.onDateChange}
                    onDelete={event.onDelete}
                />
            ))}
        </Paper>
    );
};

export default DayCell;
