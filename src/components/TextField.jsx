import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({
    label = "Type Here", 
    width = 25, 
    value,
    onChange,
    id = "outlined-basic",
    className = ""
}) {
    return (
        <Box
            component="form"
            sx={{ 
                '& > :not(style)': { 
                    m: 1, 
                    width: `${width}ch`,
                } 
            }}
            noValidate
            autoComplete="off"
            className={className}
        >
            <TextField 
                id={id}
                label={label}
                variant="outlined"
                value={value}
                onChange={onChange}
                sx={{
                    backgroundColor: 'white',
                    borderRadius: 3,
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'primary.main',
                        },
                        '&:hover fieldset': {
                            borderColor: 'primary.dark',
                        },
                    },
                }}
                InputProps={{
                    sx: {
                        height: 36, 
                        padding: 0,
                        fontSize: 14,
                    },
                }}
                InputLabelProps={{
                    sx: {
                        fontSize: 13,
                        top: -5,
                        '&.Mui-focused': {
                            color: 'primary.main',
                        },
                    },
                }}        
            />
        </Box>
    );
}