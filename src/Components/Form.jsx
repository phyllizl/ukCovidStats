import TextField from '@mui/material/TextField';

const BasicForm = ({value, name, ...rest}) => {

    return (
        <TextField 
            {...rest}
            name={name}
            value={value}
            required
        />
    )
}

export default BasicForm;