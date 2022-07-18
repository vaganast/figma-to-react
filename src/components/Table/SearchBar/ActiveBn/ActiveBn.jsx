import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const options = ['Check All', 'Edit', 'Delete'];


const StyledButtonGroup = styled(ButtonGroup)({
  '& .MuiButtonGroup-root .MuiButtonGroup-grouped:not(:last-of-type)': {
    
    borderColor : "#E9E9E9",
    borderRight: '1px solid #E9E9E9',
    borderRightColor:'#E9E9E9'
   
  },
  
  '& .MuiButtonGroup-grouped:not(:last-of-type):hover': { // class selector 
    borderColor: "#E9E9E9"
  },
  '& .MuiButton-sizeSmall' :{    
    color:'#202020'
  },
  
});

export default function ActiveBn() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
    <StyledButtonGroup variant="text">
      <ButtonGroup variant="text" ref={anchorRef} aria-label="split button"
      sx={{
           alignItems:'center',
           width:'105px',
           height:'35px',
           backgroundColor:'#F5F5F5',         
           borderRadius: '5px',
          
           }}
      >
        <Button 
        onClick={handleClick}
         sx={{  
          fontSize:'13px',
          fontWeight: '500',  
          color:'#202020',
          textTransform:'none',
          lineHeight:'16px',
          letterSpacing:'-0.01em',
          paddingRight:'20px'
          }}>Active</Button>

        <Button        
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <KeyboardArrowDownIcon sx={{ fontSize: 20 }}/>
        </Button>
      </ButtonGroup>
      </StyledButtonGroup>
      <Popper sx={{
      zIndex:'2000',
       }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper sx={{width:'115px', borderRadius:'10px' }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem sx={{fontSize:'13px', color:'#202020', fontWeight:'500'}}
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
