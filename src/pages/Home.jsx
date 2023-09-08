import { Link } from "react-router-dom";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
// components
import { ServiceBox } from "../components/ServiceBox";
import { Numbers } from "../components/Numbers";
import { Welcome } from "../components/Welcome";
// images
import zee from "../images/schip-rood-groot.jpg";

export const Home = () => {
  return (
    <>
      <Box p="70px 0 120px">
        <Image
          src={zee}
          objectFit="cover"
          w="100%"
          h="auto"
          maxHeight={{ base: "20em", xl: "26em" }}
        />
        <Box m="0 auto" p="20px 20px 0px" w={{ base: "100%", xl: "80%" }}>
          <Heading
            pb="15px"
            color="#002d62"
            fontSize="2.0rem"
            w={{ base: "90%", xl: "80%" }}
          >
            Een passende oplossing voor elk hydraulisch probleem!
          </Heading>
          <Text pb="10px" color="gray" w="100%" h="auto" maxWidth="80%">
            Kimmann Hydrauliek Service is hét bedrijf voor het adequaat oplossen
            van hydraulische storingen. De service kent geen grenzen! Er wordt
            gewerkt op land zee en internationaal.
          </Text>
          <Link to={"/contact"}>
            <Button bgColor="#002d62" color="white" fontWeight="normal">
              Contact
            </Button>
          </Link>
        </Box>
      </Box>

      <Numbers />
      <Welcome />
      <ServiceBox />
    </>
  );
};
