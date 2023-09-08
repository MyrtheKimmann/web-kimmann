import { Box, Heading, Text } from "@chakra-ui/react";

export const ServiceText = ({ icon, heading, text }) => {
  return (
    <>
      <Box p="40px" textAlign="center" w="300px" bgColor="#F5F5F5" mb="1%">
        {icon}
        <Heading as="h4" size="sm" pt="20px">
          {heading}
        </Heading>
        <Text color="gray" pt="10px">
          {text}
        </Text>
      </Box>
    </>
  );
};
