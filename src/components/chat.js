import React, { useEffect, useState } from 'react';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from './copyright';

import ChatFooter from './chatFooter';
import ChatBody from './chatBody';


import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
const theme = createTheme();

const Chat = ({socket}) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('messageResponse', (data) => setMessages([...messages, data]));
    }, [socket, messages]);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Just Chat
                    </Typography>
                    <Box
                        component={Container}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <List>
                                    <ListItem button key="RemySharp">
                                        <ListItemIcon>
                                            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                        </ListItemIcon>
                                        <ListItemText primary="John Wick"></ListItemText>
                                    </ListItem>
                                </List>
                                <Divider />
                                <Grid item xs={12} style={{ padding: '10px' }}>
                                    <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
                                </Grid>
                                <Divider />
                                <List>
                                    <ListItem button key="RemySharp">
                                        <ListItemIcon>
                                            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                        </ListItemIcon>
                                        <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
                                        <ListItemText secondary="online" align="right"></ListItemText>
                                    </ListItem>
                                    <ListItem button key="Alice">
                                        <ListItemIcon>
                                            <Avatar alt="Alice" src="https://material-ui.com/static/images/avatar/3.jpg" />
                                        </ListItemIcon>
                                        <ListItemText primary="Alice">Alice</ListItemText>
                                    </ListItem>
                                    <ListItem button key="CindyBaker">
                                        <ListItemIcon>
                                            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
                                        </ListItemIcon>
                                        <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={9}>

                                <ChatBody messages={messages} />
                                {/* <List >
                                    <ListItem key="1">
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <ListItemText align="right" secondary="09:30"></ListItemText>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <ListItem key="2">
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <ListItemText align="left" secondary="09:31"></ListItemText>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <ListItem key="3">
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <ListItemText align="right" secondary="10:30"></ListItemText>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                </List> */}
                                <Divider />
                                <ChatFooter socket={socket} />
                                {/* <Grid container style={{ padding: '20px' }}>
                                    <Grid item xs={11}>
                                        <TextField id="outlined-basic-email" label="Type Something" fullWidth />
                                    </Grid>
                                    <Grid item xs={1} align="right">
                                        <Fab color="primary" aria-label="add"><SendIcon /></Fab>
                                    </Grid>
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}

export default Chat;