import { Typography } from '@mui/material';

interface TypographyAtomProps {
    variant: 'h4' | 'h6' | 'subtitle1' | 'subtitle2' | 'body2';
    text: string;
    fontWeight?: 'bold' | 'normal';
    align?: 'center' | 'left' | 'right';
}

const TypographyAtom = ({ variant, text, fontWeight, align = 'left' }:TypographyAtomProps) => {
    return (
        <Typography variant={variant} align={align} fontWeight={fontWeight}>
            {text}
        </Typography>
    );
};

export default TypographyAtom;
