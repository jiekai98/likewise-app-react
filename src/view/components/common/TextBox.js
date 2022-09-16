import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types'

const BasicTextFields = ({label,onChange}) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={label} variant="outlined" onChange={(e)=>onChange(e.target.value)}/>
    </Box>
  );
    }

BasicTextFields.propTypes={
  label:PropTypes.string.isRequired,
}


export default BasicTextFields;