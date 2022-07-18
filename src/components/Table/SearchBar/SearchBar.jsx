import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { images } from '../../../constants';

import ActiveBn from './ActiveBn/ActiveBn';

export default function SearchBar() {
  return (
    <Box sx={{
        width:'100%', 
        height:'70px', 
        backgroundColor:'#FFFFFF', 
        boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.06)', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        display: 'flex', 
        padding:'17px 31px 18px 20px',
        mb:'2px',
        }}>

     <Box 
     sx={{
      alignItems: 'center', 
      display: 'flex', }}>       
    <Typography sx={{
        width:'134px', 
        height:'24px',
        color:'#202020', 
        fontSize:'20px', 
        lineHeight:'24px', 
        fontStyle:'normal', 
        fontWeight:'500'}}>Customer List</Typography>

    <Paper
      component="form"
      sx={{ display: 'flex', 
            alignItems: 'center', 
            width: '368px', 
            height: '35px', 
            border: '1px solid #DEDEDE', 
            borderRadius: '5px' ,
            boxShadow: 'none',
            marginLeft: '29px',
            marginRight: '12px'
        }}
    >
     <IconButton type="submit" sx={{ p: '10px'}} aria-label="search">
        <SearchIcon sx={{width:'16px', height:'16px' }} />
      </IconButton>
      <InputBase
        sx={{paddingLeft:'2px', flex: 1 , fontSize:'13px', fontWeight:'500', letterSpacing:'0.01em', color:'#b0b0b0'
      }}
        placeholder="Customer: Project name"
        inputProps={{ 'aria-label': 'Customer: Project name' }}
      />     
    </Paper>
            <ActiveBn />

            <Button 
            variant="text" 
            sx={{
                width:'69px',
                height:'35px',
                marginLeft:'12px',
                backgroundColor:'#F5F5F5',
                color:'#202020',
                borderRadius:'5px',
                fontSize:'13px',
                fontWeight:'500',
                lineHeight:'16px',
                letterSpacing:'0.01em',
                textTransform:'none'
                }}>Edit</Button>

                </Box>


                <Box sx={{alignItems: 'center', 
                 display: 'flex', }}>   
            <Button 
            variant="text" 
            startIcon={<img src={images.syncIcon} alt='synchronize icon'/> }
            sx={{
                width:'81px',
                height:'35px',
                backgroundColor:'#F5F5F5',
                color:'#000000',
                borderRadius:'5px',
                fontSize:'13px',
                fontWeight:'500',
                lineHeight:'16px',
                letterSpacing:'0.01em',
                textTransform:'none'
                }}>Sync</Button>

            <Button 
            variant="text" 
            startIcon={<AddIcon sx={{}}/> }
            sx={{
                padding:'9px 17px 10px 18px',
                width:'80px',
                height:'35px',
                marginLeft:'13px',
                backgroundColor:'#62B839',
                color:'#FFFFFF',
                borderRadius:'5px',
                fontSize:'13px',
                fontWeight:'500',
                fontStyle:'normal',
                lineHeight:'16px',
                letterSpacing:'0.01em',
                textTransform:'none',
                '&:hover': {              
                    backgroundColor: '#62B839',          
                  },
                }}>Add</Button>

                </Box>

    </Box>
  );
}
