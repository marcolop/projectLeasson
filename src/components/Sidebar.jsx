import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Image from '../assets/img/Vector 21.37.26.png';
import style from '../modules/SideBar.module.css';
import HomeIcon from '@mui/icons-material/Home';
import Grid from '@mui/material/Grid';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import Register from '../pages/RegisterPage/Register';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


  const handleDrawerSet = () => {
     setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
           <IconButton onClick={handleDrawerSet}>
            {!open ? <ChevronRightIcon/> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
         <Box sx={{
            width: 400,
            heigth: 400
        }}>
          <img src={Image}/>
         </Box>
        <List>
          {['Inicio', 'Empresas', 'Usuarios', 'Perfil','Cerrar Sesión'].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider color="#6640FC" className={style.divider}/>
      </Drawer>
      <Grid container 
          direction="row" 
          justifyContent="center" 
          alignItems="center"
          columns={16}
          spacing={2}>
         <Grid  sx={8} md={8}>
           <Box sx={{
               color: 'var(--primary)'
           }}>
             <h2>Usuarios</h2>
           </Box>
         </Grid>
         <Grid xs={4} md={4}>
           <Register/>
         </Grid>
         <Grid xs={8}>
           <SearchIcon/>
         </Grid>
      </Grid>
        <DrawerHeader/>
    </Box>
  );
}
