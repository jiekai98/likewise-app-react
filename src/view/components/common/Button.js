import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';


const BasicButtons = ({label,handleAction,style}) => {
  return (
    <>
      <Button variant="contained" onClick={handleAction} style={{style}}>{label}</Button>
    </>
  );
}

BasicButtons.propTypes={
    label:PropTypes.string.isRequired,
}

export default BasicButtons;