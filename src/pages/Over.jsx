import { Box, Text, Heading, Image } from "@chakra-ui/react";
// components
import { Values } from "../components/Values";
// images
import aruba from "../images/v-aruba-kort.jpg";

export const Over = () => {
  return (
    <>
      <Box
        display={{ lg: "flex" }}
        justifyContent="center"
        pt="70px"
        verticalAlign="center"
        bgColor="#002d62"
      >
        <Image
          src={aruba}
          w="100%"
          h="auto"
          maxWidth="550px"
          m={{ base: "0 auto", lg: "initial" }}
        />
        <Box
          bgColor="#002d62"
          m={{ base: "0 auto", lg: "initial" }}
          h="820px"
          color="white"
          w={{ base: "80%", xl: "40%" }}
          p={{ base: "200px 20px 0", xl: "200px 60px 0" }}
        >
          <Heading fontSize="2.0rem" fontWeight="700" w="100%" pb="15px">
            Over Kimmann Hydrauliek Service
          </Heading>
          <Text>
            Hydrauliek Service is een eenmanszaak die gestart is door Hans
            Kimmann. Hij zit nu inmiddels 35 jaar in de hydrauliek. Hij geniet
            nog elke dag van dit werk, het is zijn grote passie om oorzaken te
            vinden van storingen, deze grondig op te lossen zodat de
            hydraulische installatie weer een lange tijd in goede werking kan
            draaien.
          </Text>
        </Box>
      </Box>
      <Values />
    </>
  );
};
