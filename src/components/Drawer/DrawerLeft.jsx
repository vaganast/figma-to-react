import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppsIcon from '@mui/icons-material/Apps';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

import useStyles from './styles';
import { images } from '../../constants';
import CnButton from './CnButton/CnButton';
import SearchBar from '../Table/SearchBar/SearchBar';
import Table from '../Table/Table';

const drawerWidth = 232;




const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    //padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  }));

export default function DrawerLeft() {
  
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState();
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);    
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box sx={{ display: 'flex', fontFamily:'Inter', fontWeight:'500'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{backgroundColor:'#FFFFFF', height:'60px', boxShadow:'0px 2px 2px rgba(0, 0, 0, 0.06)'}}>
        <Toolbar disableGutters sx={{ justifyContent: open ? 'flex-end' : 'space-between', paddingRight:'31px', paddingLeft:'31px'}}>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ color:'#202020', mr: 2, ...(open && { display: 'none' })}}
          >
            <MenuIcon />
          </IconButton>
          
          <Box sx={{display:'flex' }}> 
          <Button sx={{width:'131px',
          height:'35px',
          backgroundColor:'#F5F5F5',
          borderRadius:'36px',
          justifyContent:'space-between',
          padding:'3px 14px 3px 3px',
          color:'#202020',
          fontSize:'18px',
          lineHeight:'22px',
          fontWeight:'500',
          ':hover':{
            backgroundColor:'#F5F5F5'
          }
          }} 
              startIcon={<PauseCircleIcon sx={{width:'30px', height:'30px'}}
              />}>2:40:00</Button>
          <Avatar src={images.avatarIcon} sx={{marginLeft:'23px'}} />
          </Box>           
        </Toolbar>
      </AppBar>

      

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,          
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            padding: '18px 23px',
            boxSizing: 'border-box',
            backgroundColor: '#F9F9F9',
            overflow:'visible',                          
          },          
            
          
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        
        <Box sx={{width:'126px',height:'24px',flexDirection:'row',display:'flex',marginLeft:'30px',paddingRight:'53px'}}>
        <Box sx={{marginRight:'10px'}}component="img" src={images.greenCircle} alt='greenCircle'/>
        <Typography sx={{flexDirection:'row'}}><span style={{fontWeight:'600'}}>Time</span><span style={{fontWeight:'400'}}>Rewards</span></Typography>
        
        </Box>

        <Button startIcon={<img src={images.frame} 
        className={classes.media} alt='closeDrawer'/>} 
        onClick={handleDrawerClose} 
        sx={{position:'absolute',
        right:'-20px',
        maxWidth: '40px', 
        maxHeight: '40px', 
        minWidth: '40px', 
        minHeight: '40px',
        borderRadius:'50%',
        backgroundColor:'#FFFFFF',
        margin:'-8px 0px 0px 5px',
        '&:hover': {              
          backgroundColor: 'white',          
        },
        }} />
        <CnButton />   
          <List sx={{marginTop:'32px', 
            "&& .Mui-selected .MuiTypography-root": {              
              color:'#202020'
              },
            "&& .Mui-selected" : {
                backgroundColor: "transparent"
              }
            }}>
            <ListSubheader 
              component="div" 
              id="nested-list-subheader" 
              style={{                    
              backgroundColor:'transparent',
              marginLeft:'-16px' ,
              position:'relative'         
            }}>
                <Typography style={{
                              
                              fontStyle:'normal',
                              fontWeight:'700',
                              fontSize:'12px',
                              lineHeight:'15px',
                              color:'#202020',
                              textTransform:'uppercase'
                              }}>
                              WORKSPACE
                </Typography>
            </ListSubheader>

          {[{'title':'My time','icon':<img src={images.timeFrame} alt='time' />}, 
          {'title':'My Expenses','icon':<AccountBalanceWalletIcon />}, 
          {'title':'Approve Timesheets','icon':<AppsIcon />}, 
          ].map((text) => (
            <ListItem key={text.title} disablePadding disableGutters
            onClick={(event) => handleMenuItemClick(event,text.title)}
            selected={text.title === selectedIndex}
            sx={{
              "& .MuiListItemButton-root .MuiListItemIcon-root": {
                minWidth:'36px'
              },
              "& .MuiListItemButton-root": {
                padding:'0',
                maxHeight:'20px',
                marginTop:'18px',
                
              },
              " .MuiTypography-root":{
                fontWeight:'500',
                fontSize:'14px',
                lineHeight:'17px',
                letterSpacing:'-0.01em',
                color:'#5F5D54'                
              }   ,
              
                 
                                

            }}>
              <ListItemButton >
                <ListItemIcon >
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.title} />
              </ListItemButton>
            </ListItem>
          ))}
        
        </List>
        
        <List sx={{"&& .Mui-selected .MuiTypography-root": {              
              color:'#202020'
              },
            "&& .Mui-selected" : {
                backgroundColor: "transparent"
              }}}>
        <ListSubheader 
        component="div" 
        id="nested-list-subheader" 
        style={{                    
          backgroundColor:'transparent',
          marginTop:'38px',
          marginLeft:'-16px',
          position:'relative'
        }}>
          <Typography style={{
                              fontStyle:'normal',
                              fontWeight:'700',
                              fontSize:'12px',
                              lineHeight:'15px',
                              color:'#202020',
                              textTransform:'uppercase'
                              }}>
                              administration
          </Typography>
        </ListSubheader>
          
        {[{'title':'Dashboard','icon':<img src={images.dashboard} alt='dashboard' />}, 
          {'title':'Timesheets','icon':<AppsIcon />}, 
          {'title':'Expenses','icon':<AccountBalanceWalletIcon />},
          {'title':'Invoice','icon':<img src={images.invoice} alt='invoice' />}, 
          {'title':'Employees','icon':<img src={images.employees} alt='employees' />},
          {'title':'Customers','icon':<img src={images.customers} alt='customers' />},
          {'title':'List','icon':<img src={images.list} alt='list' />},
          {'title':'Setup','icon':<img src={images.setup} alt='setup' />},
          {'title':'Reports','icon':<img src={images.reports} alt='reports' />},
          ].map((text) => (
            <ListItem key={text.title} disablePadding 
            onClick={(event) => handleMenuItemClick(event,text.title)}
            selected={text.title === selectedIndex}
            
            sx={{
              "& .MuiListItemButton-root .MuiListItemIcon-root": {
                minWidth:'36px'
              },
              "& .MuiListItemButton-root": {
                padding:'0',
                maxHeight:'20px',
                marginTop:'18px',
              },
              " .MuiTypography-root":{
                fontWeight:'500',
                fontSize:'14px',
                lineHeight:'17px',
                letterSpacing:'-0.01em',  
                color:'#5F5D54'               
              }
            }}>
              <ListItemButton>
                <ListItemIcon>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List sx={{
                  "&& .Mui-selected .MuiTypography-root": {              
                  color:'#202020'
                  },
                  "&& .Mui-selected" : {
                backgroundColor: "transparent"
              }}}>

            <ListSubheader 
              component="div" 
              id="nested-list-subheader" 
              style={{                    
              backgroundColor:'transparent',
              marginTop:'38px',
              marginLeft:'-16px',
              position:'relative'         
            }}>
                <Typography style={{
                              fontStyle:'normal',
                              fontWeight:'700',
                              fontSize:'12px',
                              lineHeight:'15px',
                              color:'#202020',
                              textTransform:'uppercase'
                              }}>
                              integration
                </Typography>
            </ListSubheader>

          {[{'title':'Quick Books','icon':<img src={images.quickbooks} alt='quickbooks' />}, 
          {'title':'Bamboo HR','icon':<img src={images.bambooHR} alt='bamboo HR' />}, 
          ].map((text) => (
            <ListItem key={text.title} disablePadding 
            onClick={(event) => handleMenuItemClick(event,text.title)}
            selected={text.title === selectedIndex}
            sx={{
              "& .MuiListItemButton-root .MuiListItemIcon-root": {
                minWidth:'36px'
                },
                "& .MuiListItemButton-root": {
                  padding:'0',
                  maxHeight:'20px',
                  marginTop:'18px',
                },
                " .MuiTypography-root":{
                  fontWeight:'500',
                  fontSize:'14px',
                  lineHeight:'17px',
                  letterSpacing:'-0.01em',
                  color:'#5F5D54'                 
                }
            }}>
              <ListItemButton>
                <ListItemIcon>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.title} />
              </ListItemButton>
            </ListItem>
          ))}        
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <SearchBar />
        <Table />
      </Main>
    </Box>
    </>
  );
}

