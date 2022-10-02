import { useState, useEffect } from "react";
import { Load } from "./services/stations";
import imagenLogo from "./assets/planeta.png";
import { Heading, Box, Image, Flex, Center, Text, Spacer, Tag, Button } from '@chakra-ui/react';

export default function Bikes() {
  const [stations, setStations] = useState([]);


  useEffect(() => {
    Load(setStations);
  }, []);

  return (
    <>
      <Center>
        <Heading as="h1" size="4xl" p={5}>
          <Box width={400} background="orange.200" borderRadius={20} p={10} m={5} textAlign="center">
            Bikes
          </Box>
        </Heading>
      </Center>
      <Center><Image m={4} src={imagenLogo} alt="BikeLogo" width={300} /> </Center>


      <section>

        {stations.map((stations) => (

          <Box key={stations.id} bg="yellow.100" p={10} m={5} borderRadius={20}>
            <Flex>
              <Text fontSize="2xl">
                City <strong>{stations.location.city}</strong> -
              </Text>
              <Tag height={45} colorScheme="red" >
                {stations.location.country}
              </Tag>
              <br />
              <Spacer />
              <a href={`/infoBikes/${stations.id}`}>
                <Button p={10} color="green.900" >
                  Consultar
                </Button>
              </a>
            </Flex>
            {stations.id} <br />
            {stations.name} <br />

          </Box>

        ))}


      </section>


    </>
  )

}

