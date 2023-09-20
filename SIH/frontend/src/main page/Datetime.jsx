import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Box} from '@mui/material';

import { DatePicker } from '@mui/x-date-pickers';

 const DateTime=() => {
  return (
    <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']} sx={{marginLeft:'175px'}}>
        <TimePicker label="Choose your time" />
      </DemoContainer>
    </LocalizationProvider>
          
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']} sx={{marginLeft:'225px'}}>
        <DatePicker label="Choose your date" />
      </DemoContainer>
    </LocalizationProvider>

    </Box>



    
    
  );
}
export default DateTime