import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
// components
import { NavList } from "../ui/NavList";
// icons
import { CgMenuRightAlt } from "react-icons/cg";

export const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CgMenuRightAlt className="menu-icon" onClick={onOpen} />

      <Drawer size="xs" isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="navy" />

          <DrawerBody
            display="inline-block"
            p="50px 0 0 30px"
            bgColor="#F5F5F5"
            fontWeight="600"
            fontSize="18px"
          >
            <NavList display={"initial"} onClose={onClose} padding={"15px"} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
