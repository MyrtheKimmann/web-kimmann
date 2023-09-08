import { Box, Text, Image, Badge, Heading } from "@chakra-ui/react";
import { projects } from "../utils/data";
import { Link } from "react-router-dom";

export const Projecten = () => {
  return (
    <>
      <Box p="100px 20px 0">
        <Box m="0 auto" w="50%" textAlign="center">
          <Heading p="40px 0 40px 0" fontSize="2.0rem" color="#002d62">
            Recent afgesloten projecten
          </Heading>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          gap="30px"
        >
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              state={{
                project,
              }}
            >
              <Box
                w="250px"
                objectFit="cover"
                h="500px"
                boxShadow="lg"
                color="#002d62"
              >
                <Image src={project.image} objectFit="cover" mb="20px" />
                <Box textAlign="center">
                  <Text fontWeight="700">{project.title}</Text>
                  <Badge bgColor="#002d62" color="white">
                    {project.date}
                  </Badge>
                  <br />
                  <Badge bgColor="#002d62" color="white">
                    {project.country}
                  </Badge>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};
