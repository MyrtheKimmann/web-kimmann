import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <Box p="200px 0 300px" textAlign="center">
        <Heading fontSize="3.0rem" color="#002d62" pb="20px">
          Oeps!
        </Heading>
        <Text pb="10px">Deze pagina kon niet gevonden worden.</Text>
        <Link to={"/"}>
          <Button bgColor="#002d62" color="white" fontWeight="normal">
            Naar home
          </Button>
        </Link>
      </Box>
    </>
  );
};
