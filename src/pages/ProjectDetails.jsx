import { Text, Box, Image, Heading } from "@chakra-ui/react";
import { useLocation, Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import "../index.css";

export const ProjectDetails = () => {
  const { state } = useLocation();
  return (
    <>
      <Box p="100px 20px 100px" m="0 auto">
        <Box textAlign="left" p="0 0 20px 5px">
          <Link to="/projecten" className="linkProjects">
            <Box display="flex" flexDirection="row">
              <IoIosArrowRoundBack className="alignIcon" />
              <Text color="gray" fontWeight="normal">
                Terug naar alle projecten
              </Text>
            </Box>
          </Link>
        </Box>
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
      </Box>
    </>
  );
};
