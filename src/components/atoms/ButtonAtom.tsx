import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface ButtonAtomProps {
    label: string;
    onClick?: () => void;
    color?: 'primary' | 'error';
    linkTo?: string;
}

const ButtonAtom = ({ label, onClick, color = 'primary', linkTo }:ButtonAtomProps) => {
    if (linkTo) {
        return (
            <Button component={Link} to={linkTo} variant="contained" color={color}>
                {label}
            </Button>
        );
    }
    
    return (
        <Button variant="contained" color={color} onClick={onClick}>
            {label}
        </Button>
    );
};

export default ButtonAtom;
