import {
  AppBar,
  Box,
  createTheme,
  Tab,
  Tabs,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import ImageIcon from '@mui/icons-material/Image';
import Link from 'next/link';
import { useRouter } from "next/router";

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#e5e5e5',
        },
      },
    },
  },
});

export default (): React.ReactElement => {
  const router = useRouter();
  const currentPath = getCurrentPath(router.pathname);
  return (
    <nav className="nav-root">
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Box flex={1} display="flex" justifyContent="space-between">
            <Link href="/">
              <Box
                className="nav-logo-link"
                display="flex"
                alignItems="center"
              >
                <ImageIcon />
                <Typography component="span" variant="h5">
                  Photolog
                </Typography>
              </Box>
            </Link>
            <Box className="nav-box">
              <ThemeProvider theme={theme}>
                <Tabs value={currentPath} aria-label="Navigation Tabs">
                  <Link href="/">
                    <Tab label="Home" />
                  </Link>
                  <Link href="/albums">
                    <Tab label="Albums" />
                  </Link>
                  <Link href="/collections">
                    <Tab label="Collections" />
                  </Link>
                </Tabs>
              </ThemeProvider>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

function getCurrentPath(pathName: string): number {
  if (pathName.includes('collection/')) return 2;
  if (pathName.includes('photo/')) return 0;
  const links = ['/', '/albums', '/collections'].indexOf(pathName);
  return links > -1 ? links : 0;
}
