import { Text, Box, Image, Heading, Button } from "@chakra-ui/react";
import { useLocation, Link } from "react-router-dom";

export const ProjectDetails = () => {
  const { state } = useLocation();
  return (
    <>
      <Box p="100px 20px 100px" m="0 auto">
        <Box display={{ md: "flex" }} justifyContent="center" gap="5%">
          <Box maxWidth="100%">
            {state.project.detailsImages.map((image) => (
              <Box key={image.id}>
                <Image
                  src={image.image}
                  objectFit="cover"
                  w="100%"
                  h="auto"
                  maxWidth="250px"
                  m={{ base: "0 auto", md: "initial" }}
                  pb="20px"
                />
              </Box>
            ))}
          </Box>
          <Box maxWidth="350px" m={{ base: "0 auto", md: "initial" }}>
            <Heading p="40px 0 40px 0" fontSize="2.0rem" color="#002d62">
              {state.project.title}
            </Heading>
            <Text color="gray">{state.project.text}</Text>{" "}
          </Box>
        </Box>

        <Box textAlign="center">
          <Link to="/projecten">
            <Button
              bgColor="#002d62"
              color="white"
              fontWeight="normal"
              mt="50px"
            >
              Terug naar alle projecten
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};
