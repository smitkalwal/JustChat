import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';

// const SubmitButton = (props) => ( <Button {...props} type='submit' />);

const ChatFooter = ({socket}) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        console.log(message);
        const userData = localStorage.getItem("userData");
        const parsedUserData  = JSON.parse(userData);
        // console.log(parsedUserData);
        if (message.trim() && parsedUserData.email && parsedUserData.firstName) {
            socket.emit('message', {
              text: message,
              email : localStorage.getItem("email"),
              userData: parsedUserData,
              id: `${socket.id}${Math.random()}`,
              socketID: socket.id,
            });
        }
        setMessage('');
    };
    
    return (
        <Box component="form" onSubmit={handleSendMessage} noValidate sx={{ mt: 1 }}>
            <Grid container style={{ padding: '20px' }}>
                <Grid item xs={11}>
                    <TextField value={message} id="outlined-basic-email" label="Type Something" fullWidth onChange={(e) => setMessage(e.target.value)} />
                </Grid>
                <Grid item xs={1} align="right">
                    <Fab color="primary" aria-label="add" type="submit" ><SendIcon /></Fab>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ChatFooter;