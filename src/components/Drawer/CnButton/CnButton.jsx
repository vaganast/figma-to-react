import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import AddIcon from '@mui/icons-material/Add';
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const options = ['Create new', 'Edit', 'Delete'];


const StyledButtonGroup = styled(ButtonGroup)({
  '& .MuiButtonGroup-root .MuiButtonGroup-grouped:not(:last-of-type)': {
    
    borderColor : "#F3F3F3",
    borderRight: '1px solid #F3F3F3',
    borderRightColor:'#F3F3F3'
   
  },
  '& .MuiButton-startIcon': {
      marginLeft:'0',
      marginRight:'0'
  },
  '& .MuiButtonGroup-grouped:not(:last-of-type):hover': { // class selector 
    borderColor: "#F3F3F3"
  },
  '& .MuiButton-sizeSmall' :{    
    color:'#202020'
  },
  '& .MuiPopper-root .MuiPaper-elevation .MuiPaper-rounded .MuiList-root' :{
    position:'absolute',
    display:'flex',
    flexFlow:'column',
    alignItems:'flex-start',
    width:'232px',
    overflow:'visible',
    left:'20'
    }
});

export default function CnButton() {
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
           marginTop:'36px',
           width:'185px',
           height:'35px',
           backgroundColor:'#FFFFFF',
           fontSize: '13px',
           fontWeight: '500',
           borderRadius: '20px',
           boxShadow:'0px 2px 2px rgba(0, 0, 0, 0.15)',
           }}
      >
        <Button 
        onClick={handleClick}
        startIcon={
        <AddIcon 
        sx={{
        marginLeft:'17px',
        marginRight:'10.33px',
        width:'11.67px', 
        height:'11,67px', 
        color:'#202020'}}
        />}

        sx={{              
          padding:'0',
          paddingRight:'36px',
          boxSizing:'border-box',
          borderRightColor:'#F3F3F3',
          whiteSpace:'nowrap',
          color:'#202020',
          textTransform:'none',
          lineHeight:'16px',
          letterSpacing:'-0.01em',
          textShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}>Create new</Button>
        <Button        
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <KeyboardArrowDownIcon />
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
            <Paper sx={{width:'185px', marginTop:'5px', borderRadius:'10px' }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem sx={{fontSize:'15px', color:'#202020', fontWeight:'500'}}
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
