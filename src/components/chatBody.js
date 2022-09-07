import React from 'react';

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ChatBody = ({ messages }) => {

    return (
        <List >
            {messages.map((message) =>
                message.email === localStorage.getItem('email') ? (
                    <ListItem key={message.id}>
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary={message.text}></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="09:30"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                ) : (
                    <ListItem key={message.id}>
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="left" primary={message.text}></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="left" secondary="09:31"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                )
            )}
        </List>
    );
};

export default ChatBody;