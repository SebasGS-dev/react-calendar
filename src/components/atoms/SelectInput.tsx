import { Select, MenuItem, InputLabel, FormHelperText, FormControl } from '@mui/material';

interface SelectInputProps {
    label: string;
    options: Array<{ value: string, label: string }>;
    error?: boolean;
    helperText?: string;
    register: any;
    [x: string]: any;
}

const SelectInput = ({ label, options, error, helperText, register, ...rest }: SelectInputProps) => (
    <FormControl fullWidth error={error} sx={{ mb: 4 }}>
        <InputLabel>{label}</InputLabel>
        <Select {...register} {...rest}>
            {options.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
);

export default SelectInput;
