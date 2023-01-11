import React from 'react'
import Drawer from '@mui/material/Drawer';
import useState from 'react'
import {List, ListItem} from './NavbarItems'

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Toggle Drawer</button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Navbar;