import { Divider } from "@chakra-ui/react";

export const Seperator = ({ margin }) => {
  return (
    <>
      <Divider
        border="2px solid #EF0107"
        w="50px"
        borderRadius="20%"
        m={margin}
      />
    </>
  );
};
