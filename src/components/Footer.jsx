import { Text, Box, Divider } from "@chakra-ui/react";
import "../index.css";

export const Footer = () => {
  return (
    <Box
      color="gray"
      bgColor="#F5F5F5"
      position="relative"
      bottom="0"
      w="100%"
      textAlign="center"
      mt="100px"
    >
      <Box p="10px 0 4px 0">
        <Text fontWeight="700" pb="15px">
          Kimmann Hydrauliek Service
        </Text>
        <Box fontWeight="400" fontSize="15px" pb="5px">
          <Text>info@kimmann.nl</Text>
          <Text>+31 6 51 00 21 65</Text>
        </Box>
        <Box fontWeight="400" fontSize="15px" pb="20px">
          <Text>KVK: 04067166</Text>
        </Box>
        <Divider borderColor="gray" />
        <Text p="4px" fontSize="0.7rem">
          © 2023 Kimmann Hydrauliek Service | Alle rechten voorbehouden
        </Text>
      </Box>
    </Box>
  );
};
