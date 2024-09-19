import { TextField, FormHelperText, FormControl } from '@mui/material';

interface TextInputProps {
    label: string;
    error?: boolean;
    helperText?: string;
    register: any;
    type?: string;
    [x: string]: any;
}

const TextInput = ({ label, error, helperText, register, type = "text", ...rest }:TextInputProps ) => (
    <FormControl fullWidth error={error} sx={{ mb: 4 }}>
        <TextField
            label={label}
            variant="outlined"
            type={type}
            {...register}
            {...rest}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
);

export default TextInput;
