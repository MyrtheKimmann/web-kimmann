import { Box, Heading } from "@chakra-ui/react";
import "../index.css";
// icons
import { MdArrowOutward } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { VscTools } from "react-icons/vsc";
import { GiMagnifyingGlass } from "react-icons/gi";

// ui
import { Seperator } from "../ui/Seperator";
import { ServiceText } from "../ui/ServiceText";

export const ServiceBox = () => {
  return (
    <>
      <Heading textAlign="center" pb="10px" color="#002d62" fontSize="1.7rem">
        Diensten
      </Heading>
      <Seperator margin="0 auto" />

      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        gap="1%"
        p="40px 20px 0"
      >
        <ServiceText
          icon={<VscTools className="service-icon" />}
          heading={"Storingen verhelpen"}
          text={
            "Gaat vaak samen met het achterhalen van de oorzaak die dieper ligt, hiermee kan vaak een systeem beter en meer betrouwbaar worden gemaakt."
          }
        />

        <ServiceText
          icon={<MdArrowOutward className="service-icon" />}
          heading={"Optimaliseren"}
          text={
            "Systemen die al wat langer draaien met verouderde technieken kunnen vaak vrij simpel worden aangepast, waardoor een hoger rendement haalbaar is. De kosten voor de aanpassingen zijn vaak snel terugverdient."
          }
        />

        <ServiceText
          icon={<GiMagnifyingGlass className="service-icon" />}
          heading={"Onderhoud & inspectie"}
          text={
            "Bij adequaat onderhoud kan vaak stilstand worden voorkomen. Inspectie ter plaatse brengt meestal een beter inzicht wat de actuele systeemconditie betreft"
          }
        />

        <ServiceText
          icon={<TbNotes className="service-icon" />}
          heading={"Testen"}
          text={
            "Het testen van systemen wordt uitgevoerd met speciale meet-gereedschappen, waarmee systeemcondities zichtbaar worden gemaakt"
          }
        />
      </Box>
    </>
  );
};
