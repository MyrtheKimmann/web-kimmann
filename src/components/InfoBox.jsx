import { Box, Text } from "@chakra-ui/react";
// icons
import { BsHouse } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { VscMail } from "react-icons/vsc";

export const InfoBox = () => {
  return (
    <>
      <Box
        p="40px"
        alignSelf="center"
        display="flex"
        flexDirection="column"
        gap="40px"
        color="white"
        bgColor="#002d62"
        maxWidth="350px"
        mt={{ base: "80px", md: "initial" }}
      >
        <Box display="flex" gap="40px" alignItems="center">
          <BsTelephone className="contact-icon" />
          <Text>+31 6 51 00 21 65</Text>
        </Box>
        <Box display="flex" gap="40px" alignItems="center">
          <VscMail className="contact-icon" />
          <Text>info@kimmann.nl</Text>
        </Box>
        <Box display="flex" gap="40px" alignItems="center">
          <BsHouse className="contact-icon" />
          <Text>
            Achterweg 1 <br />
            7874 TL Odoornerveen <br />
          </Text>
        </Box>
      </Box>
    </>
  );
};
