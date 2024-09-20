import { Button } from '@mui/material';

interface SubmitButtonProps {
    label: string;
}

const SubmitButton = ({ label }: SubmitButtonProps) => (
    <Button variant="contained" type="submit" fullWidth sx={{ py: 2 }}>
        {label}
    </Button>
);

export default SubmitButton;