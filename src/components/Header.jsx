import { Flex, Spacer, Image, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// components
import { NavDrawer } from "./NavDrawer";
// ui
import { NavList } from "../ui/NavList";
// images
import logo from "../images/logo.png";

export const Header = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <>
      <Flex
        zIndex="5"
        position="fixed"
        p="10px 0 10px 10px"
        minWidth="max-content"
        alignItems="center"
        bgColor="white"
        top="0"
        w="100%"
        pr="25px"
        overflow="none"
      >
        <Link to={`/`}>
          <Image src={logo} alt="logo" w="100%" h="auto" maxWidth="200px" />
        </Link>

        <Spacer />

        {isLargerThan800 ? (
          <NavList display={"flex"} padding={"15px"} />
        ) : (
          <>
            <NavDrawer />
          </>
        )}
      </Flex>
    </>
  );
};
