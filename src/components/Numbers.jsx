import { Box } from "@chakra-ui/react";
// ui
import { Number } from "../ui/Number";

export const Numbers = () => {
  return (
    <>
      <Box
        bgColor="#002d62"
        color="white"
        display={{ md: "flex" }}
        gap="5%"
        justifyContent="center"
        textAlign="center"
        pt="20px"
      >
        <Number number={"35+"} text={"jaar ervaring"} />
        <Number number={"100+"} text={"vaste klanten"} />
        <Number number={"2.5K+"} text={"storingen verholpen"} />
      </Box>
    </>
  );
};
