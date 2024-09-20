import { TextField } from '@mui/material';
import React from 'react';

interface TextFieldAtomProps {
    type: 'text' | 'date';
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldAtom = ({ type, value, onChange }: TextFieldAtomProps) => {
    return (
        <TextField
            type={type}
            value={value}
            onChange={onChange}
            fullWidth
            sx={{ mt: 2, bgcolor: 'grey.200', borderRadius: 2 }}
        />
    );
};

export default TextFieldAtom;
