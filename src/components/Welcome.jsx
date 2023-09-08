import { Box, Heading, Image } from "@chakra-ui/react";
// images
import bus from "../images/kimmann-bus.jpg";

export const Welcome = () => {
  return (
    <>
      <Box
        display={{ md: "flex" }}
        gap="3%"
        p="80px 20px 80px"
        justifyContent="center"
      >
        <Image
          src={bus}
          objectFit="cover"
          w="100%"
          h="auto"
          maxWidth="480px"
          m={{ base: "0 auto", md: "initial" }}
        />
        <Box
          w={{ xl: "30%" }}
          m={{ base: "0 auto", md: "initial" }}
          alignSelf="center"
        >
          <Heading fontSize="2.0rem" color="#002d62" p="15px 0 10px">
            Welkom op de website van Kimmann Hydrauliek Service!
          </Heading>
        </Box>
      </Box>
    </>
  );
};
