import { List, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const NavList = ({ display, onClose, padding }) => {
  return (
    <>
      <List
        textTransform="uppercase"
        textDecoration="none"
        display={display}
        color="darkBlue"
      >
        <ListItem padding={padding} onClick={onClose}>
          <NavLink to={`/`}>Home</NavLink>
        </ListItem>

        <ListItem padding={padding} onClick={onClose}>
          <NavLink to={`/projecten`}>Projecten</NavLink>
        </ListItem>

        <ListItem padding={padding} onClick={onClose}>
          <NavLink to={`/over`}>Over</NavLink>
        </ListItem>

        <ListItem padding={padding} onClick={onClose}>
          <NavLink to={`/contact`}>Contact</NavLink>
        </ListItem>
      </List>
    </>
  );
};
