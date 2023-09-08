import { Box, Text } from "@chakra-ui/react";

export const Number = ({ number, text }) => {
  return (
    <>
      <Box pb="20px">
        <Text fontSize="2.0rem" fontWeight="700">
          {number}
        </Text>
        {text}
      </Box>
    </>
  );
};
