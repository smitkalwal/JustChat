/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Links() {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
    >
      <Link href="/signin">Sign In</Link>
      <Link href="/signup" color="inherit">
        Sign up
      </Link>
    </Box>
  );
}
